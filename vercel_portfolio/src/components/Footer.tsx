import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-dark-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ZM</span>
              </div>
              <span className="text-xl font-bold gradient-text">Zahid Marwat</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Computer Vision Engineer & AI/ML Enthusiast passionate about building 
              innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Technologies</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Python & AI/ML</li>
              <li>Computer Vision</li>
              <li>Deep Learning</li>
              <li>Full-Stack Development</li>
              <li>Cloud Platforms</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/30 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-200" />
                  </Link>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">
              fbpzahid4830@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Zahid Marwat. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            using Next.js & Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
