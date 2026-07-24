"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { offers } from "@/data/menu-data";
import { Sparkles } from "lucide-react";

export function FeaturedOffers() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {t("عروض حصرية", "Exclusive Offers")}
            </span>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {t("العروض المميزة", "Featured Offers")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "استمتع بأفضل العروض والكومبوهات المصممة خصيصاً لك",
              "Enjoy our best deals and combos designed just for you"
            )}
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-luxury card-luxury"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={isRTL ? offer.nameAr : offer.nameEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Discount Badge */}
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {t("خصم", "Save")} {offer.originalPrice - offer.price} {t("جنيه", "EGP")}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-luxury">
                  {isRTL ? offer.nameAr : offer.nameEn}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {isRTL ? offer.descriptionAr : offer.descriptionEn}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {offer.price} {t("جنيه", "EGP")}
                  </span>
                  <span className="text-muted-foreground line-through text-sm">
                    {offer.originalPrice} {t("جنيه", "EGP")}
                  </span>
                </div>

                {/* CTA */}
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury">
                    {t("اطلب الآن", "Order Now")}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
