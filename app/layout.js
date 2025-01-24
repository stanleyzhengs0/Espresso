'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "./utils/TanstackProviders";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
   
      <html lang="en">
          <body className={inter.className}>
          <TanstackProvider>
            {children}
          </TanstackProvider>
          </body>
      </html>
      
  );
}
