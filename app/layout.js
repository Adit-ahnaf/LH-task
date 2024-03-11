"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [activeSidebar, setActiveSideBar] = useState(false);

  const handleSideBar = () => {
    setActiveSideBar(!activeSidebar);
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {/* <--------- initialize sidebar for responsive mode ------------>  */}
        {activeSidebar && <SideBar handleSideBar={handleSideBar} />}

        {/* <------ Default Layout --------> */}
        <div className="relative">
          <Header handleSideBar={handleSideBar} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
