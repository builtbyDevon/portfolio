import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Krona_One } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ClientCursor from "@/components/ClientCursor";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const kronaOne = Krona_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-krona-one",
});

export const metadata: Metadata = {
  title: "Devon's Portfolio",
  description: "Portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${kronaOne.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        {/* <ClientCursor /> */}
      </body>
    </html>
  );
}
