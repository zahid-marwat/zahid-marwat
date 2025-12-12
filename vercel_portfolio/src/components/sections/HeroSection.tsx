'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Computer Vision Engineer',
    'AI/ML Enthusiast',
    'Full-Stack Developer',
    'Problem Solver'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex, texts])

  const socialLinks = [
    {
      href: 'https://github.com/zahid-marwat',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'https://linkedin.com/in/zahid4830513',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://twitter.com/zahid89782667',
      icon: Twitter,
      label: 'Twitter'
    },
    {
      href: 'mailto:fbpzahid4830@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="gradient-text">Zahid</span>
              </h1>
              <div className="h-12 md:h-16">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
                Building innovative AI solutions and scalable architectures that drive 
                business transformation. Specializing in computer vision, machine learning, 
                and full-stack development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/assets/Zahid_Marwat_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </Link>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary-400">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary-400">25+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary-400">15+</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full bg-dark-900 p-4">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/assets/profile-picture.png"
                        alt="Zahid Marwat"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center animate-float">
                <div className="text-2xl">🚀</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xl">⚡</div>
              </div>
              <div className="absolute top-1/4 -left-8 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                <div className="text-lg">🎯</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
