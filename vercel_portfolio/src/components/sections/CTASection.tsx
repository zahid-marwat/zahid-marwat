import Link from 'next/link'
import { ArrowRight, Mail, Calendar } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary-500/20 via-blue-500/20 to-purple-500/20 border border-white/10 text-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready To Take Your Digital Presence{' '}
                <span className="gradient-text">To The Next Level?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate to transform your ideas into innovative AI solutions and 
                scalable applications that drive real business impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="https://calendly.com/zahid-marwat/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Call</span>
                </Link>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
                  <p className="text-gray-400 text-sm">Quick turnaround without compromising quality</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl mb-3">🔧</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                  <p className="text-gray-400 text-sm">Tailored to your specific business needs</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-400 text-sm">Ongoing support and maintenance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
              <p className="text-gray-400 mb-4">Drop me a line for project inquiries</p>
              <Link
                href="mailto:fbpzahid4830@gmail.com"
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
              >
                fbpzahid4830@gmail.com
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
              <p className="text-gray-400 mb-4">Let's discuss your project in detail</p>
              <Link
                href="https://calendly.com/zahid-marwat/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Book a meeting
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
