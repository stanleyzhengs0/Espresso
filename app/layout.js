import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "./utils/TanStackProviders";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <TanStackProvider>
      <html lang="en">
          <body className={inter.className}>
           
                  {children}
            
          </body>
      </html>
      </TanStackProvider>
  );
}
