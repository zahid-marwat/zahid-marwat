import Image from 'next/image'
import Link from 'next/link'
import { Download, ExternalLink, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react'

export default function AboutPage() {
  const skills = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'TensorFlow', level: 90, category: 'AI/ML' },
    { name: 'PyTorch', level: 85, category: 'AI/ML' },
    { name: 'OpenCV', level: 92, category: 'Computer Vision' },
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
  ]

  const education = [
    {
      degree: 'Master of Science in Information Security',
      institution: 'National University of Sciences and Technology (NUST)',
      duration: '2024 - 2026',
      status: 'Current',
      description: 'Specialized in information security, secure software development, and AI applications in cybersecurity.',
      logo: '/assets/nust-logo.png'
    },
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'Ghulam Ishaq Khan Institute (GIKI)',
      duration: '2018 - 2022',
      status: 'Completed',
      description: 'Focus on electrical systems, software development, and data structures. Graduated with distinction.',
      logo: '/assets/giki-logo.png'
    }
  ]

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve complex problems'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and open-source community contributions'
    },
    {
      icon: '📈',
      title: 'Continuous Learning',
      description: 'Staying updated with the latest in AI, ML, and computer vision research'
    },
    {
      icon: '❤️',
      title: 'Impact',
      description: 'Creating solutions that make a real difference in people\'s lives'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Learn more about my journey, experience, and passion for AI & Computer Vision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
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

            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                My Journey in <span className="gradient-text">Technology</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Computer Vision Engineer and AI/ML Enthusiast with a strong 
                background in software development. Currently pursuing my Master's in Information 
                Security at NUST, I love working on cutting-edge projects that push the boundaries 
                of what's possible with artificial intelligence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in technology began with a fascination for how machines can "see" 
                and understand the world. This led me to specialize in computer vision, where 
                I've developed expertise in deep learning, image processing, and AI model deployment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently working as a Senior Computer Vision Engineer at Airloop, I lead teams 
                in developing innovative AI solutions that solve real-world problems.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/20 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span className="text-primary-400 font-semibold">Location</span>
                  </div>
                  <div className="text-white">Pakistan</div>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold">Experience</span>
                  </div>
                  <div className="text-white">3+ Years</div>
                </div>
              </div>

              {/* CV Download */}
              <div className="pt-6">
                <Link
                  href="/assets/Zahid_Marwat_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-300">
              Comprehensive overview of my technical expertise and capabilities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-primary-400 font-medium">{skill.category}</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-gray-300">
              Academic background and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {edu.status}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-400 mb-2">
                      <GraduationCap className="w-5 h-5" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{edu.duration}</p>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Values & <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-lg text-gray-300">
              The principles that guide my work and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to bring your AI and computer vision projects to life? Let's discuss how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>View My Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
