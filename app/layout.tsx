import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mahtabazim.me";
const siteDescription =
  "Hi, I'm Mahtab, a full-stack developer. I build web apps with React and Next.js, and I like keeping things simple, fast, and genuinely useful.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md Mahtab Alam | Full-stack Developer",
  description: siteDescription,
  keywords: [
    "Md Mahtab Alam",
    "Mahtab Alam",
    "mahtabazim",
    "themahtabazim",
    "full-stack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Md Mahtab Alam", url: siteUrl }],
  creator: "Md Mahtab Alam",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Md Mahtab Alam",
    title: "Md Mahtab Alam | Full-stack Developer",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@themahtabazim",
    title: "Md Mahtab Alam | Full-stack Developer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="598095b2-a696-40d4-beab-1863fb3b3bcd"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
