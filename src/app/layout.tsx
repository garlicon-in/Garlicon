import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garlicon | Premium Garlic Artistry",
  description: "Experience the essence of professional garlic cultivation. Sleek, minimalist, and pure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#fdfdfd] text-[#1a1a1a]`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="4985cd81-6fd7-4dbd-b950-d6e82ea1ba14"
        />
        <Navbar />
        <main>{children}</main>
        <footer className="py-12 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Garlicon. All rights reserved.</p>
        </footer>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
