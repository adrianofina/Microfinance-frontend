import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUserWithAccount, getUserByEmail } from "../../../utils/users";

export const POST = async (req) => {   
  try {
    // Parse JSON body
    const { username, email, password } = await req.json();

    // Check if the email is already in use
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    }

    // Hash the password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const newUser = await createUserWithAccount({ username, email, password: hashedPassword });

    // Return success response with the created user data
    return NextResponse.json({ message: "User created successfully", data: newUser }, { status: 201 });
    
  } catch (error) {
    console.error("Error creating user:", error); // Improved logging for errors
    return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
  }
};
