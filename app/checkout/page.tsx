"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/lib/supabase/client";
import {
  ArrowRight,
  ArrowLeft,
  ShoppingBag,
  User,
  Phone,
  MapPin,
  FileText,
  Loader2,
  CheckCircle,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const { items, totalAmount, updateQuantity, removeItem, clearCart } = useCart();
  const isArabic = language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);

  const t = {
    checkout: isArabic ? "إتمام الطلب" : "Checkout",
    orderSummary: isArabic ? "ملخص الطلب" : "Order Summary",
    customerInfo: isArabic ? "معلومات العميل" : "Customer Information",
    name: isArabic ? "الاسم الكامل" : "Full Name",
    namePlaceholder: isArabic ? "أدخل اسمك الكامل" : "Enter your full name",
    phone: isArabic ? "رقم الهاتف" : "Phone Number",
    phonePlaceholder: isArabic ? "01xxxxxxxxx" : "01xxxxxxxxx",
    address: isArabic ? "عنوان التوصيل" : "Delivery Address",
    addressPlaceholder: isArabic
      ? "أدخل عنوانك بالتفصيل (المنطقة، الشارع، رقم المبنى)"
      : "Enter your detailed address (area, street, building number)",
    notes: isArabic ? "ملاحظات إضافية" : "Additional Notes",
    notesPlaceholder: isArabic
      ? "أي تعليمات خاصة للطلب (اختياري)"
      : "Any special instructions (optional)",
    subtotal: isArabic ? "المجموع الفرعي" : "Subtotal",
    delivery: isArabic ? "التوصيل" : "Delivery",
    free: isArabic ? "مجاني" : "Free",
    total: isArabic ? "الإجمالي" : "Total",
    placeOrder: isArabic ? "تأكيد الطلب" : "Place Order",
    processing: isArabic ? "جاري المعالجة..." : "Processing...",
    emptyCart: isArabic ? "سلتك فارغة" : "Your cart is empty",
    emptyCartDesc: isArabic
      ? "أضف بعض العناصر من المنيو للمتابعة"
      : "Add some items from the menu to continue",
    backToMenu: isArabic ? "العودة للمنيو" : "Back to Menu",
    egp: isArabic ? "ج.م" : "EGP",
    required: isArabic ? "هذا الحقل مطلوب" : "This field is required",
    invalidPhone: isArabic ? "رقم هاتف غير صحيح" : "Invalid phone number",
    orderSuccess: isArabic ? "تم استلام طلبك بنجاح!" : "Order Received Successfully!",
    orderSuccessDesc: isArabic
      ? "سنتواصل معك قريباً لتأكيد الطلب"
      : "We will contact you shortly to confirm your order",
    orderNumberLabel: isArabic ? "رقم الطلب" : "Order Number",
    continueShopping: isArabic ? "متابعة التسوق" : "Continue Shopping",
  };

  const BackArrow = isArabic ? ArrowRight : ArrowLeft;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.required;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.required;
    } else if (!/^01[0-9]{9}$/.test(formData.phone.trim())) {
      newErrors.phone = t.invalidPhone;
    }

    if (!formData.address.trim()) {
      newErrors.address = t.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const supabase = createClient();

      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_name: formData.name.trim(),
          customer_phone: formData.phone.trim(),
          customer_address: formData.address.trim(),
          total_amount: totalAmount,
          notes: formData.notes.trim() || null,
          status: "pending",
        })
        .select("id, order_number")
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map((item) => ({
        order_id: order.id,
        menu_item_id: item.menuItem.id,
        quantity: item.quantity,
        unit_price: Number(item.menuItem.price),
        subtotal: Number(item.menuItem.price) * item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      setOrderNumber(order.order_number);
      setIsSuccess(true);
      clearCart();
    } catch (error) {
      console.error("Error placing order:", error);
      alert(isArabic ? "حدث خطأ. حاول مرة أخرى." : "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success State
  if (isSuccess) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center py-12 px-4"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="bg-card border border-gold/20 rounded-2xl p-8 md:p-12 text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">{t.orderSuccess}</h1>
          <p className="text-foreground/60 mb-6">{t.orderSuccessDesc}</p>

          {orderNumber && (
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-foreground/60 mb-1">{t.orderNumberLabel}</p>
              <p className="text-3xl font-bold text-gold">#{orderNumber}</p>
            </div>
          )}

          <Link href="/menu">
            <Button className="bg-gold hover:bg-gold/90 text-background w-full">
              {t.continueShopping}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Empty Cart State
  if (items.length === 0) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center py-12 px-4"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="text-center">
          <ShoppingBag className="w-20 h-20 text-gold/30 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">{t.emptyCart}</h1>
          <p className="text-foreground/60 mb-6">{t.emptyCartDesc}</p>
          <Link href="/menu">
            <Button className="bg-gold hover:bg-gold/90 text-background">
              <BackArrow className="w-4 h-4 me-2" />
              {t.backToMenu}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/menu">
            <Button variant="ghost" size="icon">
              <BackArrow className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gradient-gold">{t.checkout}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-card border border-gold/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold" />
              {t.orderSummary}
            </h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="flex gap-4 bg-background/50 rounded-xl p-3 border border-gold/10"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.menuItem.image || "/images/hero-pancake.jpg"}
                      alt={isArabic ? item.menuItem.name_ar : item.menuItem.name_en}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {isArabic ? item.menuItem.name_ar : item.menuItem.name_en}
                    </h3>
                    <p className="text-gold font-bold text-sm">
                      {Number(item.menuItem.price)} {t.egp}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-6 h-6 border-gold/30"
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-6 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-6 h-6 border-gold/30"
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-6 h-6 text-red-500 hover:text-red-400 ms-auto"
                        onClick={() => removeItem(item.menuItem.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="font-bold text-foreground">
                      {(Number(item.menuItem.price) * item.quantity).toFixed(2)} {t.egp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-gold/20 pt-4 space-y-2">
              <div className="flex justify-between text-foreground/60">
                <span>{t.subtotal}</span>
                <span>
                  {totalAmount.toFixed(2)} {t.egp}
                </span>
              </div>
              <div className="flex justify-between text-foreground/60">
                <span>{t.delivery}</span>
                <span className="text-green-500">{t.free}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-foreground pt-2 border-t border-gold/20">
                <span>{t.total}</span>
                <span className="text-gold">
                  {totalAmount.toFixed(2)} {t.egp}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Form */}
          <div className="bg-card border border-gold/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-gold" />
              {t.customerInfo}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4 text-gold" />
                  {t.name} <span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.namePlaceholder}
                  className={`bg-background border-gold/20 focus:border-gold ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Phone className="w-4 h-4 text-gold" />
                  {t.phone} <span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.phonePlaceholder}
                  type="tel"
                  dir="ltr"
                  className={`bg-background border-gold/20 focus:border-gold ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  {t.address} <span className="text-red-500">*</span>
                </label>
                <Textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder={t.addressPlaceholder}
                  rows={3}
                  className={`bg-background border-gold/20 focus:border-gold resize-none ${
                    errors.address ? "border-red-500" : ""
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <FileText className="w-4 h-4 text-gold" />
                  {t.notes}
                </label>
                <Textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t.notesPlaceholder}
                  rows={2}
                  className="bg-background border-gold/20 focus:border-gold resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold/90 text-background font-bold py-6 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 me-2 animate-spin" />
                    {t.processing}
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 me-2" />
                    {t.placeOrder}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
