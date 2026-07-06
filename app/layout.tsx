import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Mahtab Alam | Portfolio",
  description: "I am a passionate software engineer with expertise in ReactJS, JavaScript, NodeJS, HTML/CSS, TailwindCSS, MongoDB, Git & GitHub, and C. I love building innovative web applications and solving complex problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
