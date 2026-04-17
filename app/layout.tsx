import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoTop Trading PLC - Software, Media & Printing Solutions",
  description:
    "Leading provider of software development, media production and dubbing, and professional printing services in Ethiopia. Trusted by government agencies and enterprises.",
  keywords:
    "software development, media production, dubbing, printing press, Ethiopia, Addis Ababa, web development, mobile apps, video production, offset printing",
  authors: [{ name: "GoTop Trading PLC" }],
  creator: "GoTop Trading PLC",
  publisher: "GoTop Trading PLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gotop.et"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoTop Trading PLC - Software, Media & Printing Solutions",
    description:
      "Leading provider of software development, media production and dubbing, and professional printing services in Ethiopia.",
    url: "https://gotop.et",
    siteName: "GoTop Trading PLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GoTop Trading PLC - Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoTop Trading PLC - Software, Media & Printing Solutions",
    description:
      "Leading provider of software development, media production and dubbing, and professional printing services in Ethiopia.",
    images: ["/og-image.jpg"],
    creator: "@gotoptrading",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a1d30" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#0a1d30" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GoTop Trading" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="cleartype" content="on" />
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        <meta name="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GoTop Trading PLC",
              url: "https://gotop.et",
              logo: "https://gotop.et/logo.png",
              description:
                "Leading provider of software development, media production and dubbing, and professional printing services in Ethiopia.",
              foundingDate: "2018",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ET",
                addressLocality: "Addis Ababa",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+251-11-123-4567",
                contactType: "customer service",
                email: "info@gotop.et",
                availableLanguage: "English",
              },
              sameAs: [
                "https://linkedin.com/company/gotop-trading",
                "https://twitter.com/gotoptrading",
                "https://facebook.com/gotoptrading",
              ],
              serviceType: [
                "Software Development",
                "Media Production",
                "Printing Services",
              ],
              areaServed: "Ethiopia",
            }),
          }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
