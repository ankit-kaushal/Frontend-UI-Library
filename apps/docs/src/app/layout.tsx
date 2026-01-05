import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import SearchResults from "@/components/SearchResults";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import MainContent from "@/components/MainContent";
import { ToastContainerGlobal, ThemeScript } from "uiplex";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Uiplex - Modern React Component Library",
    template: "%s | Uiplex",
  },
  description:
    "A modern, accessible React component library built with TypeScript. Features Button, Loader, Radio, Modal, Input, and more with comprehensive theme support.",
  keywords: [
    "react",
    "react components",
    "ui library",
    "component library",
    "typescript",
    "uiplex",
    "react ui",
    "ui components",
    "design system",
    "react design system",
  ],
  authors: [{ name: "Uiplex" }],
  creator: "Uiplex",
  publisher: "Uiplex",
  metadataBase: new URL("https://uiplex.ankitkaushal.in"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uiplex.ankitkaushal.in", // Update with your actual domain
    siteName: "Uiplex",
    title: "Uiplex - Modern React Component Library",
    description:
      "A modern, accessible React component library built with TypeScript. Features Button, Loader, Radio, Modal, Input, and more with comprehensive theme support.",
    images: [
      {
        url: "/uiplex-logo.png", // Update with your actual OG image
        width: 1200,
        height: 630,
        alt: "Uiplex - React Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uiplex - Modern React Component Library",
    description:
      "A modern, accessible React component library built with TypeScript.",
    images: ["/uiplex-logo.png"], // Update with your actual Twitter image
    creator: "@uiplex", // Update with your Twitter handle if available
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
  verification: {
    google: "9RvH3NU-pxDwBitccJDCYleAFM29mqfFgGqQMhlkNdc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={workSans.className} suppressHydrationWarning>
        <ThemeScript storageKey="theme" />
        <ThemeProvider>
          <SidebarProvider>
            <SearchProvider>
              <div className="min-h-screen flex">
                <Sidebar />
                <MainContent>
                  <TopBar />
                  <main className="flex-1 overflow-auto">{children}</main>
                </MainContent>
              </div>
              <SearchResults />
            </SearchProvider>
          </SidebarProvider>
        </ThemeProvider>
        <ToastContainerGlobal />
      </body>
    </html>
  );
}
