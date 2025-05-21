import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn - Landing template",
  description: "Landing template from Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          .skiptranslate {
            display: none !important;
          }
          .goog-te-banner-frame {
            display: none !important;
          }
          .goog-te-menu-value:hover {
            text-decoration: none !important;
          }
          .goog-te-gadget {
            color: transparent !important;
          }
          .goog-te-gadget .goog-te-combo {
            margin: 0 !important;
            padding: 0 !important;
          }
          body {
            top: 0 !important;
          }
          .goog-tooltip {
            display: none !important;
          }
          .goog-tooltip:hover {
            display: none !important;
          }
          .goog-text-highlight {
            background-color: transparent !important;
            border: none !important;
            box-shadow: none !important;
          }
          .goog-te-spinner-pos {
            display: none !important;
          }
          .goog-te-spinner-animation {
            display: none !important;
          }
          .goog-te-spinner {
            display: none !important;
          }
          .goog-te-spinner-img {
            display: none !important;
          }
          .goog-te-balloon-frame {
            display: none !important;
          }
          .goog-te-balloon-frame:hover {
            display: none !important;
          }
          .goog-te-balloon-frame:active {
            display: none !important;
          }
          .goog-te-balloon-frame:focus {
            display: none !important;
          }
          .goog-te-balloon-frame:visited {
            display: none !important;
          }
          .goog-te-balloon-frame:link {
            display: none !important;
          }
          .goog-te-balloon-frame:before {
            display: none !important;
          }
          .goog-te-balloon-frame:after {
            display: none !important;
          }
          .goog-te-balloon-frame * {
            display: none !important;
          }
          .goog-te-balloon-frame *:hover {
            display: none !important;
          }
          .goog-te-balloon-frame *:active {
            display: none !important;
          }
          .goog-te-balloon-frame *:focus {
            display: none !important;
          }
          .goog-te-balloon-frame *:visited {
            display: none !important;
          }
          .goog-te-balloon-frame *:link {
            display: none !important;
          }
          .goog-te-balloon-frame *:before {
            display: none !important;
          }
          .goog-te-balloon-frame *:after {
            display: none !important;
          }
        `}</style>
        <Script
          id="google-translate"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,hi',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script
          id="google-translate-script"
          strategy="afterInteractive"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
