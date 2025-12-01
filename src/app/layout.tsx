import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kapilyadav.dev"),
  
  title: "Kapil Yadav — Full-Stack Developer",
  description:
    "Full-stack developer skilled in TypeScript, Next.js, AI systems, Node.js, DevOps and modern web apps. Open for full-time roles.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Software Engineer",
    "Web Developer",
    "Automation Developer",
    "Sydney Developer",
  ],
  icons: {
    icon: "/Linkedin.png",
  },
  openGraph: {
    title: "Kapil Yadav — Portfolio",
    description:
      "Full-Stack Developer specializing in TypeScript, Next.js, automation systems & AI-powered applications.",
    url: "https://your-domain.com",
    siteName: "Kapil Yadav",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil Yadav — Software Engineer",
    description:
      "Portfolio showcasing TypeScript, Next.js, automation & AI development expertise.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
