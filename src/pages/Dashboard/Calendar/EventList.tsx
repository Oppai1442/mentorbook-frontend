import React from 'react';

interface EventListProps {
  events: {
    id: number;
    title: string;
    start: Date;
    end: Date;
  }[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <h5>{event.title}</h5>
          <p>
            {new Intl.DateTimeFormat('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            }).format(event.start)} -{' '}
            {new Intl.DateTimeFormat('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            }).format(event.end)}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
