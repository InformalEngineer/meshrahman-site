import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meshrahman.com"),
  title: {
    default: "Mesh Rahman, builder, writer, professional tinkerer",
    template: "%s · Mesh Rahman",
  },
  description:
    "I'm Mesh. I build things (servers, spreadsheets, a truck, a career) and I write down what actually works. Including the parts nobody tells you.",
  openGraph: {
    siteName: "Mesh Rahman",
    type: "website",
    locale: "en_CA",
    url: "https://meshrahman.com",
  },
  twitter: {
    card: "summary",
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "Mesh Rahman, essays" },
      ],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0e",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mesh Rahman",
  alternateName: "Meshael Rahman",
  url: "https://meshrahman.com",
  jobTitle: "Engineer and project manager",
  sameAs: [
    "https://github.com/InformalEngineer",
    "https://informalengineer.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
