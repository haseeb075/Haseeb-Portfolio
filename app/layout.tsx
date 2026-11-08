import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: "Muhammad Abdul Haseeb | Project Coordinator & Senior Frontend Engineer",
  description: "Technical Project Coordinator at GrayHat with 7+ years in software. React, Next.js, TypeScript, Agile delivery.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
