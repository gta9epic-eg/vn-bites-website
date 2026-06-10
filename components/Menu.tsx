'use client'

export default function Menu() {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Crispy Spring Rolls', price: '$8', description: 'Golden fried rolls with pork and vegetables' },
        { name: 'Fresh Rolls', price: '$7', description: 'Rice paper rolls with shrimp and herbs' },
        { name: 'Fried Calamari', price: '$10', description: 'Tender calamari with Vietnamese spices' },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Pho Bo', price: '$12', description: 'Beef noodle soup with aromatic broth' },
        { name: 'Banh Mi Sandwich', price: '$9', description: 'French-Vietnamese bread with your choice of meat' },
        { name: 'Com Tam', price: '$11', description: 'Broken rice with grilled protein and vegetables' },
      ],
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Vietnamese Coffee', price: '$5', description: 'Strong coffee with sweetened condensed milk' },
        { name: 'Fresh Mango Juice', price: '$6', description: 'Refreshing mango juice' },
        { name: 'Iced Tea', price: '$4', description: 'Traditional Vietnamese iced tea' },
      ],
    },
  ]

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#d4a574] text-sm font-semibold mb-2 uppercase tracking-wide">Our Selection</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Explore Our Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((category, idx) => (
            <div key={idx} className="bg-[#2d2d2d] rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-[#d4a574] mb-6 pb-4 border-b border-[#404040]">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="pb-6 border-b border-[#404040] last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                      <span className="text-[#c41e3a] font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-[#a0a0a0] text-sm font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#c41e3a] text-white font-semibold rounded-md hover:bg-[#a01830] transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  )
}
