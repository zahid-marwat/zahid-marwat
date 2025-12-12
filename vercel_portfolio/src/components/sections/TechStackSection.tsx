const TechStackSection = () => {
  const technologies = [
    {
      name: 'Python',
      icon: '🐍',
      category: 'Programming',
      proficiency: 95
    },
    {
      name: 'TensorFlow',
      icon: '🧠',
      category: 'AI/ML',
      proficiency: 90
    },
    {
      name: 'PyTorch',
      icon: '🔥',
      category: 'AI/ML',
      proficiency: 85
    },
    {
      name: 'OpenCV',
      icon: '👁️',
      category: 'Computer Vision',
      proficiency: 92
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      category: 'Programming',
      proficiency: 85
    },
    {
      name: 'React',
      icon: '⚛️',
      category: 'Frontend',
      proficiency: 80
    },
    {
      name: 'Next.js',
      icon: '🔺',
      category: 'Frontend',
      proficiency: 85
    },
    {
      name: 'Node.js',
      icon: '🟢',
      category: 'Backend',
      proficiency: 75
    },
    {
      name: 'Docker',
      icon: '🐳',
      category: 'DevOps',
      proficiency: 80
    },
    {
      name: 'AWS',
      icon: '☁️',
      category: 'Cloud',
      proficiency: 70
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      category: 'Database',
      proficiency: 75
    },
    {
      name: 'Git',
      icon: '📝',
      category: 'Tools',
      proficiency: 90
    }
  ]

  const categories = [...new Set(technologies.map(tech => tech.category))]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Modern Tech Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Technologies and tools I use to build innovative solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-sm text-primary-400 mb-3">{tech.category}</p>
              
              {/* Proficiency Bar */}
              <div className="w-full bg-dark-700 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${tech.proficiency}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-400">{tech.proficiency}%</span>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const categoryTechs = technologies.filter(tech => tech.category === category)
            const avgProficiency = Math.round(
              categoryTechs.reduce((sum, tech) => sum + tech.proficiency, 0) / categoryTechs.length
            )
            
            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 text-center"
              >
                <h4 className="text-sm font-semibold text-primary-400 mb-1">{category}</h4>
                <p className="text-xs text-gray-400">{categoryTechs.length} tools</p>
                <div className="text-lg font-bold text-white mt-2">{avgProficiency}%</div>
              </div>
            )
          })}
        </div>

        {/* Code Showcase Preview */}
        <div className="mt-16 p-8 rounded-2xl bg-dark-800/50 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Code <span className="gradient-text">Showcase</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="code-block">
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary-400 text-sm font-medium">Computer Vision</span>
                <span className="text-xs text-gray-400">Python • OpenCV</span>
              </div>
              <pre className="text-sm">
{`import cv2
import numpy as np

def detect_objects(image_path):
    """Real-time object detection"""
    net = cv2.dnn.readNet('yolo.weights')
    image = cv2.imread(image_path)
    
    # Process image
    blob = cv2.dnn.blobFromImage(
        image, 0.00392, (416, 416), 
        (0, 0, 0), True, crop=False
    )
    
    net.setInput(blob)
    outputs = net.forward()
    
    return process_outputs(outputs)`}
              </pre>
            </div>
            
            <div className="code-block">
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary-400 text-sm font-medium">AI Model Training</span>
                <span className="text-xs text-gray-400">Python • TensorFlow</span>
              </div>
              <pre className="text-sm">
{`import tensorflow as tf
from tensorflow.keras import layers

def build_cnn_model(input_shape, num_classes):
    """Build CNN for image classification"""
    model = tf.keras.Sequential([
        layers.Conv2D(32, 3, activation='relu'),
        layers.MaxPooling2D(),
        layers.Conv2D(64, 3, activation='relu'),
        layers.MaxPooling2D(),
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dense(num_classes, activation='softmax')
    ])
    
    return model`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
