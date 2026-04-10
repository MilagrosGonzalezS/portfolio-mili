import type { Metadata, Viewport } from "next";
import { Inter, Bowlby_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bowlby = Bowlby_One({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Milagros Gonzalez | Web Developer",
  description:
    "Portfolio of Milagros Gonzalez — Web developer specializing in Next.js, WordPress, Wix, and Squarespace. Building beautiful, functional websites for brands across industries.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f0f0f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bowlby.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
