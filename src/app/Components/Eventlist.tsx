import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }:any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white">
      {events.map((event:any) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventList;