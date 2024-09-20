import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"; 
import clientPromise from "../../../../lib/mongodb"; 

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;

          if (!email || !password) {
            throw new Error("Missing email or password");
          }

          // Connect to MongoDB and find the user by email
          const client = await clientPromise;
          const db = client.db("Adriano");
          const user = await db.collection("users").findOne({ email });

          if (!user || !user.password) {
            throw new Error("Invalid email or password");
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            throw new Error("Invalid email or password");
          }

          return {
            id: user._id, 
            name: user.name,
            email: user.email,
            image: user.image || "https://example.com/avatar.jpg",
          };
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  pages: {
    signIn: "/login",
    error: "/auth/error",
  },

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },

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

  debug: process.env.NODE_ENV === "development",
});
