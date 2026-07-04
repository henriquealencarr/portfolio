import type { Metadata } from "next";
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
  title: "Henrique Alencar, AI & Systems Automation Engineer",
  description:
    "I design and deploy end-to-end AI-powered operational systems. Not just workflows, complete systems with interfaces, running in production.",
  keywords: ["AI Engineer", "Automation", "n8n", "LLM", "WhatsApp AI", "RAG", "VAPI", "Supabase"],
  openGraph: {
    title: "Henrique Alencar, AI & Systems Automation Engineer",
    description:
      "End-to-end AI automation systems running in production. WhatsApp agents, RAG pipelines, voice AI, lead generation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen antialiased bg-[#080808] text-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
