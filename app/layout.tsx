import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin', 'arabic'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VN Bites - تطبيق توصيل الطعام الفيتنامي',
  description: 'خدمة توصيل طعام فيتنامي أصيل',
}

export const viewport = {
  themeColor: '#d4a574',
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${geistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
