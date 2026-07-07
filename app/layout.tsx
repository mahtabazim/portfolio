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

export const metadata: Metadata = {
  title: "Md Mahtab Alam | Full-stack Developer",
  description:
    "Portfolio of Md Mahtab Alam, a full-stack developer from India building clean web applications with React, Next.js, and practical backend foundations.",
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
