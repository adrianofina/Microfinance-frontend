import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { roboto, inter, poppins, montserrat } from "./utils/fonts";
import { ThemeProvider } from "next-themes";

// Define metadata using the Metadata API
export const metadata: Metadata = {
  title: "Adriano",
  description: "Adriano is a modern microfinance platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter} ${roboto} ${poppins} ${montserrat}`}>
        <ThemeProvider> 
      {/* Wrap children with the SessionProvider to handle user authentication and session data. */}
      <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
