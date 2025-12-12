import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zahid Marwat - Computer Vision Engineer & AI/ML Enthusiast',
  description: 'Portfolio of Zahid Marwat - Passionate about building innovative AI solutions that solve real-world problems. Specializing in computer vision, machine learning, and full-stack development.',
  keywords: ['Computer Vision', 'AI', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
  authors: [{ name: 'Zahid Marwat' }],
  creator: 'Zahid Marwat',
  openGraph: {
    title: 'Zahid Marwat - Computer Vision Engineer & AI/ML Enthusiast',
    description: 'Passionate about building innovative AI solutions that solve real-world problems.',
    url: 'https://zahid-marwat.vercel.app',
    siteName: 'Zahid Marwat Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zahid Marwat Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zahid Marwat - Computer Vision Engineer & AI/ML Enthusiast',
    description: 'Passionate about building innovative AI solutions that solve real-world problems.',
    creator: '@zahid89782667',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white min-h-screen`}>
        <div className="relative">
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
