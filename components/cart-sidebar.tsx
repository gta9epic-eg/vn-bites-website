"use client";

import { useCart } from "@/contexts/cart-context";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CartSidebar() {
  const { items, removeItem, updateQuantity, totalAmount, isOpen, setIsOpen } = useCart();
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const t = {
    cart: isArabic ? "سلة التسوق" : "Shopping Cart",
    empty: isArabic ? "سلتك فارغة" : "Your cart is empty",
    emptyDesc: isArabic ? "أضف بعض العناصر اللذيذة من قائمتنا" : "Add some delicious items from our menu",
    browsMenu: isArabic ? "تصفح المنيو" : "Browse Menu",
    total: isArabic ? "المجموع" : "Total",
    checkout: isArabic ? "إتمام الطلب" : "Checkout",
    egp: isArabic ? "ج.م" : "EGP",
    remove: isArabic ? "إزالة" : "Remove",
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${isArabic ? "left-0" : "right-0"} h-full w-full max-w-md bg-background border-${isArabic ? "r" : "l"} border-gold/20 z-50 flex flex-col`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold/20">
          <h2 className="text-xl font-bold text-gold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            {t.cart}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-foreground/60 hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gold/30 mb-4" />
              <p className="text-foreground/60 mb-2">{t.empty}</p>
              <p className="text-foreground/40 text-sm mb-4">{t.emptyDesc}</p>
              <Link href="/menu" onClick={() => setIsOpen(false)}>
                <Button className="bg-gold hover:bg-gold/90 text-background">
                  {t.browsMenu}
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="flex gap-3 bg-card/50 rounded-xl p-3 border border-gold/10"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.menuItem.image || "/images/hero-pancake.jpg"}
                      alt={isArabic ? item.menuItem.name_ar : item.menuItem.name_en}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {isArabic ? item.menuItem.name_ar : item.menuItem.name_en}
                    </h3>
                    <p className="text-gold font-bold">
                      {Number(item.menuItem.price)} {t.egp}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-7 h-7 border-gold/30"
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-7 h-7 border-gold/30"
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 text-red-500 hover:text-red-400 hover:bg-red-500/10 ms-auto"
                        onClick={() => removeItem(item.menuItem.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/20 p-4 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>{t.total}</span>
              <span className="text-gold">
                {totalAmount.toFixed(2)} {t.egp}
              </span>
            </div>
            <Link href="/checkout" onClick={() => setIsOpen(false)} className="block">
              <Button className="w-full bg-gold hover:bg-gold/90 text-background font-bold py-6">
                {t.checkout}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
