import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Artificial Intelligence (AD203)",
    template: "%s | Artificial Intelligence",
  },
  description:
    "Official course website for Artificial Intelligence (AD203), Department of CSE, IIITDM Kurnool.",
  keywords: [
    "Artificial Intelligence",
    "AI",
    "IIITDM",
    "Kurnool",
    "Course",
    "AD203",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}