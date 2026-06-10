'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Star, Utensils } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">VN Bites</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="text-foreground hover:text-primary transition">Menu</a>
            <a href="#about" className="text-foreground hover:text-primary transition">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-5xl font-bold text-foreground text-balance">
                  Authentic Vietnamese Cuisine
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experience the flavors of Vietnam delivered fresh to your door
                </p>
              </div>
              <div className="flex gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Order Now
                </Button>
                <Button size="lg" variant="outline">
                  View Menu
                </Button>
              </div>
              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-foreground">30 min delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-foreground">Free delivery</span>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl h-80 flex items-center justify-center">
              <div className="text-center">
                <Utensils className="w-24 h-24 text-primary/20 mx-auto mb-4" />
                <p className="text-muted-foreground">Vietnamese food image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 text-balance">
            Why Choose VN Bites?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Fresh Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We use only the freshest ingredients sourced daily from local suppliers
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-secondary mb-2" />
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hot food delivered to your door in 30 minutes or less
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Utensils className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Authentic Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Traditional Vietnamese recipes prepared by our expert chefs
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section id="menu" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 text-balance">
            Popular Dishes
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Pho Bo', price: '$12.99', desc: 'Beef noodle soup' },
              { name: 'Banh Mi', price: '$8.99', desc: 'Vietnamese sandwich' },
              { name: 'Spring Rolls', price: '$6.99', desc: 'Fresh spring rolls' },
              { name: 'Bun Cha', price: '$10.99', desc: 'Grilled pork vermicelli' },
            ].map((item) => (
              <Card key={item.name} className="hover:shadow-lg transition">
                <div className="bg-foreground/5 h-32 rounded-t-lg flex items-center justify-center">
                  <Utensils className="w-12 h-12 text-primary/20" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                    Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold text-balance">
            Ready to Taste Vietnam?
          </h2>
          <p className="text-lg opacity-90">
            Download our app or visit our website to place your first order
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Order Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">VN Bites</h3>
              <p className="text-sm opacity-75">Authentic Vietnamese food delivery</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100">Menu</a></li>
                <li><a href="#" className="hover:opacity-100">About</a></li>
                <li><a href="#" className="hover:opacity-100">Delivery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@vnbites.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100">Facebook</a></li>
                <li><a href="#" className="hover:opacity-100">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-sm text-center opacity-75">
            <p>&copy; 2026 VN Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
