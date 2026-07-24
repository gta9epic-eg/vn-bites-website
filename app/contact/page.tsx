"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    titleAr: "اتصل بنا",
    titleEn: "Call Us",
    valueAr: "+20 123 456 7890",
    valueEn: "+20 123 456 7890",
    href: "tel:+201234567890",
  },
  {
    icon: MessageCircle,
    titleAr: "واتساب",
    titleEn: "WhatsApp",
    valueAr: "تواصل معنا مباشرة",
    valueEn: "Chat with us directly",
    href: "https://wa.me/201234567890",
  },
  {
    icon: Clock,
    titleAr: "ساعات العمل",
    titleEn: "Working Hours",
    valueAr: "يومياً من 10 صباحاً - 12 مساءً",
    valueEn: "Daily 10 AM - 12 AM",
    href: null,
  },
];

const locations = [
  {
    nameAr: "فرع القليوبية",
    nameEn: "Al-Qalyubia Branch",
    addressAr: "القليوبية، مصر",
    addressEn: "Al-Qalyubia, Egypt",
  },
  {
    nameAr: "فرع الطور",
    nameEn: "Al-Tor Branch",
    addressAr: "الطور، جنوب سيناء، مصر",
    addressEn: "Al-Tor, South Sinai, Egypt",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
  },
];

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            <span className="text-gradient-gold">
              {t("تواصل معنا", "Contact Us")}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "نحن هنا لمساعدتك! تواصل معنا عبر الواتساب أو أرسل لنا رسالة",
              "We are here to help! Contact us via WhatsApp or send us a message"
            )}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                {t("أرسل لنا رسالة", "Send Us a Message")}
              </h2>

              {isSubmitted ? (
                <div className="bg-primary/10 border border-primary rounded-xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t("تم إرسال رسالتك!", "Message Sent!")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت.",
                      "Thank you for contacting us. We will reply soon."
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">
                      {t("الاسم", "Name")}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t("أدخل اسمك", "Enter your name")}
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground mb-2 block">
                      {t("رقم الهاتف", "Phone Number")}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder={t("أدخل رقم هاتفك", "Enter your phone number")}
                      className="bg-secondary border-border focus:border-primary"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground mb-2 block">
                      {t("الرسالة", "Message")}
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t(
                        "اكتب رسالتك أو طلبك هنا...",
                        "Write your message or order here..."
                      )}
                      className="bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-gold-dark transition-luxury"
                  >
                    {isSubmitting
                      ? t("جاري الإرسال...", "Sending...")
                      : t("إرسال الرسالة", "Send Message")}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {t("تواصل سريع", "Quick Contact")}
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-luxury group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-luxury shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {isRTL ? info.titleAr : info.titleEn}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-luxury"
                          >
                            {isRTL ? info.valueAr : info.valueEn}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {isRTL ? info.valueAr : info.valueEn}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#25D366] rounded-xl p-6 text-white text-center hover:bg-[#20BD5A] transition-luxury">
                  <MessageCircle className="h-10 w-10 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("اطلب عبر الواتساب", "Order via WhatsApp")}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t(
                      "أسرع طريقة للطلب - رد فوري",
                      "Fastest way to order - instant reply"
                    )}
                  </p>
                </div>
              </a>

              {/* Locations */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {t("فروعنا", "Our Locations")}
                </h2>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {isRTL ? location.nameAr : location.nameEn}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {isRTL ? location.addressAr : location.addressEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {t("تابعنا", "Follow Us")}
                </h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-luxury"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                  {/* TikTok */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-luxury"
                    aria-label="TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
