import crypto from "crypto";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Extract the token from the request body
    const { token } = await req.json();

    // Hash the token to compare with the stored hashed token in the database
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Fetch the user associated with the hashed token
    const user = await prisma.user.findUnique({
      where: {
        resetToken: hashedToken,
        resetTokenExpires: { gt: new Date() }, // Use Date object to compare with the current time
      },
    });

    if (!user) {
      return new NextResponse("Invalid token or token expired", { status: 400 });
    }
    // If the token is valid, return the user data
    return new NextResponse(JSON.stringify(user), { status: 200 });

  } catch (error) {
    console.error("Error in verify token API:", error);
    return new NextResponse("An error occurred", { status: 500 });
  }
};
