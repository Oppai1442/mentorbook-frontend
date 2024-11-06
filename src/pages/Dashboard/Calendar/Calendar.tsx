import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, Views, SlotInfo, Event as RBCEvent } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Form } from 'react-bootstrap';

// Định nghĩa các hàm cho date-fns localizer
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

// Định nghĩa kiểu cho sự kiện
interface MyEvent extends RBCEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
}

const initialEvents: MyEvent[] = [
    {
        id: 1,
        title: 'Hội nghị HackIT',
        start: new Date(2024, 10, 6, 10, 0),
        end: new Date(2024, 10, 6, 12, 0),
    },
    {
        id: 2,
        title: 'Cuộc họp với John',
        start: new Date(2024, 10, 7, 14, 0),
        end: new Date(2024, 10, 7, 15, 0),
    },
    {
        id: 3,
        title: 'Sự kiện Digital',
        start: new Date(2024, 10, 8, 9, 0),
        end: new Date(2024, 10, 8, 11, 0),
    },
    {
        id: 4,
        title: 'Black Friday',
        start: new Date(2024, 10, 29, 0, 0),
        end: new Date(2024, 10, 29, 23, 59),
        allDay: true,
    },
    {
        id: 5,
        title: 'Bữa tối với bố mẹ',
        start: new Date(2024, 10, 15, 18, 30),
        end: new Date(2024, 10, 15, 21, 0),
    },
    {
        id: 6,
        title: 'Sự kiện ngẫu nhiên 1',
        start: new Date(2024, 10, 6, 0, 0),
        end: new Date(2024, 10, 6, 1, 0),
    },
    {
        id: 7,
        title: 'Sự kiện ngẫu nhiên 2',
        start: new Date(2024, 10, 6, 2, 0),
        end: new Date(2024, 10, 6, 3, 0),
    },
    {
        id: 8,
        title: 'Sự kiện ngẫu nhiên 3',
        start: new Date(2024, 10, 6, 4, 0),
        end: new Date(2024, 10, 6, 5, 0),
    },
    {
        id: 9,
        title: 'Sự kiện ngẫu nhiên 4',
        start: new Date(2024, 10, 6, 6, 0),
        end: new Date(2024, 10, 6, 7, 0),
    },
    {
        id: 10,
        title: 'Sự kiện ngẫu nhiên 5',
        start: new Date(2024, 10, 6, 8, 0),
        end: new Date(2024, 10, 6, 9, 0),
    },
    {
        id: 11,
        title: 'Sự kiện ngẫu nhiên 6',
        start: new Date(2024, 10, 6, 10, 0),
        end: new Date(2024, 10, 6, 11, 0),
    },
    {
        id: 12,
        title: 'Sự kiện ngẫu nhiên 7',
        start: new Date(2024, 10, 6, 12, 0),
        end: new Date(2024, 10, 6, 13, 0),
    },
    {
        id: 13,
        title: 'Sự kiện ngẫu nhiên 8',
        start: new Date(2024, 10, 6, 14, 0),
        end: new Date(2024, 10, 6, 15, 0),
    },
    {
        id: 14,
        title: 'Sự kiện ngẫu nhiên 9',
        start: new Date(2024, 10, 6, 16, 0),
        end: new Date(2024, 10, 6, 17, 0),
    },
    {
        id: 15,
        title: 'Sự kiện ngẫu nhiên 10',
        start: new Date(2024, 10, 6, 18, 0),
        end: new Date(2024, 10, 6, 19, 0),
    },
];

const MyCalendar: React.FC = () => {
    const [events, setEvents] = useState<MyEvent[]>(initialEvents);
    const [selectedEvents, setSelectedEvents] = useState<MyEvent[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<MyEvent | null>(null);
    const [formData, setFormData] = useState<{ title: string; start: string; end: string }>({
        title: '',
        start: '',
        end: '',
    });

    // Hàm mở modal với các sự kiện trong ngày
    const handleDayClick = (date: Date) => {
        const events = getEventsForDay(date);
        setSelectedEvents(events);
        setEditingEvent(null); // Không đang chỉnh sửa sự kiện nào
        setShowModal(true);
    };

    // Hàm mở modal khi click vào sự kiện
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

    // Đóng modal
    const handleClose = () => {
        setShowModal(false);
        setEditingEvent(null);
    };

    // Lấy tất cả sự kiện của ngày đó
    const getEventsForDay = (date: Date): MyEvent[] => {
        return events.filter(
            (event) =>
                date.toDateString() === new Date(event.start).toDateString()
        );
    };

    // Xử lý thay đổi trong form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Xử lý cập nhật sự kiện
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

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">December 2024</h2>
            <div className="card shadow-lg p-4">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600 }}
                    views={[Views.MONTH, Views.WEEK, Views.DAY]}
                    defaultView={Views.MONTH}
                    onSelectSlot={(slotInfo: SlotInfo) => handleDayClick(slotInfo.start)}
                    onSelectEvent={(event: MyEvent) => handleEventClick(event)}
                    selectable
                    className="bg-light rounded"
                />
            </div>

            {/* Modal để hiển thị chi tiết sự kiện */}
            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingEvent ? 'Cập nhật Sự kiện' : 'Chi tiết Sự kiện'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editingEvent ? (
                        <Form>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Tiêu đề sự kiện</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Nhập tiêu đề"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formStart">
                                <Form.Label>Thời gian bắt đầu</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="start"
                                    value={formData.start}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEnd">
                                <Form.Label>Thời gian kết thúc</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="end"
                                    value={formData.end}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={handleUpdateEvent}>
                                Cập nhật
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
                                <p>Không có sự kiện nào trong ngày này.</p>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

};

export default MyCalendar;
