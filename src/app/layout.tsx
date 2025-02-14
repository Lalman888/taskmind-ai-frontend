import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TaskMind AI | Intelligent Automation Platform",
  description: "TaskMind AI revolutionizes workflow automation through intelligent AI agents. Automate tasks across 100+ apps, optimize processes, and enhance productivity with adaptive, context-aware automation.",
  keywords: [
    "AI automation",
    "workflow optimization",
    "business process automation",
    "smart integrations",
    "no-code AI",
    "enterprise automation",
    "productivity tools"
  ],
  openGraph: {
    title: "TaskMind AI | Next-Gen Intelligent Automation",
    description: "Transform your workflows with AI-driven automation across communication platforms, CRMs, and business tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TaskMind AI Automation Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
       <div id="home" className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full" />
            <Navbar />
            <main className="mt-20 mx-auto w-full z-0 relative">
                {children}
            </main>
            <Footer />
      </body>
    </html>
  );
}
