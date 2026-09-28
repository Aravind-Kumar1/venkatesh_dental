import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Best Dental Clinic in Sanath Nagar | Venkateswara Dental Hospital",
  description:
    "Looking for a dentist in Sanath Nagar? Get expert dental treatments including RCT, implants, whitening and aligners at Venkateswara Dental Hospital.",
  keywords:
    "best dental clinic in sanath nagar, dentist in sanath nagar, dental implants sanath nagar, painless root canal treatment, teeth whitening hyderabad, invisible aligners",
  icons: {
    icon: "/ven_favicon.png",
    apple: "/ven_favicon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Venkateswara Dental Hospital",
    "alternateName": "Venkateswara Dental Clinic Sanath Nagar",
    "description": "Best dental clinic in Sanath Nagar providing painless RCT, Implants, and Cosmetic dentistry.",
    "url": "https://venkateshwaradental.com",
    "telephone": "+91 96763 16416",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, Flat No: S-104, SVSS Nivas Complex, Above Ratnadeep Super Market, Czech Colony",
      "addressLocality": "Sanath Nagar",
      "addressRegion": "Telangana",
      "postalCode": "500018",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 10:00-21:00",
    "priceRange": "$$"
  };

  return (
    <html lang="en" className={outfit.className}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
