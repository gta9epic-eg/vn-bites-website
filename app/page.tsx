'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Menu, Globe, MessageCircle, Heart, Share2 } from 'lucide-react'
import { useState } from 'react'

const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'kabsa', label: 'كبسة و كيك' },
  { id: 'sandwiches', label: 'ساندويتشات' },
  { id: 'salads', label: 'سلطات' },
  { id: 'desserts', label: 'حلويات' },
  { id: 'drinks', label: 'مشروبات' },
]

const products = [
  {
    id: 1,
    nameAr: 'صوص إضافي',
    nameEn: 'Extra Sauce',
    descriptionAr: 'صوص شوكولاتة أو كريمل أو لوتس',
    image: 'https://images.unsplash.com/photo-1587080692225-01ae81221b81?w=400&h=400&fit=crop',
    price: '15',
    badge: null,
  },
  {
    id: 2,
    nameAr: 'باتوه شوكولاتة',
    nameEn: 'Chocolate Cake',
    descriptionAr: 'باتوه طازج مع صوص شوكولاتة فاخر',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    price: '45',
    badge: null,
  },
  {
    id: 3,
    nameAr: 'عرض السعادة',
    nameEn: 'Happiness Deal',
    descriptionAr: 'أوريو باتوه + آيس كوفي',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    price: '55',
    badge: 'وفر 10 ريال',
  },
  {
    id: 4,
    nameAr: 'آيس كوفي',
    nameEn: 'Iced Coffee',
    descriptionAr: 'قهوة مثلجة منعشة وطيبة',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba53dba?w=400&h=400&fit=crop',
    price: '25',
    badge: null,
  },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [likes, setLikes] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    const newLikes = new Set(likes)
    if (newLikes.has(id)) {
      newLikes.delete(id)
    } else {
      newLikes.add(id)
    }
    setLikes(newLikes)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-4 py-4 md:px-8">
          {/* Left Section - Menu & Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Menu size={24} />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-1">
              <Globe size={20} />
              <span className="text-sm">EN</span>
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <MessageCircle size={20} />
            </button>
          </div>

          {/* Center - Logo */}
          <h1 className="text-3xl font-bold text-center">
            <span className="text-primary">VN</span>
            <span className="text-foreground">BITES</span>
          </h1>

          {/* Right Section - Navigation & CTA */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8 text-sm">
              <a href="#" className="hover:text-primary transition-colors">الرئيسية</a>
              <a href="#" className="hover:text-primary transition-colors">المنيو</a>
              <a href="#" className="hover:text-primary transition-colors">عن العلامة</a>
              <a href="#" className="hover:text-primary transition-colors">تواصل معنا</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-semibold">
              اطلب الآن
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 text-center border-b border-border">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">قائمة الطعام</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          اكتشف تشكيلتنا الرائعة من الكيك والمشروبات
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border bg-muted hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={product.image}
                  alt={product.nameAr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </div>
                )}

                {/* Action Buttons - Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
                  <button
                    onClick={() => toggleLike(product.id)}
                    className={`p-2 rounded-full transition-all ${
                      likes.has(product.id)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    <Heart size={18} fill={likes.has(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-right text-base">{product.nameAr}</h3>
                    <p className="text-xs text-muted-foreground text-right mt-1">{product.descriptionAr}</p>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-10 h-10 p-0 flex items-center justify-center font-bold text-lg"
                    onClick={() => console.log('Added to cart:', product.nameAr)}
                  >
                    +
                  </Button>
                  <span className="text-lg font-bold text-primary">{product.price} ر.س</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4 text-primary text-lg">VN BITES</h4>
            <p className="text-sm text-muted-foreground">طعام فيتنامي أصيل مع توصيل سريع</p>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-bold mb-3 text-foreground">الروابط السريعة</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">المنيو</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">عن العلامة</a></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-bold mb-3 text-foreground">التواصل</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>البريد الإلكتروني: info@vnbites.com</li>
              <li>الهاتف: +966 50 000 0000</li>
              <li>العنوان: الرياض، السعودية</li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-bold mb-3 text-foreground">تابعنا</h5>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 VN Bites. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  )
}
