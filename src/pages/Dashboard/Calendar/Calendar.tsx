import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, dateFnsLocalizer, Views, SlotInfo, Event as RBCEvent, NavigateAction, View } from 'react-big-calendar';
import { format, parse, startOfWeek, endOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './Calendar.module.css';
import { acceptBooking, bookingGenerateMeetUrl, finishBooking, getMentorBookings, getMentorBookingsByMonth, getMentorBookingsByWeek, rejectBooking } from '../../../services/bookingService';
import { useAuth } from '../../../context';
import moment from 'moment';
import ResultCountDropdown from '../../../components/ResultCountDropdown/ResultCountDropdown';
import Pagination from '../../../components/Pagination2/Pagination';
import { bookings } from '../../../types/Response';
import BookingsDropdown from './BookingsDropdown';
import SearchBar from './SearchBar';

const locales = {
    'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
    format,
    parse: (dateString: any, formatString: string, backupDate: Date) => parse(dateString, formatString, backupDate),
    startOfWeek: () => startOfWeek(new Date()),
    getDay,
    locales,
});

interface MyEvent extends RBCEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
}

const MyCalendar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [events, setEvents] = useState<MyEvent[]>([]);
    const [selectedEvents, setSelectedEvents] = useState<MyEvent[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<MyEvent | null>(null);
    const [formData, setFormData] = useState<{ title: string; start: string; end: string }>({
        title: '',
        start: '',
        end: '',
    });
    const { user } = useAuth();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [resultCount, setResultCount] = useState<number>(10);
    const [totalValues, setTotalValues] = useState<number>(0);
    const [bookingData, setBookingData] = useState<bookings[]>([]);
    const [searchValue, setSearchValue] = useState<string>();

    const handleDayClick = (date: Date) => {
        const events = getEventsForDay(date);
        setSelectedEvents(events);
        setEditingEvent(null);
        setShowModal(true);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    const handleResultCountSelect = (resultCount: number) => {
        setResultCount(resultCount);
    };

    const handleEventClick = (event: MyEvent) => {
        setSelectedEvents([event]);
        setEditingEvent(event);
        setFormData({
            title: event.title,
            start: format(event.start, "yyyy-MM-dd'T'HH:mm"),
            end: format(event.end, "yyyy-MM-dd'T'HH:mm"),
        });
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setEditingEvent(null);
    };

    const getEventsForDay = (date: Date): MyEvent[] => {
        return events.filter(
            (event) =>
                date.toDateString() === new Date(event.start).toDateString()
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdateEvent = () => {
        if (editingEvent) {
            const updatedEvent: MyEvent = {
                ...editingEvent,
                title: formData.title,
                start: new Date(formData.start),
                end: new Date(formData.end),
            };
            setEvents((prevEvents) =>
                prevEvents.map((event) =>
                    event.id === editingEvent.id ? updatedEvent : event
                )
            );
            setShowModal(false);
            setEditingEvent(null);
        }
    };

    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return styles['text-warning'];
            case 'accepted':
                return styles['text-success'];
            case 'rejected':
                return styles['text-danger'];
            case 'done':
                return styles['text-success'];
            default:
                return '';
        }
    };

    const generateMeetUrl = async (booking: bookings) => {
        const currentUrl = encodeURIComponent(window.location.href);
        const response = await bookingGenerateMeetUrl({
            bookingId: booking.id,
            redirectUri: currentUrl,
        });
        window.location.href = response;
    };

    const fetchEvents = async (view: View, date: Date) => {
        try {
            if (user?.id === undefined) return;

            let data;
            if (view === 'month') {
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                data = await getMentorBookingsByMonth({ mentorId: user.id, month, year });
            } else if (view === 'week') {
                const startOfWeekDate = format(startOfWeek(date), 'yyyy-MM-dd\'T\'HH:mm:ss');
                const endOfWeekDate = format(endOfWeek(date), 'yyyy-MM-dd\'T\'HH:mm:ss');
                data = await getMentorBookingsByWeek({ mentorId: user.id, startOfWeek: startOfWeekDate, endOfWeek: endOfWeekDate });
            }

            if (data) {
                setEvents(data.map(booking => {
                    const bookingDate = moment(booking.date);
                    const startDate = bookingDate.toDate();
                    const endDate = bookingDate.clone().add(booking.duration * 60, 'minutes').toDate();

                    const title = user.role === 'mentor'
                        ? `Mentor for ${booking.customer.fullName}`
                        : `Mentoring with mentor ${booking.mentor.fullName}`;

                    return {
                        id: booking.id,
                        title: `${title}`,
                        start: startDate,
                        end: endDate,
                    };
                }));
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    const handleNavigate = (date: Date, view: View, action: NavigateAction) => {
        fetchEvents(view, date);
    };

    const handleBookingOption = (type: string, booking: bookings) => {
        switch (type) {
            case 'finish':
                finishBooking(booking.id);
                break;
            case 'reject':
                rejectBooking(booking.id);
                break;
            case 'accept':
                acceptBooking(booking.id);
                break;
        }
    };

    useEffect(() => {
        const currentDate = new Date();
        fetchEvents('month', currentDate);

        const fetchBookings = async () => {
            try {
                if (!user?.id) return;

                const response = await getMentorBookings({
                    userId: user?.id,
                    page: currentPage,
                    resultCount: resultCount,
                    searchValue: searchValue || '',
                });

                const bookings = response.bookingResponse.map((booking: bookings) => ({
                    id: booking.id,
                    mentor: booking.mentor,
                    customer: booking.customer,
                    bookingTime: moment(booking.bookingTime),
                    startTime: moment(booking.startTime),
                    duration: booking.duration,
                    status: booking.status.charAt(0).toUpperCase() + booking.status.slice(1),
                    meetUrl: booking.meetUrl,
                    description: booking.description,
                    cost: booking.cost,
                }));

                setBookingData(bookings);
                setTotalValues(response.totalFound);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        const query = new URLSearchParams();
        query.set('page', String(currentPage));
        query.set('resultCount', String(resultCount));

        navigate({ search: query.toString() });

        fetchBookings();
    }, [user, currentPage, resultCount, searchValue]);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const pageFromUrl = Number(query.get('page')) || currentPage;
        const resultCountFromUrl = Number(query.get('resultCount')) || 10;

        setResultCount(resultCountFromUrl);
        setCurrentPage(pageFromUrl);
    }, []);

    return (
        <>
            <div className={`${styles['table-settings']} ${styles['mb-4']}`}>
                <div className={`${styles['row']} ${styles['align-items-center']} ${styles['justify-content-between']}`}>
                    <div className={`${styles['col']} ${styles['col-md-6']} ${styles['col-lg-3']} ${styles['col-xl-4']}`}>
                        <SearchBar placeholder="Search orders" onSearchChange={handleSearchChange} />
                    </div>
                    <div className={`${styles['col-4']} ${styles['col-md-2']} ${styles['col-xl-1']} ${styles['ps-md-0']} ${styles['text-end']}`}>
                        <ResultCountDropdown
                            options={[10, 20, 30]}
                            onSelectCount={handleResultCountSelect}
                        />
                    </div>
                </div>
            </div>

            <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['table-wrapper']} ${styles['table-responsive']}`}>
                <table className={`${styles['table']} ${styles['table-hover']}`}>
                    <thead className={`${styles['thead']}`}>
                        <tr className={`${styles['tr']}`}>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>#</th>
                            {user?.role === 'mentor' ? (<th className={`${styles['th']} ${styles['border-gray-200']}`}>Customer</th>)
                                : (<th className={`${styles['th']} ${styles['border-gray-200']}`}>Mentor</th>)}
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Booking Date</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Start Time</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Duration (hour)</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Status</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Cost</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Meet url</th>
                            {user?.role === "mentor" && (<th className={`${styles['th']} ${styles['border-gray-200']}`}>Action</th>)}
                        </tr>
                    </thead>
                    <tbody className={`${styles['tbody']}`}>
                        {bookingData.map((booking) => (
                            <tr key={booking.id} className={`${styles['tr']}`}>
                                <td className={`${styles['td']}`}>{booking.id}</td>
                                {user?.role === 'mentor' ?
                                    (<td className={`${styles['td']}`}>{booking.customer.fullName}</td>) :
                                    (<td className={`${styles['td']}`}>{booking.mentor.fullName}</td>)}
                                <td className={`${styles['td']}`}>{booking.bookingTime.format('DD MMM YYYY HH:mm')}</td>
                                <td className={`${styles['td']}`}>{booking.startTime.format('DD MMM YYYY HH:mm')}</td>
                                <td className={`${styles['td']}`}>{booking.duration}</td>
                                <td className={`${styles['td']} ${getStatusClass(booking.status)}`}>
                                    {booking.status}
                                </td>
                                <td className={`${styles['td']}`}>{booking.cost}</td>
                                <td className={`${styles['td']}`}>
                                    {booking.status.toLowerCase() !== "rejected" && (
                                        booking.meetUrl ? (
                                            booking.status.toLowerCase() === 'accepted' && (
                                                <a href={booking.meetUrl} target="_blank" rel="noopener noreferrer">
                                                    Join
                                                </a>
                                            )
                                        ) : (
                                            (user?.role === 'mentor' && booking.status.toLowerCase() === 'accepted') && (
                                                <button
                                                    className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['m-0']} ${styles['p-0']}`}
                                                    onClick={() => generateMeetUrl(booking)}>
                                                    Get url
                                                </button>
                                            )
                                        )
                                    )}
                                </td>

                                {user?.role === "mentor" && (<td className={`${styles['td']}`}>
                                    <BookingsDropdown
                                        booking={booking}
                                        onViewDetails={(booking) => console.log('Viewing details for', booking)}
                                        onAccept={(booking) => handleBookingOption('accept', booking)}
                                        onReject={(booking) => handleBookingOption('reject', booking)}
                                        onFinish={(booking) => handleBookingOption('finish', booking)}
                                    />
                                </td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    totalPages={totalValues}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>

            <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['table-wrapper']} ${styles['table-responsive']} ${styles['calendar-container']}`}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '45rem' }}
                    views={[Views.MONTH, Views.WEEK, Views.DAY]}
                    defaultView={Views.MONTH}
                    onSelectSlot={(slotInfo: SlotInfo) => handleDayClick(slotInfo.start)}
                    onSelectEvent={(event: MyEvent) => handleEventClick(event)}
                    onNavigate={handleNavigate}
                    selectable
                    className="bg-light rounded"
                />

                <Modal show={showModal} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {editingEvent ? 'Update event' : 'Event detail'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {editingEvent ? (
                            <Form>
                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Event Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter title"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formStart">
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="start"
                                        value={formData.start}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEnd">
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="end"
                                        value={formData.end}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={handleUpdateEvent}>
                                    Update
                                </Button>
                            </Form>
                        ) : (
                            <>
                                {selectedEvents.length > 0 ? (
                                    selectedEvents.map((event) => (
                                        <div key={event.id} className="mb-3">
                                            <h5>{event.title}</h5>
                                            <p>
                                                {format(event.start, 'HH:mm')} -{' '}
                                                {format(event.end, 'HH:mm')}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No events for this day.</p>
                                )}
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default MyCalendar;
