'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navigation/NavBar";
import { AuthProvider } from "./lib/auth/authContext";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <NavBar/>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
