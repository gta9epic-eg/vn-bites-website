"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pancakes } from "@/data/menu-data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PopularItems() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">
              {t("الأكثر طلباً", "Most Ordered")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {t("بان كيك كبس", "Signature Pancakes")}
            </h2>
          </div>
          <Link href="/menu" className="mt-4 md:mt-0">
            <Button
              variant="ghost"
              className="text-primary hover:text-gold-dark hover:bg-transparent transition-luxury group"
            >
              {t("عرض الكل", "View All")}
              {isRTL ? (
                <ArrowLeft className="ms-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </Link>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pancakes.map((item) => (
            <div
              key={item.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-luxury"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={isRTL ? item.nameAr : item.nameEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Badge */}
                {item.badge && (
                  <Badge className="absolute top-4 end-4 bg-primary text-primary-foreground">
                    {item.badge === "Popular" && t("الأكثر طلباً", "Popular")}
                    {item.badge === "Premium" && t("فاخر", "Premium")}
                    {item.badge === "Best Seller" && t("الأفضل مبيعاً", "Best Seller")}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-luxury">
                  {isRTL ? item.nameAr : item.nameEn}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {isRTL ? item.descriptionAr : item.descriptionEn}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {item.price} {t("جنيه", "EGP")}
                  </span>
                  <Link href="/contact">
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury"
                    >
                      {t("اطلب", "Order")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
