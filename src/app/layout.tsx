import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "AeroAI - The Infrastructure Behind Modern Logistics",
  description: "Unify shipments, operations, carriers, documents, and intelligence into one AI-powered logistics platform.",
  keywords: ["Logistics SaaS", "AI Logistics", "Supply Chain Analytics", "Freight Optimization", "Enterprise Logistics"],
  openGraph: {
    title: "AeroAI - Modern Logistics Infrastructure",
    description: "Unify shipments, operations, carriers, documents, and intelligence into one AI-powered logistics platform.",
    url: "https://www.aeroai.com",
    siteName: "AeroAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AeroAI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AeroAI - Modern Logistics Infrastructure",
    description: "Unify shipments, operations, carriers, documents, and intelligence into one AI-powered logistics platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-text-primary overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
