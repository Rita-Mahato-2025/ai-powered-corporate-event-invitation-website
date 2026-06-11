import type { Metadata } from "next";
import "./globals.css";
import { CompanyProvider } from "@/context/CompanyContext";
import Navbar from "@/components/nav/Navbar";

export const metadata: Metadata = {
  title: "Aurora – Corporate Event Invitation",
  description: "Bespoke digital invitation for an exclusive corporate event in Udaipur.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CompanyProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-black/80 focus:px-3 focus:py-2 focus:text-sm focus:text-[#D4AF37]">
            Skip to main content
          </a>
          <Navbar />
          {children}
        </CompanyProvider>
      </body>
    </html>
  );
}
