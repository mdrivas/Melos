import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import { AuthProvider } from "./components/AuthProvider";
import { Suspense } from "react";
import { NavBar } from "~/components/NavBar";
import Footer from "./components/Footer";
import { GivebutterScriptLoader } from "~/components/GivebutterScriptLoader";
import { FloatingDonateWidget } from "~/components/FloatingDonateWidget";

export const metadata: Metadata = {
  title: "The Provider's Coach Project",
  description: "Empowering healthcare providers through personalized coaching",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "The Provider's Coach Project",
    description: "Empowering healthcare providers through personalized coaching",
    siteName: "The Provider's Coach Project",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Provider's Coach Project"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <GivebutterScriptLoader />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <AuthProvider>
          <NavBar />
          <main className="bg-white">
            <TRPCReactProvider>
              <Suspense>
                {children}
              </Suspense>
            </TRPCReactProvider>
          </main>

          <Footer />
          <Toaster />
          <FloatingDonateWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
