import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhanpal Rithvik - Full Stack Developer & Data Scientist',
  description: 'Portfolio of Dhanpal Rithvik - Master of Science in Data Science, Full Stack Developer with expertise in Python, Java, React, Spring Boot, and Machine Learning.',
  keywords: 'Dhanpal Rithvik, Data Science, Full Stack Developer, Python, Java, React, Spring Boot, Machine Learning, Portfolio',
  authors: [{ name: 'Dhanpal Rithvik' }],
  creator: 'Dhanpal Rithvik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rithvik-d.github.io/',
    title: 'Dhanpal Rithvik - Full Stack Developer & Data Scientist',
    description: 'Portfolio showcasing projects in Data Science, Full Stack Development, and Machine Learning.',
    siteName: 'Dhanpal Rithvik Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanpal Rithvik - Full Stack Developer & Data Scientist',
    description: 'Portfolio showcasing projects in Data Science, Full Stack Development, and Machine Learning.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
