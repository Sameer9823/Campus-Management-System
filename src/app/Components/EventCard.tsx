import React from 'react';
import axios from 'axios';

const EventCard = ({ event, userId }:any) => {
  const { title, description, date, time, venue, image } = event;

  const handleAttendance = async (status:any) => {
    try {
      await axios.put(`/api/events/${event._id}/attendance`, {
        userId,
        status,
      });
      alert(`You have marked as ${status}`);
    } catch (error) {
      console.error('Error updating attendance status:', error);
    }
  };

  return (
    <div className=''>
      <div className='pt-16'>
        <div className="bg-gray-800 text-gray-50 shadow-md rounded-lg p-4 mb-4 w-full max-w-sm h-[500px]">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
          )}
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-50 mb-2">{description}</p>
          <p className="text-gray-100 mb-2">
            <strong>Date:</strong> {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-gray-100 mb-2">
            <strong>Time:</strong> {time}
          </p>
          <p className="text-gray-100 mb-2">
            <strong>Venue:</strong> {venue}
          </p>
          <div className="flex space-x-2 mt-4">
            <button
              onClick={() => handleAttendance('attending')}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Attend
            </button>
            <button
              onClick={() => handleAttendance('not attending')}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Not Attending
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
