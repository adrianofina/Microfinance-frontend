
// Import the PrismaClient className from the @prisma/client package
import { PrismaClient } from "@prisma/client";

// Declare a variable to hold the PrismaClient instance
let prisma;

// Check the current environment to determine how to instantiate PrismaClient
if (process.env.NODE_ENV === "production") {
    // In production mode, create a new PrismaClient instance
    // This ensures that a fresh instance is used in production environments
    prisma = new PrismaClient();
} else {
    // In non-production environments (e.g., development, testing), 
    // use a global variable to avoid creating multiple PrismaClient instances.
    // This is important because multiple instances can lead to database connection issues
    // or resource exhaustion during development.
    
    if (!global.prisma) {
        // If the global prisma variable is not already set, create a new PrismaClient instance
        global.prisma = new PrismaClient();
    }
    // Assign the global PrismaClient instance to the local variable
    prisma = global.prisma;
}

export default prisma;