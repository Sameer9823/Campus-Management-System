import dbConnect from '../../../dbconfig/dbConfig'; // Ensure you have this utility for DB connection
import Event from '../../../models/events';

dbConnect(); // Connect to the database

export async function GET(req: Request) {
  try {
    // Fetch all events from the database
    const events = await Event.find().sort({ date: -1 }); // Optionally sort by date

    // Return the events as JSON
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    // Handle any errors
    return new Response(JSON.stringify({ error: 'Server error, unable to fetch events.' }), { status: 500 });
  }
}

export async function POST(req: Request) {
  // Implement POST request handling if needed
  return new Response('POST method is not allowed here', { status: 405 });
}

// Define other HTTP methods if needed (PUT, DELETE, etc.)
