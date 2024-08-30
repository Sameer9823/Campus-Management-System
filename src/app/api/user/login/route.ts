// app/api/login/route.ts

import connectDB from '@/dbconfig/dbConfig';
import User from '@/models/userModels';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectDB();

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
        }

        // Create JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        return NextResponse.json({
            message: "Login successful",
            token,
            user: {
                name: user.username,
                email: user.email,
            }
        }, { status: 200 });

    } catch (error:any) {
        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
    }
}
