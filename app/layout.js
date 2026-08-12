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
  metadataBase: new URL("https://hbytes-devs.github.io/talon"),
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: `Join ${BRAND.name} by ${BRAND.company}. ML-based automated employee productivity & time tracking. 3 users free forever.`,
  icons: {
    icon: [{ url: "/talon-mark.svg", type: "image/svg+xml" }],
    apple: "/talon-mark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
