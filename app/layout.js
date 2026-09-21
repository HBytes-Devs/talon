import Script from "next/script";
import { IBM_Plex_Mono } from "next/font/google";
import { BRAND } from "../lib/brand";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "monospace"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://hbytes-devs.github.io/talon"),
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: `Join ${BRAND.name} by ${BRAND.company}. ML-based automated employee productivity & time tracking. 3 users free forever.`,
  icons: {
    icon: [{ url: "/hawklens-mark.png", type: "image/png" }],
    apple: "/hawklens-mark.png",
  },
};

const themeInit = `(function(){try{var k='hawklens-theme',ok='talon-theme',t=localStorage.getItem(k)||localStorage.getItem(ok);if(t&&!localStorage.getItem(k))localStorage.setItem(k,t);var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;if(d){r.classList.add('dark');r.style.colorScheme='dark';r.setAttribute('data-theme','dark');}else{r.classList.remove('dark');r.style.colorScheme='light';r.setAttribute('data-theme','light');}var lk='hawklens-locale',olk='talon-locale',l=localStorage.getItem(lk)||localStorage.getItem(olk);if(l&&!localStorage.getItem(lk))localStorage.setItem(lk,l);var loc=(l==='en'||l==='el'||l==='tr'||l==='ar')?l:(l==='ur'?(localStorage.setItem(lk,'en'),'en'):'en');r.lang=loc;r.dir=loc==='ar'?'rtl':'ltr';r.setAttribute('data-locale',loc);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <Script id="hawklens-theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}
