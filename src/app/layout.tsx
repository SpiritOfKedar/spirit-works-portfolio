import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Fredoka } from "next/font/google";
import "./globals.css";
import { DotGrid } from "@/components/dot-grid";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { CommandPalette } from "@/components/command-palette";
import { KeyboardHint } from "@/components/keyboard-hint";
import { TimeGreeting } from "@/components/time-greeting";
import { EasterEgg } from "@/components/easter-egg";
import { PageLoader } from "@/components/page-loader";
import { CopyEmail } from "@/components/copy-email";
import { ScrollVibration } from "@/components/scroll-vibration";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontRoblox = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-roblox",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Spirit Works",
    template: `%s | Spirit Works`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-14 sm:pt-16 pb-24 sm:pb-12 px-4 sm:px-6 relative",
          fontSans.variable,
          fontRoblox.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <PageLoader />
            <ScrollProgress />
            <TimeGreeting />
            <DotGrid />
            {children}
            <Navbar />
            <BackToTop />
            <CopyEmail email={DATA.contact.email} />
            <CommandPalette />
            <KeyboardHint />
            <EasterEgg />
            <ScrollVibration />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

