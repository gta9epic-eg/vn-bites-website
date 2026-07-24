"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/types/database";
import { Plus, Check, ShoppingBag } from "lucide-react";

interface MenuClientProps {
  menuItems: MenuItem[];
}

const categories = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "pancakes", labelAr: "بان كيك", labelEn: "Pancakes" },
  { id: "drinks", labelAr: "مشروبات", labelEn: "Drinks" },
  { id: "boxes", labelAr: "بوكسات", labelEn: "Boxes" },
  { id: "addons", labelAr: "إضافات", labelEn: "Add-ons" },
  { id: "offers", labelAr: "عروض", labelEn: "Offers" },
];

export function MenuClient({ menuItems }: MenuClientProps) {
  const { language, t } = useLanguage();
  const { addItem, items, setIsOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const isArabic = language === "ar";

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    setAddedItems((prev) => new Set([...prev, item.id]));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 1500);
  };

  const getItemQuantity = (itemId: string) => {
    const cartItem = items.find((i) => i.menuItem.id === itemId);
    return cartItem?.quantity || 0;
  };

  const translations = {
    title: isArabic ? "قائمة الطعام" : "Our Menu",
    subtitle: isArabic
      ? "اكتشف تشكيلتنا الرائعة من البان كيك والمشروبات"
      : "Discover our amazing collection of pancakes and drinks",
    addToCart: isArabic ? "أضف للسلة" : "Add to Cart",
    added: isArabic ? "تمت الإضافة" : "Added",
    egp: isArabic ? "ج.م" : "EGP",
    viewCart: isArabic ? "عرض السلة" : "View Cart",
    inCart: isArabic ? "في السلة" : "in cart",
  };

  return (
    <div className="min-h-screen bg-background py-12" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-4">
            {translations.title}
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-gold text-background hover:bg-gold/90"
                  : "border-gold/30 hover:border-gold hover:bg-gold/10"
              }
            >
              {isArabic ? category.labelAr : category.labelEn}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isAdded = addedItems.has(item.id);
            const quantity = getItemQuantity(item.id);

            return (
              <div
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/images/hero-pancake.jpg"}
                    alt={isArabic ? item.name_ar : item.name_en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-3 start-3 bg-gold text-background text-xs font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {/* Quantity Badge */}
                  {quantity > 0 && (
                    <span className="absolute top-3 end-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <ShoppingBag className="w-3 h-3" />
                      {quantity}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {isArabic ? item.name_ar : item.name_en}
                  </h3>
                  {(item.description_ar || item.description_en) && (
                    <p className="text-foreground/60 text-sm mb-3 line-clamp-2">
                      {isArabic ? item.description_ar : item.description_en}
                    </p>
                  )}

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gold font-bold text-xl">
                        {Number(item.price)} {translations.egp}
                      </span>
                      {item.original_price && (
                        <span className="text-foreground/40 line-through text-sm ms-2">
                          {Number(item.original_price)} {translations.egp}
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(item)}
                      disabled={isAdded}
                      className={
                        isAdded
                          ? "bg-green-500 hover:bg-green-500 text-white"
                          : "bg-gold hover:bg-gold/90 text-background"
                      }
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 me-1" />
                          {translations.added}
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 me-1" />
                          {translations.addToCart}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Cart Button - Fixed */}
        {items.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
            <Button
              size="lg"
              onClick={() => setIsOpen(true)}
              className="bg-gold hover:bg-gold/90 text-background font-bold px-8 py-6 rounded-full shadow-lg shadow-gold/30"
            >
              <ShoppingBag className="w-5 h-5 me-2" />
              {translations.viewCart} ({items.reduce((sum, i) => sum + i.quantity, 0)})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
