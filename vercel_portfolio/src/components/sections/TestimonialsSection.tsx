const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO at TechVision',
      company: 'TechVision',
      content: 'Working with Zahid was seamless and highly productive. His attention to detail and commitment to our project\'s success were exceptional. His computer vision solutions transformed our business operations.',
      avatar: 'SJ',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CTO at DataFlow',
      company: 'DataFlow',
      content: 'Zahid\'s expertise in AI and machine learning is outstanding. He delivered a complex computer vision system that exceeded our expectations. His technical skills and problem-solving abilities are top-notch.',
      avatar: 'MC',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager at InnovateLab',
      company: 'InnovateLab',
      content: 'Zahid brought innovative solutions to our computer vision challenges. His ability to translate complex AI concepts into practical applications is remarkable. Highly recommended for any AI project.',
      avatar: 'ER',
      rating: 5
    },
    {
      name: 'David Kim',
      position: 'Founder at SmartSystems',
      company: 'SmartSystems',
      content: 'The AI-powered system Zahid developed for us has significantly improved our operational efficiency. His deep understanding of machine learning and professional approach made the project a success.',
      avatar: 'DK',
      rating: 5
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Real feedback from founders and teams I've had the privilege to collaborate with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-4xl text-primary-400 mb-4">"</div>
                <p className="text-gray-300 leading-relaxed italic">
                  {testimonial.content}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <div key={starIndex} className="text-yellow-400 text-lg">⭐</div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-primary-400 text-sm">{testimonial.position}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Companies Worked With */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Trusted by <span className="gradient-text">Innovative Companies</span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {['Airloop', 'TechVision', 'DataFlow', 'InnovateLab', 'SmartSystems'].map((company, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 rounded-lg border border-white/10"
              >
                <span className="text-gray-400 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
