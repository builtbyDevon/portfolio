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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0d0d0d",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Devon Welch - Portfolio",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#0d0d0d",
  colorScheme: "dark",
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
