import ActionButton from "@/components/ActionButton";
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
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>

        {/* Quick Actions */}
        <ActionButton />

      </body>
    </html>
  );
}
