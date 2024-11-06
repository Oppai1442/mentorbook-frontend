import React, { useState, useEffect } from 'react';
import styles from './BookingPopup.module.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment, { Moment } from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useToast } from '../../context';
import { mentor } from '../../types/Model';

const localizer = momentLocalizer(moment);

interface BookingPopupProps {
  mentor: mentor;
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ mentor, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [duration, setDuration] = useState<number | ''>('');
  const { addToast } = useToast();
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const [showGuide, setShowGuide] = useState(false);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Session with Student A',
      start: new Date(2024, 10, 7, 13, 0),
      end: new Date(2024, 10, 7, 14, 0),
    },
    {
      id: 2,
      title: 'Consultation with Student B',
      start: new Date(2024, 10, 10, 14, 0),
      end: new Date(2024, 10, 10, 15, 30),
    },
    {
      id: 3,
      title: 'Review Session with Student C',
      start: new Date(2024, 10, 11, 9, 30),
      end: new Date(2024, 10, 11, 10, 30),
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(onClose, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const checkForConflicts = (start: Moment, end: Moment): boolean => {
    return events.some(event => {
      const eventStart = moment(event.start);
      const eventEnd = moment(event.end);
      return (
        (start.isBetween(eventStart, eventEnd, null, '[)') || end.isBetween(eventStart, eventEnd, null, '(]')) ||
        (start.isSameOrBefore(eventStart) && end.isSameOrAfter(eventEnd)) ||
        (start.isSame(eventStart) || end.isSame(eventEnd))
      );
    });
  };


  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = moment(e.target.value);

    if (newDate.isBefore(moment().add(24, 'hours'))) {
      addToast('danger', 'Start Date must be at least 24 hours from now.');
      setSelectedDate(null);
      return;
    }

    // Check for conflicts with the initial start time
    const tempEndDate = newDate.clone().add(duration || 0, 'hours');
    if (checkForConflicts(newDate, tempEndDate)) {
      addToast('danger', 'The selected start date conflicts with an existing schedule.');
      setSelectedDate(null);
      return;
    }

    setSelectedDate(newDate);

    if (duration) {
      const calculatedEndDate = newDate.clone().add(duration, 'hours');
      if (checkForConflicts(newDate, calculatedEndDate)) {
        addToast('danger', 'The selected time range conflicts with an existing schedule.');
        setEndDate(null);
        setDuration('');
        return;
      }
      setEndDate(calculatedEndDate);
    }
  };


  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newDuration = parseFloat(e.target.value);

    if (isNaN(newDuration) || newDuration < 0.5) {
      newDuration = 0.5;
    }

    if (newDuration > 12) {
      newDuration = 12;
    }

    if (selectedDate) {
      const calculatedEndDate = selectedDate.clone().add(newDuration, 'hours');

      // Find the nearest event after the selected start date
      const nextEvent = events
        .map(event => ({
          start: moment(event.start),
          end: moment(event.end),
        }))
        .filter(event => event.start.isAfter(selectedDate))
        .sort((a, b) => a.start.diff(b.start))[0]; // Get the earliest upcoming event

      if (nextEvent) {
        const maxEndDate = nextEvent.start.clone().subtract(1, 'minute'); // Limit to just before the next event starts
        if (calculatedEndDate.isAfter(maxEndDate)) {
          addToast(
            'warning',
            `The duration has been adjusted to avoid conflict with the next event at ${nextEvent.start.format('YYYY-MM-DD HH:mm')}.`
          );
          const adjustedDuration = maxEndDate.diff(selectedDate, 'hours', true);
          setDuration(adjustedDuration);
          setEndDate(maxEndDate);
          return;
        }
      }

      // Check for conflicts
      if (checkForConflicts(selectedDate, calculatedEndDate)) {
        addToast('danger', 'The duration conflicts with an existing schedule.');
        setEndDate(null);
        setDuration('');
        return;
      }

      setEndDate(calculatedEndDate);
      setDuration(newDuration);
    } else {
      addToast('danger', 'Start Date must be selected before setting Duration.');
      setDuration('');
    }
  };


  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = moment(e.target.value);

    if (!selectedDate) {
      addToast('danger', 'Select Start Date before setting End Date.');
      setEndDate(null);
      return;
    }

    if (newEndDate.isBefore(selectedDate)) {
      addToast('danger', 'End Date must be after Start Date.');
      setEndDate(null);
      return;
    }

    const maxEndDate = selectedDate.clone().add(12, 'hours');
    if (newEndDate.isAfter(maxEndDate)) {
      addToast('danger', 'End Date cannot exceed 12 hours from Start Date.');
      setEndDate(null);
      return;
    }

    if (checkForConflicts(selectedDate, newEndDate)) {
      addToast('danger', 'The selected time range conflicts with an existing schedule.');
      setEndDate(null);
      return;
    }

    const calculatedDuration = newEndDate.diff(selectedDate, 'hours', true);
    setEndDate(newEndDate);
    setDuration(calculatedDuration);
  };

  const handleNavigate = (newDate: Date) => {
    setSelectedDate(moment(newDate));
  };

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div
      className={`modal d-block ${isVisible ? styles['fade-in'] : styles['fade-out']} ${styles['modal-overlay']}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className={`modal-dialog modal-xl ${styles['modal-centered']}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book a Session with {mentor.fullName}</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="text-center mb-4">
              <h6 className={styles['time-display']}>Current Time: {currentTime}</h6>
            </div>
            <div className={`row ${styles['row']}`}>
              <div className="col-md-6" style={{ backgroundColor: '#1c1c1c', padding: '20px', color: 'white' }}>
                <h6>Choose Date and Time</h6>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Start Date & Time</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      onChange={handleStartDateChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">End Date & Time</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      onChange={handleEndDateChange}
                      value={endDate ? endDate.format('YYYY-MM-DDTHH:mm') : ''}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Estimated Duration (hours)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="e.g., 0.5"
                      value={duration}
                      onChange={handleDurationChange}
                      min="0.5"
                      max="12"
                      step="0.1"
                      disabled={!selectedDate}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Estimated Cost</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$100"
                      disabled
                      value={`${(Number(duration) * mentor.price).toFixed(2)} VNĐ`}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={handleToggleGuide}
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    {showGuide ? 'Hide Guide' : 'Show Guide'}
                  </button>

                  {showGuide && (
                    <div className="mt-2" style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f8f9fa', color: 'black' }}>
                      <p><strong>Estimated Cost Guide:</strong></p>
                      <ul>
                        <li>The estimated cost is calculated based on the duration of the session.</li>
                        <li>Ensure the start date is at least 24 hours from now.</li>
                        <li>The duration should be between 0.5 to 12 hours.</li>
                        <li>Any changes to the start or end date will automatically update the duration and estimated cost.</li>
                      </ul>
                    </div>
                  )}
                </form>
              </div>

              <div className={`col-md-6 ${styles['col-md-6-extend']}`}>
                <h6>Mentor's Schedule</h6>
                <div className={styles['calendar-container']}>
                  <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    views={['day']}
                    defaultDate={selectedDate ? selectedDate.toDate() : new Date()}
                    date={selectedDate ? selectedDate.toDate() : new Date()}
                    onNavigate={handleNavigate}
                    defaultView="day"
                  />
                </div>
              </div>

            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary">Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;