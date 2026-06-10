'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0f0f0f]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d5016] via-[#0f0f0f] to-[#0f0f0f] opacity-40"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a574] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c41e3a] rounded-full opacity-5 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          VN Bites
        </h1>
        <p className="text-xl md:text-2xl text-[#d4a574] mb-4 font-light">
          Authentic Vietnamese Cuisine
        </p>
        <p className="text-lg text-[#a0a0a0] mb-8 font-light leading-relaxed">
          Experience the rich flavors and aromatic traditions of Vietnam. From our kitchen to your table.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#d4a574] text-[#0f0f0f] font-semibold rounded-md hover:bg-[#c9985f] transition-colors">
            Explore Menu
          </button>
          <button className="px-8 py-3 border-2 border-[#d4a574] text-[#d4a574] font-semibold rounded-md hover:bg-[#d4a574] hover:text-[#0f0f0f] transition-colors">
            Reserve Now
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#d4a574]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
