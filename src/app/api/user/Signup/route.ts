import connectDB from '@/dbconfig/dbConfig';
import User from '@/models/userModels';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        // Log the request body to ensure the data is coming in correctly
        console.log('Request Body:', reqBody);

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', email);
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user and log the result
        const savedUser = await newUser.save();
        console.log('User saved successfully:', savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: savedUser,
        }, { status: 201 });

    } catch (error: any) {
        // Log the full error for debugging
        console.error('Error occurred during user registration:', error.message, error.stack);
        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
    }
}
