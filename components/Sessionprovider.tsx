// components/ClientSessionProvider.tsx
"use client";

import { SessionProvider } from "next-auth/react";

const ClientSessionProvider: React.FC<{ children: React.ReactNode; session: any }> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default ClientSessionProvider;
