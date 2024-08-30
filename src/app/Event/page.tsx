'use client'
import { useEffect, useState } from 'react';
import EventCard from '../Components/EventCard'; // Make sure the path is correct
import Navbar from '../Components/Navbar';

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
}

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        setEvents(data); // Assuming data is directly an array of events
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='bg-gray-50'>
      <Navbar/>
      <h1 className='pt-[7rem] text-3xl font-bold text-black text-center'>UpComing Events</h1>
      <div className='pt-3 flex justify-center'>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 justify-center">
      {error && <p>Error: {error}</p>}
      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))
      )}
    </div>
        </div>
    </div>
  );
};

export default EventList;
