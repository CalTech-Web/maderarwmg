import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Madera Regional Water Management Group",
    template: "%s | Madera RWMG",
  },
  description:
    "Facilitating coordination, collaboration, and communication for comprehensive water resource management in the Madera Region.",
  metadataBase: new URL("https://maderarwmg.vercel.app"),
  openGraph: {
    title: "Madera Regional Water Management Group",
    description:
      "Facilitating coordination, collaboration, and communication for comprehensive water resource management in the Madera Region.",
    url: "https://maderarwmg.vercel.app",
    siteName: "Madera RWMG",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Madera Regional Water Management Group",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
