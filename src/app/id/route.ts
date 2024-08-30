import dbConnect from '../../dbconfig/dbConfig'; // Adjust the path if necessary
import Event from '../../models/events';

async function handler(req:any, res:any) {
  const { method } = req;
  const { id } = req.query; // Extract the event ID from the query

  await dbConnect(); // Connect to the database

  switch (method) {
    case 'PUT':
      try {
        const { userId, status } = req.body;

        // Find the event by ID and update the participant's status
        const event = await Event.findById(id);

        if (!event) {
          return res.status(404).json({ error: 'Event not found' });
        }

        // Remove existing participant status if it exists
        event.participants = event.participants.filter(
          (participant:any) => participant.userId.toString() !== userId
        );

        // Add the new participant status
        event.participants.push({ userId, status });

        // Save the event with the updated participants list
        await event.save();

        return res.status(200).json({ success: true, data: event });
      } catch (error) {
        return res.status(500).json({ error: 'Server error, unable to update attendance.' });
      }
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}

export default handler;
