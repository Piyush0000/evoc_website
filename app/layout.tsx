import type { Metadata } from "next";
import { inter, instrumentSerif, playfair, bodoni } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate E-commerce Dashboard",
  description: "Launch, Run & Scale Your E-commerce From One Dashboard.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg-primary">
      <body 
        className={`${inter.variable} ${instrumentSerif.variable} ${playfair.variable} ${bodoni.variable} font-sans antialiased text-text-white selection:bg-brand-blue/30`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
