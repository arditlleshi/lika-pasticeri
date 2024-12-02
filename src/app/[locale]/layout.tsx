import ActionButton from "@/components/ActionButton";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  if (!routing.locales.includes(locale as "al" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white">
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </div>

        {/* Quick Actions */}
        <ActionButton />
      </body>
    </html>
  );
}
