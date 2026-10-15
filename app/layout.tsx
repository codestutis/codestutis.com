import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kestutis Biskis — Software Engineer",
  description: "Software engineer working across systems programming, networking, cybersecurity, and full-stack software.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <Link href="/" className="wordmark"><span className="brand-symbol" aria-hidden="true">k.</span> codestutis</Link>
          <nav aria-label="Main navigation"><Link href="/">About</Link><Link href="/projects">Projects</Link><Link href="/blog">Blog</Link></nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer"><p>© {new Date().getFullYear()} Kestutis Biskis</p><p>Built with curiosity. Based in Greater Boston.</p><a href="mailto:kestutis.biskis@codestutis.com">Let&apos;s talk ↗</a></footer>
      </body>
    </html>
  );
}
