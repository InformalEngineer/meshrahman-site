import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { HOME_DESCRIPTION, HOME_TITLE, OG_IMAGE, SITE } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site-wide defaults only. Canonical URLs are set per page through
// pageMeta(), never here: a canonical in the root layout would be inherited
// by every page that forgets its own and point them all at the home page.
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: HOME_TITLE,
    template: "%s · Mesh Rahman",
  },
  description: HOME_DESCRIPTION,
  authors: [{ name: "Mesh Rahman", url: SITE }],
  openGraph: {
    siteName: "Mesh Rahman",
    locale: "en_CA",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Mesh Rahman, essays" }],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0e",
};

// sameAs is what ties the name to the profiles in Google's knowledge graph.
// Add YouTube, LinkedIn, Instagram, and X here the day each @meshrahman
// handle is claimed (REMAINING-MANUAL-STEPS §4). Unclaimed URLs stay out.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Mesh Rahman",
  alternateName: ["Meshael Rahman", "Mesh"],
  url: SITE,
  image: `${SITE}/og.png`,
  jobTitle: "Infrastructure Program Manager",
  description:
    "Toronto infrastructure program manager (P.Eng, PMP) building electric bus depots at work, and homelab servers, budgets, and a 2011 Toyota Sequoia at home.",
  homeLocation: { "@type": "Place", name: "Toronto, Ontario, Canada" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "McMaster University" },
  knowsAbout: [
    "Homelab",
    "Self-hosting",
    "Proxmox",
    "Personal finance",
    "Infrastructure program management",
    "Construction project management",
    "Electric bus infrastructure",
    "Data centre construction",
    "Virtual design and construction",
    "ADHD",
  ],
  sameAs: ["https://github.com/InformalEngineer", "https://informalengineer.com"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Mesh Rahman",
  inLanguage: "en-CA",
  publisher: { "@id": `${SITE}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
        <a
          href="#main"
          className="sr-only rounded bg-accent px-4 py-2 font-medium text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
