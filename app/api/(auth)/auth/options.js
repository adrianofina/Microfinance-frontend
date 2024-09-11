
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"; // For password hashing and comparison
import prisma from "@/lib/prisma"; // Importing Prisma Client instance

export default NextAuth({
  providers: [
    // Credentials Provider for email/password authentication
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;

          // Validate the presence of email and password
          if (!email || !password) {
            throw new Error("Missing email or password");
          }

          // Find the user in the database
          const user = await prisma.user.findUnique({
            where: { email },
          });

          // Check if the user exists and has a password
          if (!user || !user.password) {
            throw new Error("Invalid email or password");
          }

          // Compare the provided password with the stored hashed password
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            throw new Error("Invalid email or password");
          }

          // If the credentials are valid, return the user object
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image || "https://example.com/avatar.jpg",
          };
        } catch (error) {
          // If an error occurs (e.g., user not found or password mismatch), return null
          return null;
        }
      },
    }),
    // Google Provider for OAuth authentication
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Configure JWT for session management
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Optional: Set session expiry to 30 days
  },

  // JWT settings for encoding/decoding tokens
  jwt: {
    secret: process.env.JWT_SECRET, // Secret for signing the JWT
  },

  // Pages for custom routes
  pages: {
    signIn: "/login", // Custom sign-in page route
    error: "/auth/error", // Error page route
  },

  // Callbacks for controlling behavior after sign-in and session management
  callbacks: {
    async session({ session, token }) {
      // Attach the user's ID to the session object
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      // Add the user's ID to the token if it exists
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Optionally customize redirect URL after sign-in
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },

  // Optional: Handle events like sign-in, sign-out, error, etc.
  events: {
    async signIn({ user, account, profile }) {
      console.log(`User signed in: ${user.email}`);
    },
    async signOut({ token }) {
      console.log(`User signed out: ${token.email}`);
    },
    async error(message) {
      console.error(`NextAuth error: ${message}`);
    },
  },

  // Enable debug mode for troubleshooting during development
  debug: process.env.NODE_ENV === "development",
});
