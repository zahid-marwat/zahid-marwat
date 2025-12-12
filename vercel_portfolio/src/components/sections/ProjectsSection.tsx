import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Face Recognition System',
      description: 'Real-time face detection and recognition system using deep learning for automated attendance and security applications.',
      image: '/assets/project-face-recognition.jpg',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite'],
      features: [
        'Real-time face detection with 99% accuracy',
        'Multi-face recognition capabilities',
        'Web-based dashboard for management',
        'RESTful API for integration'
      ],
      liveUrl: 'https://face-recognition-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/face-recognition-system',
      category: 'Computer Vision'
    },
    {
      title: 'Traffic Monitoring System',
      description: 'Intelligent traffic monitoring and analysis system using computer vision to detect vehicles, count traffic, and analyze patterns.',
      image: '/assets/project-traffic-monitoring.jpg',
      technologies: ['Python', 'YOLO', 'OpenCV', 'FastAPI', 'PostgreSQL'],
      features: [
        'Vehicle detection and classification',
        'Real-time traffic counting',
        'Speed estimation and monitoring',
        'Analytics dashboard with insights'
      ],
      liveUrl: 'https://traffic-monitor-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/traffic-monitoring-system',
      category: 'Computer Vision'
    },
    {
      title: 'Modern Portfolio Website',
      description: 'Responsive portfolio website built with Next.js, featuring modern design, smooth animations, and optimized performance.',
      image: '/assets/project-portfolio.jpg',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Modern responsive design',
        'Smooth animations and transitions',
        'SEO optimized',
        'Fast loading performance'
      ],
      liveUrl: 'https://zahid-marwat.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/portfolio-website',
      category: 'Web Development'
    }
  ]

  const categories = ['All', 'Computer Vision', 'AI & ML', 'Web Development']

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Explore my portfolio of innovative AI solutions and web applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-blue-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-800/50"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {project.category === 'Computer Vision' ? '👁️' : 
                       project.category === 'AI & ML' ? '🧠' : '💻'}
                    </div>
                    <span className="text-primary-400 text-sm font-medium">{project.category}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
