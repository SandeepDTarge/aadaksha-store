import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import StorefrontWrapper from "@/components/layout/StorefrontWrapper";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// Modern sans for UI elements
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Premium serif for headings
const playfair = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aadaksha | Authentic Maharashtrian Foods",
  description: "India's most premium online destination for traditional Maharashtrian foods, culture, recipes, festivals and heritage.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const messages = await getMessages();

  return (
    <html lang={resolvedParams.locale}>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <StorefrontWrapper>
            {children}
          </StorefrontWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
