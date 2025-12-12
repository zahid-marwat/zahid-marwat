import Link from 'next/link'
import { Calendar, MapPin, ExternalLink, Award, TrendingUp, Users, Code } from 'lucide-react'

export default function ExperiencePage() {
  const experience = [
    {
      company: 'Airloop',
      position: 'Senior Computer Vision Engineer',
      duration: '2022 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading computer vision projects and AI model development. Responsible for designing and implementing advanced computer vision solutions for various industry applications.',
      achievements: [
        'Developed real-time object detection systems with 95% accuracy',
        'Led a team of 5 engineers in AI project development',
        'Improved model inference speed by 40% through optimization techniques',
        'Implemented MLOps pipelines reducing deployment time by 60%',
        'Successfully delivered 15+ AI projects across different domains',
        'Mentored junior developers and established best practices'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'AWS', 'Kubernetes', 'MLOps'],
      companyUrl: 'https://airloop.io',
      companyLogo: '/assets/airloop-logo.png'
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Information Security',
      institution: 'National University of Sciences and Technology (NUST)',
      duration: '2024 - 2026',
      location: 'Islamabad, Pakistan',
      status: 'Current',
      description: 'Specialized in information security, secure software development, and AI applications in cybersecurity. Research focus on adversarial attacks in computer vision systems.',
      coursework: [
        'Advanced Cryptography',
        'Network Security',
        'Secure Software Development',
        'AI Security and Privacy',
        'Digital Forensics',
        'Risk Assessment and Management'
      ],
      gpa: 'Current CGPA: 3.8/4.0',
      logo: '/assets/nust-logo.png',
      website: 'https://nust.edu.pk'
    },
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'Ghulam Ishaq Khan Institute (GIKI)',
      duration: '2018 - 2022',
      location: 'Topi, Pakistan',
      status: 'Completed',
      description: 'Focus on electrical systems, software development, and data structures. Graduated with distinction and completed final year project on computer vision applications.',
      coursework: [
        'Digital Signal Processing',
        'Computer Programming',
        'Data Structures and Algorithms',
        'Control Systems',
        'Machine Learning',
        'Software Engineering'
      ],
      gpa: 'CGPA: 3.6/4.0',
      logo: '/assets/giki-logo.png',
      website: 'https://giki.edu.pk'
    }
  ]

  const certifications = [
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2023',
      description: 'Demonstrated proficiency in building and training neural networks using TensorFlow',
      credentialId: 'TF-2023-CV-001',
      skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Computer Vision']
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Expertise in designing distributed systems on AWS platform',
      credentialId: 'AWS-SAA-2023-001',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Scalability']
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: '2022',
      description: 'Comprehensive understanding of deep learning concepts and applications',
      credentialId: 'DL-SPEC-2022-001',
      skills: ['Deep Learning', 'CNNs', 'RNNs', 'PyTorch', 'Keras']
    },
    {
      title: 'Computer Vision Nanodegree',
      issuer: 'Udacity',
      date: '2022',
      description: 'Advanced computer vision techniques and real-world applications',
      credentialId: 'UD-CV-2022-001',
      skills: ['OpenCV', 'Image Processing', 'Object Detection', 'Face Recognition']
    }
  ]

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'MATLAB'],
      icon: Code
    },
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'YOLO'],
      icon: TrendingUp
    },
    {
      category: 'Web Development',
      items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'Django'],
      icon: Code
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'MLOps'],
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Professional journey, education, and technical expertise
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Professional <span className="gradient-text">Experience</span>
            </h2>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                          <div className="flex items-center space-x-4 text-primary-400 mb-2">
                            <Link
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-primary-300 transition-colors duration-200 flex items-center space-x-2"
                            >
                              <span>{exp.company}</span>
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                            <span>•</span>
                            <span>{exp.type}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🏢</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-dark-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Education</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white pr-4">{edu.degree}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          edu.status === 'Current' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {edu.status}
                        </div>
                      </div>
                      <Link
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-200 flex items-center space-x-2 mb-2"
                      >
                        <span>{edu.institution}</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{edu.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.slice(0, 4).map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                            >
                              {course}
                            </span>
                          ))}
                          {edu.coursework.length > 4 && (
                            <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                              +{edu.coursework.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-400">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Certifications & <span className="gradient-text">Credentials</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-primary-400 font-semibold text-sm mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 ml-4">
                      <Award className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-dark-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Technical <span className="gradient-text">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
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
              Interested in collaborating? Let's discuss how my experience can help bring your projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                <span>Get In Touch</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>View My Work</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
