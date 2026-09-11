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
  title: "NACOS Nile Chapter — Learn • Build • Grow",
  description:
    "NACOS Nile Chapter is a student technology community focused on learning, building, collaboration, leadership, and innovation.",
  keywords: [
    "NACOS",
    "Nile Chapter",
    "Technology Community",
    "Student Organization",
    "Learn Build Grow",
    "Innovation",
    "Leadership",
  ],
  authors: [{ name: "NACOS Nile Chapter" }],
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <body className="min-h-full flex flex-col bg-[#0A1628] text-[#F7F8FF]">
        {children}
      </body>
    </html>
  );
}
