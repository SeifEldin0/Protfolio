import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://protfolio-kohl-sigma.vercel.app";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: {
    default: "Seif El-Din | Full-Stack Developer",
    template: "%s | Seif El-Din",
  },
  description:
    "Full-stack web developer crafting performant Next.js frontends and scalable Laravel/REST backends. مطور ويب سيف الدين متخصص في تصميم وتطوير مواقع سريعة واحترافية.",
  keywords: [
    "Seif El-Din",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "Portfolio",
    "Frontend",
    "Backend",
    "Web Developer",
    "مطور ويب",
    "تصميم مواقع",
    "سيف الدين",
    "برمجة مواقع",
    "front end",
    "back end",
    "web developer",
  ],
  authors: [{ name: "Seif El-Din", url: siteUrl }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Seif El-Din | Full-Stack Developer",
    description:
      "Building clean, fast web experiences with Next.js, React, and scalable Laravel backends. مطور ويب سيف الدين لتصميم مواقع احترافية.",
    url: siteUrl,
    siteName: "Seif El-Din Portfolio",
    images: [
      {
        url: "/E-commerce.png",
        width: 1200,
        height: 630,
        alt: "Seif El-Din Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seif El-Din | Full-Stack Developer",
    description:
      "Building clean, fast web experiences with Next.js, React, and scalable Laravel backends. مطور ويب سيف الدين لتصميم مواقع احترافية.",
    images: ["/E-commerce.png"],
  },
};

export default function RootLayout({ children }) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Seif El-Din",
    alternateName: "سيف الدين",
    url: siteUrl,
    jobTitle: "Full-Stack Web Developer",
    sameAs: [
      "https://www.linkedin.com/in/saif-eldin-mostafa-654585316",
      "https://github.com/SeifEldin0",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: ["React", "Next.js", "Laravel", "REST APIs", "MySQL"],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        {children}
      </body>
    </html>
  );
}
