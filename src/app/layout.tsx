import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from "./ScrollProgress";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kapil Yadav — Full-Stack Developer | MERN • Next.js • TypeScript",
  description:
    "Portfolio of Kapil Yadav — Full-Stack Developer based in Sydney, building web apps using MERN, Next.js, TypeScript, and automation workflows.",
  metadataBase: new URL("https://kapilyadav.dev"),
  openGraph: {
    title: "Kapil Yadav — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in MERN, TypeScript, Next.js, and automation systems.",
    url: "https://kapilyadav.dev",
    siteName: "Kapil Yadav Portfolio",
    images: [
      {
        url: "/projects/Wanderlust.png",
        width: 1200,
        height: 630,
        alt: "Kapil Yadav Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil Yadav — Full-Stack Developer",
    description:
      "Building fast and scalable web applications using Next.js, TypeScript, MERN, and automation workflows.",
    images: ["/projects/Wanderlust.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-black`}
    >
      <body className="bg-gradient-to-br from-black via-[#0b0b12] to-black text-white min-h-screen">
        
        {/* Render pages FIRST (server components stay safe) */}
        {children}

        {/* Client components AFTER children */}
        <ScrollProgress />
        <Analytics />
        <Toaster position="top-right" />

      </body>
    </html>
  );
}
