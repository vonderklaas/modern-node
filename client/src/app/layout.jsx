"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Bell, House, ShoppingCart } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto px-16 lg:px-0`}
        >
          <nav className="flex justify-between items-center py-4 mb-8">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <Link href="/" className="text-2xl font-black">
                Vonderklaas Shop
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <House className="w-5 h-5" />
              <Bell className="w-5 h-5" />
              <ShoppingCart className="w-5 h-5" />
              <Image
                src="/avatar.png"
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full border border-gray-300"
              />
            </div>
          </nav>
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
