import { NextResponse } from "next/server"; 
import bcrypt from "bcryptjs"; 
import { createUserWithAccount, getUserByEmail } from "../../../utils/users";

export const POST = async (req, res) => {   
  try {
    // Get the user data from the request body  
    const { username, email, password } = await req.json();
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    }
    // Hash the password before creating the user  
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the user with the hashed password
    const newUser = await createUserWithAccount({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User created successfully", data: { ...newUser } }, { status: 201 });
  } catch (error) {
    console.log(error); // Log the error first
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

