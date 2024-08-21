import prisma from "@/lib/prisma"; 
import { v4 as uuidv4 } from "uuid"; 

// Function to create a new user with an associated account
export async function createUserWithAccount({ username, email, password }) {
    try {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password,
          accounts: {
            create: {
              type: "credentials",
              provider: "email",
              providerAccountId: uuidv4(),
            }
          }
        },
        include: {
          accounts: true
        }
      });
      return newUser;
    } catch (error) {
      console.error('Error creating user: ', error);
    }
  }
  

// Function to fetch a user by their email
export async function getUserByEmail(email) {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      return user || null; // Return null if no user is found
    } catch (error) {
      console.error('Error fetching user by email: ', error);
      return null; // Ensure null is returned in case of error
    }
  }
  
