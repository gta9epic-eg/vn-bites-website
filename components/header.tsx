"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/cart-button";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
  { href: "/menu", labelAr: "المنيو", labelEn: "Menu" },
  { href: "/about", labelAr: "عن العلامة", labelEn: "About" },
  { href: "/contact", labelAr: "تواصل معنا", labelEn: "Contact" },
];

export function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="text-3xl font-serif font-bold text-gradient-gold">
                VN
              </span>
              <span className="text-xl font-sans text-foreground ms-1">
                BITES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-luxury font-medium"
              >
                {isRTL ? link.labelAr : link.labelEn}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <CartButton />

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground hover:text-primary hover:bg-secondary"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === "ar" ? "EN" : "عربي"}
              </span>
            </Button>

            {/* Order Button - Desktop */}
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury px-6">
                {t("اطلب الآن", "Order Now")}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-luxury font-medium py-2"
                >
                  {isRTL ? link.labelAr : link.labelEn}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury">
                  {t("اطلب الآن", "Order Now")}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
