import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trium Solutions Limited | Motor Rewinding & Electrical Services in Kenya",
  description:
    "Expert electric motor rewinding, industrial pump repairs, air-conditioning maintenance, and electrical installations in Nairobi, Kenya. 10+ years experience. Based in Mlolongo Police Line. Call +254 768 388 710.",
  keywords: [
    "motor rewinding Kenya",
    "electric motor repair Nairobi",
    "industrial pump repair Kenya",
    "AC maintenance Nairobi",
    "electrical services Kenya",
    "Trium Solutions Limited",
    "Mlolongo motor rewinding",
    "alternator rewinding Kenya",
    "armature rewinding Nairobi",
    "motor rewinding Mlolongo",
  ],
  openGraph: {
    title: "Trium Solutions Limited | Motor Rewinding & Electrical Services",
    description:
      "Kenya's trusted motor rewinding experts. Serving industrial clients since 2007. Based in Mlolongo Police Line, Nairobi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>{children}</body>
    </html>
  );
}
