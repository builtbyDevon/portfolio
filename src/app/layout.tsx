// File: src/app/layout.tsx
// import { Geist, Geist_Mono } from "next/font/google"; // REMOVE or comment out
import { Inter, Krona_One } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
// import ClientCursor from "@/components/ClientCursor"; // Assuming you might use this later

// const geistSans = Geist({ // REMOVE or comment out
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
// });

// const geistMono = Geist_Mono({ // REMOVE or comment out
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

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
  title: "Devon Welch - Portfolio",
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
      // className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${kronaOne.variable}`} // Original
      className={`${inter.variable} ${kronaOne.variable}`} // MODIFIED: Removed Geist variables
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {" "}
        {/* Ensure your globals.css defines fallback for font-sans if Geist was primary */}
        {children}
        {/* <ClientCursor /> */}
      </body>
    </html>
  );
}
