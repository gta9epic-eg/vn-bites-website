"use client";

import { useLanguage } from "@/contexts/language-context";
import { Utensils, Clock, Star, Truck } from "lucide-react";

const features = [
  {
    icon: Utensils,
    titleAr: "مكونات طازجة",
    titleEn: "Fresh Ingredients",
    descAr: "نستخدم أجود المكونات الطازجة في كل وجبة",
    descEn: "We use the finest fresh ingredients in every meal",
  },
  {
    icon: Star,
    titleAr: "جودة فاخرة",
    titleEn: "Premium Quality",
    descAr: "معايير عالية في التحضير والتقديم",
    descEn: "High standards in preparation and presentation",
  },
  {
    icon: Clock,
    titleAr: "تحضير سريع",
    titleEn: "Quick Preparation",
    descAr: "طلبك جاهز في أسرع وقت ممكن",
    descEn: "Your order is ready in the shortest time possible",
  },
  {
    icon: Truck,
    titleAr: "توصيل متاح",
    titleEn: "Delivery Available",
    descAr: "نوصل لباب بيتك في القليوبية والطور",
    descEn: "We deliver to your door in Al-Qalyubia & Al-Tor",
  },
];

export function FeaturesSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-luxury">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {isRTL ? feature.titleAr : feature.titleEn}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isRTL ? feature.descAr : feature.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
