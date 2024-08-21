import NextAuth from "next-auth"; 
import { options } from "./options"; 

// Initialize NextAuth with the provided options
const handler = NextAuth(options);

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };
