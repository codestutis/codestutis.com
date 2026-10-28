import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import { Mail } from "lucide-react";
import { PageTransition } from "@/app/_components/page-transition";
import { ThemePreview } from "@/app/_components/theme-preview";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kestutis Biskis — Software Engineer",
  description: "Software engineer working across systems programming, networking, cybersecurity, and full-stack software.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

function GitHubIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .3A12 12 0 0 0 8.2 23.7c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 2-.5 4-.5 6 0 2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" /></svg>;
}

function LinkedInIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" /></svg>;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <ThemePreview />
        <header className="site-header">
          <Link href="/" className="wordmark"><span className="brand-symbol" aria-hidden="true">k.</span> codestutis.com</Link>
          <nav aria-label="Main navigation"><Link href="/">About</Link><Link href="/projects">Projects</Link><Link href="/blog">Blog</Link></nav>
        </header>
        <main id="main"><Suspense fallback={children}><PageTransition>{children}</PageTransition></Suspense></main>
        <footer className="site-footer">
          <div className="footer-intro">
            <p>© {new Date().getFullYear()} Kestutis Biskis</p>
            <p>Built with curiosity. Based in Greater Boston.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            <Link href="/">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <div className="footer-contact">
            <p className="footer-label">Contact</p>
            <div className="footer-contact-links">
              <a href="mailto:kestutis.biskis@codestutis.com"><Mail size={14} aria-hidden="true" /> Email</a>
              <a href="https://github.com/codestutis" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
              <a href="https://www.linkedin.com/in/kestutis-biskis" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
