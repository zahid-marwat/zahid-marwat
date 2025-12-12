import { Globe, Users, TrendingUp, Heart } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Flexibility',
      description: 'Available across time zones for seamless worldwide collaboration.'
    },
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Building trust through transparent communication and collaboration.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Creating robust architectures that grow with your business needs.'
    },
    {
      icon: Heart,
      title: 'Passionate Work',
      description: 'Dedicated to delivering excellence in every project I undertake.'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a passionate Computer Vision Engineer and AI/ML Enthusiast with a strong 
            background in software development. Currently pursuing my Master's in Information 
            Security at NUST, I love working on cutting-edge projects that push the boundaries 
            of what's possible with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20"></div>
              <div className="absolute inset-0 bg-dark-800/50"></div>
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Innovation Driven</h3>
                  <p className="text-gray-300">Always exploring new technologies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              My Journey in <span className="gradient-text">Technology</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My journey in technology began with a fascination for how machines can "see" 
              and understand the world. This led me to specialize in computer vision, where 
              I've developed expertise in deep learning, image processing, and AI model deployment.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently working as a Senior Computer Vision Engineer at Airloop, I lead teams 
              in developing innovative AI solutions that solve real-world problems. My academic 
              background in Electrical Engineering from GIKI, combined with my ongoing Master's 
              in Information Security at NUST, provides me with a unique perspective on secure 
              and scalable AI systems.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/20">
                <div className="text-2xl font-bold text-primary-400">3+</div>
                <div className="text-sm text-gray-400">Years in AI/ML</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
