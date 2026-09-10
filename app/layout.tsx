import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXUS — Infrastructure for intelligent systems",
  description:
    "NEXUS pairs high-performance compute with a beautiful command layer for ambitious teams.",
  keywords: [
    "NEXUS",
    "Intelligent System",
    "AI Infrastructure",
    "Command Platform",
    "Neural Engine",
    "EUV Silicon",
    "Unified Memory",
  ],
  authors: [{ name: "NEXUS Intelligent Systems" }],
};

export const viewport: Viewport = {
  themeColor: "#060814",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#060814] text-[#F7F8FF]">
        {children}
      </body>
    </html>
  );
}
