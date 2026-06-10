'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Menu, Globe, MessageCircle, Heart, Share2, Zap } from 'lucide-react'
import { useState } from 'react'
import AIAssistant from '@/components/ai-assistant'

const products = {
  popular: [
    {
      id: 1,
      nameAr: 'بان كيك شوكولاتة / كراميل',
      descriptionAr: 'بان كيك طازج مع صوص الشوكولاتة أو الكراميل اللذيذ',
      image: 'https://images.unsplash.com/photo-1541417904180-f175f6991a94?w=400&h=400&fit=crop',
      price: 50,
      badge: null,
    },
    {
      id: 2,
      nameAr: 'أوريو بان كيك',
      descriptionAr: 'بان كيك مع قطع الأوريو وصوص الشوكولاتة المنفصل',
      image: 'https://images.unsplash.com/photo-1567327613485-f6d5f6f1f2e9?w=400&h=400&fit=crop',
      price: 60,
      badge: 'الأكثر طلباً',
    },
    {
      id: 3,
      nameAr: 'لوتس بان كيك',
      descriptionAr: 'بان كيك فاخر مع صوص اللوتس والكريمة الطازجة',
      image: 'https://images.unsplash.com/photo-1567327613485-f6d5f6f1f2e9?w=400&h=400&fit=crop',
      price: 65,
      badge: 'فاخر',
    },
    {
      id: 4,
      nameAr: 'ميكس بان كيك',
      descriptionAr: 'تجربة فريدة مع مزيج الشوكولاتة واللوتس والأوريو',
      image: 'https://images.unsplash.com/photo-1541417904180-f175f6991a94?w=400&h=400&fit=crop',
      price: 70,
      badge: 'الأفضل مبيعاً',
    },
  ],
  offers: [
    {
      id: 5,
      nameAr: 'عرض السعادة',
      descriptionAr: 'أوريو بان كيك + أيس كوفي',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba53dba?w=400&h=400&fit=crop',
      originalPrice: 100,
      price: 90,
      discount: 10,
    },
    {
      id: 6,
      nameAr: 'عرض اللمة',
      descriptionAr: '2 بوكس عيلة + 2 لتر حاجة ساقعة',
      image: 'https://images.unsplash.com/photo-1567327613485-f6d5f6f1f2e9?w=400&h=400&fit=crop',
      originalPrice: 320,
      price: 280,
      discount: 40,
    },
    {
      id: 7,
      nameAr: 'عرض روّق بالك',
      descriptionAr: 'ميكس بان كيك + أيس شوكولاتة',
      image: 'https://images.unsplash.com/photo-1541417904180-f175f6991a94?w=400&h=400&fit=crop',
      originalPrice: 100,
      price: 90,
      discount: 10,
    },
  ],
}

function ProductCard({ product, isOffer = false }) {
  const [liked, setLiked] = useState(false)

  return (
    <Card className="group overflow-hidden border-border bg-muted hover:shadow-xl transition-all duration-300">
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
        {isOffer && product.discount && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold flex flex-col items-center">
            <span className="text-xs">خصم</span>
            <span className="text-sm font-bold">{product.discount}</span>
            <span className="text-xs">جنيه</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`p-2 rounded-full transition-all ${
              liked
                ? 'bg-primary text-primary-foreground'
                : 'bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground'
            }`}
          >
            <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
          </button>
          <button className="p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-foreground text-right text-base mb-2">{product.nameAr}</h3>
        <p className="text-xs text-muted-foreground text-right mb-4">{product.descriptionAr}</p>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-1 text-sm font-bold">
            اطلب
          </Button>
          <div className="text-right">
            {isOffer && product.originalPrice && (
              <div className="text-xs text-muted-foreground line-through">{product.originalPrice} جنيه</div>
            )}
            <div className="text-lg font-bold text-primary">{product.price} جنيه</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [showAI, setShowAI] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-4 py-4 md:px-8">
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

          <h1 className="text-3xl font-bold text-center">
            <span className="text-primary">VN</span>
            <span className="text-foreground">BITES</span>
          </h1>

          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:flex gap-8 text-sm">
              <a href="#" className="hover:text-primary transition-colors">الرئيسية</a>
              <a href="#" className="hover:text-primary transition-colors">المنيو</a>
              <a href="#" className="hover:text-primary transition-colors">عن العلامة</a>
              <a href="#" className="hover:text-primary transition-colors">تواصل معنا</a>
            </nav>
            <Button
              onClick={() => setShowAI(!showAI)}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Zap size={16} className="mr-2" />
              AI
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-semibold">
              اطلب الآن
            </Button>
          </div>
        </div>
      </header>

      {/* AI Assistant */}
      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}

      {/* Hero Section with Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden border-b border-border">
        <img
          src="https://images.unsplash.com/photo-1541417904180-f175f6991a94?w=1200&h=600&fit=crop"
          alt="Premium Pancakes"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6 px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold">
            المذاق الفاخر
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 max-w-2xl">
            أشهى البان كيك<br />بمذاق لا يُنسى
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-xl">
            نقدم لك تجربة فريدة من البان كيك الطازج مع صوصات فاخرة من الشوكولاتة والكراميل واللوتس
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-semibold">
              اطلب الآن
            </Button>
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/10 rounded-full px-8 font-semibold">
              استعرض المنيو
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16 md:py-20 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'مكونات طازجة', desc: 'نستخدم أجود المكونات الطازجة في كل وجبة' },
            { title: 'جودة فاخرة', desc: 'معايير عالية في التحضير والتقديم' },
            { title: 'تحضير سريع', desc: 'طلبك جاهز في أسرع وقت ممكن' },
            { title: 'توصيل متاح', desc: 'نوصل لباب بيتك في القليوبية والطور' },
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary">الأكثر</span> طلباً
          </h2>
          <Button variant="ghost" className="text-primary hover:bg-primary/10">
            عرض الكل →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Offers Section */}
      <section className="px-4 md:px-8 py-16 border-t border-border bg-muted/50">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4 text-primary">
            <span className="text-2xl">✨</span>
            <span className="font-semibold">عروض حصرية</span>
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">العروض المميزة</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            استمتع بأفضل العروض والكومبوهات المصممة خصيصاً لك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.offers.map((product) => (
            <ProductCard key={product.id} product={product} isOffer={true} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4 text-primary text-lg">VN BITES</h4>
            <p className="text-sm text-muted-foreground">أشهى البان كيك والمشروبات الفاخرة</p>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-bold mb-3 text-foreground text-sm">والمية برياضة</h5>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">المنيو</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">عن العلامة</a></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-bold mb-3 text-foreground text-sm">تواصل معنا</h5>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>📞 +20 123 456 7890</li>
              <li className="flex items-center justify-center md:justify-end gap-1">
                <span>🔒 الخصوصية</span>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-bold mb-3 text-foreground text-sm">تابعنا</h5>
            <div className="flex justify-center md:justify-end gap-4 text-sm">
              <a href="#" className="hover:text-primary transition-colors">f</a>
              <a href="#" className="hover:text-primary transition-colors">t</a>
              <a href="#" className="hover:text-primary transition-colors">ig</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© حقوق الطبع والنشر VN BITES 2024 جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </main>
  )
}
