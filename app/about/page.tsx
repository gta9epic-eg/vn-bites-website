"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: Award,
    titleAr: "الجودة أولاً",
    titleEn: "Quality First",
    descAr: "نلتزم بأعلى معايير الجودة في كل ما نقدمه",
    descEn: "We commit to the highest quality standards in everything we offer",
  },
  {
    icon: Heart,
    titleAr: "شغف الطعام",
    titleEn: "Passion for Food",
    descAr: "نحب ما نفعله وهذا يظهر في كل قطعة بان كيك",
    descEn: "We love what we do and it shows in every pancake piece",
  },
  {
    icon: Users,
    titleAr: "رضا العملاء",
    titleEn: "Customer Satisfaction",
    descAr: "سعادتكم هي هدفنا الأول والأخير",
    descEn: "Your happiness is our first and final goal",
  },
  {
    icon: Target,
    titleAr: "التميز دائماً",
    titleEn: "Always Excellence",
    descAr: "نسعى للتميز في كل تفصيلة صغيرة",
    descEn: "We strive for excellence in every small detail",
  },
];

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={isRTL ? "lg:order-1" : "lg:order-2"}>
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                {t("قصتنا", "Our Story")}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                {t("عن", "About")}{" "}
                <span className="text-gradient-gold">VN BITES</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "بدأت قصة VN BITES من شغفنا بتقديم البان كيك بطريقة مختلفة ومميزة. نؤمن أن الطعام الجيد يجمع الناس ويصنع ذكريات لا تُنسى. لذلك نحرص على استخدام أجود المكونات وأفضل الوصفات لنقدم لكم تجربة استثنائية.",
                  "VN BITES started from our passion for serving pancakes in a unique and special way. We believe that good food brings people together and creates unforgettable memories. That's why we ensure using the finest ingredients and best recipes to give you an exceptional experience."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t(
                  "نفخر بتواجدنا في القليوبية والطور بجنوب سيناء، ونسعى لتوسيع نطاق خدماتنا لنصل إلى المزيد من عشاق البان كيك في كل مكان.",
                  "We are proud to be present in Al-Qalyubia and Al-Tor in South Sinai, and we are working to expand our services to reach more pancake lovers everywhere."
                )}
              </p>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury px-8">
                  {t("تواصل معنا", "Contact Us")}
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div className={`relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/about-kitchen.jpg"
                  alt={t("مطبخ VN BITES", "VN BITES Kitchen")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -end-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              {t("رسالتنا", "Our Mission")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              {t(
                "نصنع السعادة في كل قضمة",
                "Creating Happiness in Every Bite"
              )}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                "رسالتنا هي تقديم أشهى البان كيك بجودة استثنائية وبأسعار مناسبة للجميع، مع الحفاظ على تجربة راقية تليق بعملائنا الكرام.",
                "Our mission is to deliver the most delicious pancakes with exceptional quality at affordable prices, while maintaining a premium experience worthy of our valued customers."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              {t("قيمنا", "Our Values")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {t("ما نؤمن به", "What We Believe In")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-luxury text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-luxury">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {isRTL ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {isRTL ? value.descAr : value.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-y border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {t("جرب طعم الفخامة", "Experience the Taste of Luxury")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t(
              "استعرض منيونا المتنوع واكتشف تشكيلتنا المميزة من البان كيك",
              "Browse our diverse menu and discover our special pancake collection"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury px-8 glow-gold"
              >
                {t("استعرض المنيو", "View Menu")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury px-8"
              >
                {t("اطلب الآن", "Order Now")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
