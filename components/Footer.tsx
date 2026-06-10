'use client'

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#2d2d2d]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center">
                <span className="text-[#0f0f0f] font-bold">V</span>
              </div>
              <span className="text-lg font-serif font-bold text-[#d4a574]">VN Bites</span>
            </div>
            <p className="text-[#a0a0a0] font-light text-sm">Authentic Vietnamese cuisine at its finest.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'About', 'Contact', 'Reservations'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#a0a0a0] hover:text-[#d4a574] transition-colors font-light text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Info</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#a0a0a0] hover:text-[#d4a574] transition-colors font-light text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-[#a0a0a0] font-light text-sm mb-4">Subscribe for updates and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-[#2d2d2d] text-white placeholder-[#a0a0a0] text-sm focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#d4a574] text-[#0f0f0f] font-semibold text-sm hover:bg-[#c9985f] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2d2d2d] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#a0a0a0] font-light text-sm">
            © 2024 VN Bites. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Facebook', 'Instagram', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[#a0a0a0] hover:text-[#d4a574] transition-colors font-light text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
