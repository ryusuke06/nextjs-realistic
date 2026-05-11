import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Nounai Sample",
  description: "Realistic Next.js sample for sizing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900">
        <header className="border-b border-neutral-200 bg-white">
          <nav className="mx-auto max-w-5xl px-6 py-4 flex gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/items">Items</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-4 text-xs text-neutral-500">
            Nounai sample — for resource sizing experiments.
          </div>
        </footer>
      </body>
    </html>
  );
}
