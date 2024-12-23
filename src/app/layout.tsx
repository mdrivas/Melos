import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Script from "next/script";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import { AuthProvider } from "./components/AuthProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Melos",
  description: "AI-powered playlist generation for every moment",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8788092045781561"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-zinc-900 text-zinc-50 overflow-x-hidden">
        <AuthProvider>
          <TRPCReactProvider>
            <Suspense>
              {children}
            </Suspense>
          </TRPCReactProvider>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
