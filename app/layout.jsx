"use client";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./LandingPage";
import { useState } from "react";
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export default function RootLayout({ children }) {
  const [account, setAccount] = useState(true)
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} font-sans bg-white text-gray-900 flex flex-col min-h-screen`}
      >
        { account? <LandingPage/> : <><Navbar /><main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main><Footer /></>}
      </body>
    </html>
  );
}
