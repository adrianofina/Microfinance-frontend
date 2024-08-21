import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

// Configuration options for NextAuth
export const options = {
  // Use the Prisma adapter to connect NextAuth with Prisma
  adapter: PrismaAdapter(prisma),

  // Define the authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Google client ID from environment variables
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google client secret from environment variables
    }),
    // credentials provider for signing up new users
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          // Extract email and password from credentials
          const { email, password } = credentials;

          // Check if email or password is missing
          if (!email || !password) {
            throw new Error("Missing email or password");
          }

          // Find the user in the database by email
          const user = await prisma.user.findUnique({
            where: { email },
          });

          // Check if user exists and has a password
          if (!user || !user.password) {
            throw new Error("User not found or missing password");
          }

          // Compare the provided password with the stored hashed password
          const passwordMatch = await bcrypt.compare(password, user.password);

          // If the password matches, return the user; otherwise, throw an error
          if (passwordMatch) {
            return user;
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (error) {
          return null; // Return null if an error occurs
        }
      },
    }),
  ],

  // Use JWT for session management
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
  },
};
