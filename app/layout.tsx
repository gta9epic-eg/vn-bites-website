import type { Metadata, Viewport } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/language-context";
import { CartProvider } from "@/contexts/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { AIChat } from "@/components/ai-chat";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VN BITES | أشهى البان كيك",
  description:
    "VN BITES - Premium pancakes with chocolate, caramel, lotus & more. Order now for the best pancake experience in Egypt. | أشهى البان كيك بالشوكولاتة والكراميل واللوتس",
  keywords: [
    "pancakes",
    "بان كيك",
    "VN BITES",
    "dessert",
    "حلويات",
    "Egypt",
    "مصر",
  ],
  authors: [{ name: "VN BITES" }],
  openGraph: {
    title: "VN BITES | أشهى البان كيك",
    description:
      "Premium pancakes with chocolate, caramel, lotus & more. Order now!",
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1410",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body
        className={`${cairo.variable} ${playfair.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
            <CartSidebar />
            <AIChat />
          </CartProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
