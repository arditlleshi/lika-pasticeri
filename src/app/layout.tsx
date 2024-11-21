import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pasticeri Lika",
  description: "Delicious products from Pasticeri Lika.",
  // You can add more metadata here or customize per page
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Quick Actions */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex flex-col gap-3">
            <button
              // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-rose-600 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
