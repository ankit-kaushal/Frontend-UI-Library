import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import SearchResults from "@/components/SearchResults";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { SearchProvider } from "@/contexts/SearchContext";
import MainContent from "@/components/MainContent";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "UI Library Documentation",
  description: "Documentation for the React component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <SidebarProvider>
          <SearchProvider>
            <div className="min-h-screen bg-gray-50 flex">
              <Sidebar />
              <MainContent>
                <TopBar />
                <main className="flex-1 overflow-auto">{children}</main>
              </MainContent>
            </div>
            <SearchResults />
          </SearchProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
