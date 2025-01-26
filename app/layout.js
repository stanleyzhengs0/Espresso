import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "./utils/TanstackProviders";
import { AuthProvider } from "./lib/auth/authContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
   
      <html lang="en">
          <body className={inter.className}>
          <TanstackProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </TanstackProvider>
          </body>
      </html>
      
  );
}
