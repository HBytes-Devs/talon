import Script from "next/script";
import { IBM_Plex_Mono } from "next/font/google";
import { BRAND } from "../lib/brand";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "monospace"],
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

const themeInit = `(function(){try{var k='talon-theme',t=localStorage.getItem(k);var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;if(d){r.classList.add('dark');r.style.colorScheme='dark';r.setAttribute('data-theme','dark');}else{r.classList.remove('dark');r.style.colorScheme='light';r.setAttribute('data-theme','light');}var lk='talon-locale',l=localStorage.getItem(lk);var loc=(l==='en'||l==='el'||l==='tr'||l==='ar')?l:(l==='ur'?(localStorage.setItem(lk,'en'),'en'):'en');r.lang=loc;r.dir=loc==='ar'?'rtl':'ltr';r.setAttribute('data-locale',loc);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <Script id="talon-theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}
