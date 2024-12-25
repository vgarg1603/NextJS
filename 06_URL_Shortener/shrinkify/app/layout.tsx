import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local'


export const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Shrinkify",
  description: "Get short link in single click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-purple-50">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
