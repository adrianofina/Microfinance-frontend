// context/UserContext.tsx
import React, { createContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  password?: string;
  theme?: string;
  // ... other user properties
}

interface UserContextType {
  user: User | null;
  theme: string;
  updateUser: (updatedUser: User) => void;
  setTheme: (newTheme: string) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  theme: 'light',
  updateUser: () => {},
  setTheme: () => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState('light'); 

  // Load user data from local storage or API on component mount
  useEffect(() => {
    // ... (Logic to fetch user data from local storage or API) ...
  }, []);

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    // ... (Update user data in local storage or API) ...
  };

  return (
    <UserContext.Provider value={{ user, theme, updateUser, setTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };