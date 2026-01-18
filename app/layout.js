import { Outfit, Ovo, Exo_2, Cairo } from "next/font/google";
import "./globals.css";

const siteUrl = "https://seif-aldin-dev.vercel.app";
const siteName = "Seif Aldin Portfolio";
const siteTitle =
  "Seif Aldin | Full-Stack Developer | React, Next.js & Laravel Expert";
const siteDescription =
  "Seif Aldin (سيف الدين) is a professional Full-Stack Developer from Egypt, specializing in Next.js, React, and Laravel. Building high-performance, scalable web applications for clients worldwide. Available for freelance projects.";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
});

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-exo",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Seif Aldin - Full-Stack Developer",
  },
  description: siteDescription,
  keywords: [
    // English Keywords
    "Seif Aldin",
    "Seif Eldin",
    "Seif Mostafa",
    "Seif Aldin Developer",
    "Full Stack Developer",
    "Full Stack Developer Egypt",
    "Web Developer Egypt",
    "Next.js Developer",
    "Next.js Expert",
    "React Developer",
    "React Expert",
    "Laravel Developer",
    "Laravel Expert",
    "PHP Developer",
    "Laravel Developer",
    "Laravel Expert",
    "PHP Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Freelance Web Developer",
    "Freelance Developer Egypt",
    "Hire Web Developer",
    "Tailwind CSS Developer",
    "TypeScript Developer",
    "saifeldin0",
    "seifeldin0",
    "saif aldin",
    "saif web developer",
    "web Developer",
    "ts",
    "saif aldin",
    "seifeldin",
    "saif aldin",
    "seif web developer",
    // Arabic Keywords
    "سيف الدين",
    "سيف الدين مصطفى",
    "مطور ويب",
    "مطور فول ستاك",
    "سيف الدين مطور",
    "مطور نكست جي اس",
    "مطور ريأكت",
    "مطور لارافيل",
    "مطور بي إتش بي",
    "سيف الدين مبرمج",
    "برمجة مواقع",
    "سيف الدين فريلانس",
    "سيف ويب ديفيلوبر",
    "سيف الدين مصر",
    "تصميم مواقع",
    "مبرمج مصري",
    "مطور ويب محترف",
    "مطور ريأكت",
    "مطور نكست جي اس",
    "مطور لارافيل",
  ],
  authors: [{ name: "Seif Aldin", url: siteUrl }],
  creator: "Seif Aldin",
  publisher: "Seif Aldin",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "ar-EG": siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlea9b829abd7d7fea8",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/profile-img.jpg`,
        width: 1200,
        height: 630,
        alt: "Seif Aldin - Full-Stack Web Developer Portfolio",
        type: "image/jpeg",
      },
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Seif Aldin Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@seifaldin_dev",
    creator: "@seifaldin_dev",
    title: siteTitle,
    description: siteDescription,
    images: {
      url: `${siteUrl}/profile-img.jpg`,
      alt: "Seif Aldin - Full-Stack Developer",
    },
  },
  appleWebApp: {
    capable: true,
    title: "Seif Aldin",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  category: "technology",
  classification: "Portfolio, Web Development, Technology",
};

export default function RootLayout({ children }) {
  // Comprehensive Schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Person Schema - Your Profile
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Seif Aldin",
        alternateName: [
          "Seif Eldin",
          "سيف الدين",
          "Seif Mostafa",
          "سيف الدين مصطفى",
        ],
        givenName: "Seif",
        familyName: "Aldin",
        jobTitle: "Full-Stack Web Developer",
        description: siteDescription,
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/profile-img.jpg`,
          width: 400,
          height: 400,
        },
        email: "mailto:contact@seif-aldin-dev.vercel.app",
        sameAs: [
          "https://www.linkedin.com/in/saif-eldin-mostafa-654585316",
          "https://github.com/SeifEldin0",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "Laravel",
          "PHP",
          "JavaScript",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "MySQL",
          "MongoDB",
          "REST API",
          "Web Development",
          "Frontend Development",
          "Backend Development",
        ],
        knowsLanguage: ["English", "Arabic"],
        nationality: { "@type": "Country", name: "Egypt" },
        address: { "@type": "Country", name: "Egypt" },
      },
      // WebSite Schema
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#person` },
        author: { "@id": `${siteUrl}/#person` },
        inLanguage: ["en-US", "ar-EG"],
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-US",
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString(),
      },
      // Professional Service Schema
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Seif Aldin - Web Development Services",
        description:
          "Professional web development services including React, Next.js, Laravel applications, and full-stack solutions.",
        provider: { "@id": `${siteUrl}/#person` },
        areaServed: { "@type": "GeoCircle", name: "Worldwide" },
        serviceType: [
          "Web Development",
          "Frontend Development",
          "Backend Development",
          "Full-Stack Development",
          "React Development",
          "Next.js Development",
          "Laravel Development",
          "API Development",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Web Application Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce Solutions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "API Development & Integration",
              },
            },
          ],
        },
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${siteUrl}/#about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Projects",
            item: `${siteUrl}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: `${siteUrl}/#contact`,
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Primary Meta Tags */}
        <meta name="theme-color" content="#0a0a0b" />
        <meta name="color-scheme" content="dark" />
        <meta name="msapplication-TileColor" content="#0a0a0b" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Egypt" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en, ar" />
      </head>
      <body
        className={`${outfit.variable} ${ovo.variable} ${exo.variable} ${cairo.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
