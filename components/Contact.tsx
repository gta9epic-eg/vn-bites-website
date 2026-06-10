'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 bg-[#0f0f0f] relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#d4a574] text-sm font-semibold mb-2 uppercase tracking-wide">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#d4a574] mb-3">Address</h3>
              <p className="text-[#a0a0a0] font-light">123 Vietnamese Street<br />Saigon District<br />City, State 12345</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#d4a574] mb-3">Phone</h3>
              <p className="text-[#a0a0a0] font-light hover:text-[#d4a574] transition-colors">
                <a href="tel:+1234567890">(123) 456-7890</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#d4a574] mb-3">Hours</h3>
              <p className="text-[#a0a0a0] font-light">
                Monday - Thursday: 11 AM - 10 PM<br />
                Friday - Saturday: 11 AM - 11 PM<br />
                Sunday: 12 PM - 9 PM
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#d4a574] mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[#a0a0a0] hover:text-[#d4a574] transition-colors font-light"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#e5e5e5] font-light mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#404040] rounded-md text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#d4a574] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-[#e5e5e5] font-light mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#404040] rounded-md text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#d4a574] transition-colors"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-[#e5e5e5] font-light mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#404040] rounded-md text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#d4a574] transition-colors"
                placeholder="Your phone (optional)"
              />
            </div>

            <div>
              <label className="block text-[#e5e5e5] font-light mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#404040] rounded-md text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#d4a574] transition-colors resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#c41e3a] text-white font-semibold rounded-md hover:bg-[#a01830] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
