import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import { AuthProvider } from "./components/AuthProvider";
import { Suspense } from "react";
import Link from "next/link";

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
      <body className="min-h-screen bg-white antialiased">
        <AuthProvider>
          <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-semibold text-blue-900">
                  The Provider's Coach Project
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                  <Link 
                    href="/about" 
                    className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    href="/faq" 
                    className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link 
                    href="/resources" 
                    className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Resources
                  </Link>
                  <Link 
                    href="/#contact"
                    className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/comingSoon"
                    className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Schedule a Session
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="pt-16 bg-white">
            <TRPCReactProvider>
              <Suspense>
                {children}
              </Suspense>
            </TRPCReactProvider>
          </main>

          <footer className="bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    The Provider's Coach Project
                  </h3>
                  <p className="text-gray-600">
                    Empowering healthcare providers through personalized coaching
                  </p>
                  <p className="text-gray-600 mt-2">
                    Based in California • Serving Providers Nationwide
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-gray-600 hover:text-blue-600">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/comingSoon" className="text-gray-600 hover:text-blue-600">
                        Schedule a Session
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Contact</h3>
                  <p className="text-gray-600">
                    Get in touch to learn more about our coaching services
                  </p>
                  <Link 
                    href="/comingSoon" 
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700"
                  >
                    Book a Session →
                  </Link>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
                <p>© {new Date().getFullYear()} The Provider's Coach Project. All rights reserved.</p>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                <p>
                  Resources and links are provided for informational purposes only. 
                  Inclusion does not constitute endorsement or financial relationship.
                </p>
              </div>
            </div>
          </footer>

          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
