import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "VN Bites - Vietnamese Restaurant",
  description: "Experience authentic Vietnamese cuisine",
  openGraph: {
    type: "website",
    title: "VN Bites - Vietnamese Restaurant",
    description: "Experience authentic Vietnamese cuisine",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0f0f0f]">
      <body className={`${playfair.variable} ${lora.variable} bg-[#0f0f0f] text-[#ffffff]`}>
        {children}
      </body>
    </html>
  );
}
