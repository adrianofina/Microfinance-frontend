'use client';
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }) {
    return (
        // Wrap children with the SessionProvider to handle session data
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
