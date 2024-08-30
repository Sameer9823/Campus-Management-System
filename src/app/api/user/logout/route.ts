// app/api/logout/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Clear any server-side session or authentication token here
    // For example, you might clear a session cookie

    // Example of clearing a session cookie
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.delete('auth-token'); // Adjust based on your implementation

    return response;
  } catch (error:any) {
    return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
  }
}
