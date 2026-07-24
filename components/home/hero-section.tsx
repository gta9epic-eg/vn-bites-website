"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pancake.jpg"
          alt="VN BITES Premium Pancakes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/30">
            <span className="text-primary text-sm font-medium">
              {t("المذاق الفاخر", "Premium Taste")}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="text-foreground">{t("أشهى", "The Finest")}</span>{" "}
            <span className="text-gradient-gold">{t("البان كيك", "Pancakes")}</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">
              {t("بمذاق لا يُنسى", "With Unforgettable Taste")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            {t(
              "نقدم لك تجربة فريدة من البان كيك الطازج مع صوصات فاخرة من الشوكولاتة والكراميل واللوتس",
              "Experience unique fresh pancakes with premium sauces including chocolate, caramel, and lotus"
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury px-8 py-6 text-lg glow-gold"
              >
                {t("اطلب الآن", "Order Now")}
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury px-8 py-6 text-lg"
              >
                {t("استعرض المنيو", "View Menu")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
}
