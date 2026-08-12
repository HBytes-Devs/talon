import { IBM_Plex_Mono } from "next/font/google";
import { BRAND } from "../lib/brand";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: `Join ${BRAND.name} by ${BRAND.company}. ML-based automated employee productivity & time tracking. 3 users free forever.`,
  icons: {
    icon: [
      { url: "/linea/linea-app-icon-64.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/linea/linea-app-icon-180.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
