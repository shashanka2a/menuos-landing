import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MenuOS - Digital Menu Platform | The Operating System for Modern Restaurants",
  description: "MenuOS simplifies order management, increases revenue, and delivers a seamless dining experience with our all-in-one platform. QR code ordering, real-time analytics, and payment processing.",
  keywords: ["restaurant management", "digital menu", "QR ordering", "POS system", "restaurant software", "order management"],
  authors: [{ name: "MenuOS" }],
  creator: "MenuOS",
  publisher: "MenuOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://menuos.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://menuos.com",
    title: "MenuOS - The Operating System for Modern Restaurants",
    description: "MenuOS simplifies order management, increases revenue, and delivers a seamless dining experience with our all-in-one platform.",
    siteName: "MenuOS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MenuOS - Digital Menu Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MenuOS - The Operating System for Modern Restaurants",
    description: "MenuOS simplifies order management, increases revenue, and delivers a seamless dining experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-slate-900 antialiased overflow-x-hidden selection:bg-orange-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

