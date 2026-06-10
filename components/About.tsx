'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0f0f0f] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative h-96 md:h-full min-h-[400px] bg-gradient-to-br from-[#2d5016] to-[#1a1a1a] rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 mx-auto text-[#d4a574] opacity-50 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-[#a0a0a0]">Restaurant Image</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-[#d4a574] text-sm font-semibold mb-2 uppercase tracking-wide">About Us</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Crafted with Tradition
            </h2>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6 font-light">
              At VN Bites, we celebrate the rich culinary heritage of Vietnam. Each dish is carefully prepared using authentic recipes passed down through generations, combined with the freshest local ingredients.
            </p>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8 font-light">
              Our mission is to bring the true taste of Vietnam to your table, creating memorable dining experiences that honor tradition while embracing modern excellence.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: '✓', text: 'Authentic Vietnamese Recipes' },
                { icon: '✓', text: 'Fresh, Locally Sourced Ingredients' },
                { icon: '✓', text: 'Expert Culinary Team' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[#d4a574] text-xl font-bold">{feature.icon}</span>
                  <span className="text-[#e5e5e5]">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
