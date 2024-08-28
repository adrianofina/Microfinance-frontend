import { NextAuthOptions } from "next-auth";
import { useSession } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma"; 
import bcrypt from "bcryptjs";

export const authConfig: NextAuthOptions = {
  providers: [
    // Example: Google OAuth Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        // Fetch the user from the database
        const user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }

        // Compare the provided password with the stored hashed password
        const isValidPassword = await bcrypt.compare(credentials.password, user.password);

        if (!isValidPassword) {
          return null;
        }

        // If authentication is successful, return the user object
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    error: "/auth/error",   // Error page
  },
  callbacks: {
    async session({ session, token }) {
      // Include user id and other properties in the session object
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

// Default export for NextAuth
export default NextAuth(authConfig);
