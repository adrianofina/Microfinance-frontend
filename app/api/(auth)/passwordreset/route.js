import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    // Fetch the user by email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password and clear the reset token fields
    await prisma.user.update({
      where: { id: existingUser.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpires: null,
      },
    });

    return new NextResponse("User's password is updated", { status: 200 });
  } catch (error) {
    console.error("Error updating password:", error);
    return new NextResponse("An error occurred", { status: 500 });
  }
};
