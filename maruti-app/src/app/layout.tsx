import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { AIChatbot } from "@/components/AIChatbot";
import { Preloader } from "@/components/Preloader";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Advanced Fabric Showcase | Maruti Textile Empire",
  description: "Explore the microscopic detail of our premium Indian Designer Fabrics and Silk Rayons.",
  authors: [{ name: "builtwithadi" }],
  creator: "builtwithadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${bodoni.variable}`} suppressHydrationWarning>
      <body className="bg-background text-on-background font-sans antialiased overflow-x-hidden selection:bg-muted-gold selection:text-royal-maroon" suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          {children}
          <AIChatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
