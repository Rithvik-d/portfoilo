'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Database, 
  Globe, 
  Shield, 
  ShoppingCart,
  BarChart3,
  Heart,
  MapPin,
  Lock,
  Brain,
  Sparkles,
  Image,
  Zap
} from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const projects = [
    {
      title: 'Enhanced Parallel & Distributed Computing via Graph-RAG',
      description: 'Implemented a distributed Graph-RAG architecture on CDER learning materials to achieve sub-second semantic retrieval. Research collaboration focusing on scalable knowledge retrieval systems for parallel and distributed computing education.',
      image: '/api/placeholder/600/400',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Python', 'Graph-RAG', 'Distributed Computing', 'CDER', 'Semantic Search', 'Vector Databases'],
      features: [
        'Distributed Graph-RAG architecture',
        'Sub-second semantic retrieval',
        'Research collaboration project',
        'Scalable knowledge retrieval system'
      ],
      category: 'AI Research',
      github: 'https://github.com/Rithvik-d/Enhanced-Parallel-and-Distributed-Computing-Learning-through-Graph-RAG',
      demo: '#'
    },
    {
      title: 'HPC Tutor Agent',
      description: 'An intelligent tutoring agent for High Performance Computing (HPC) concepts. Uses AI/ML techniques to provide personalized learning experiences and help students understand complex HPC topics.',
      image: '/api/placeholder/600/400',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      technologies: ['Python', 'AI/ML', 'NLP', 'Educational Technology', 'HPC'],
      features: [
        'Intelligent tutoring system for HPC',
        'Personalized learning experiences',
        'AI-powered concept explanation',
        'Interactive learning interface'
      ],
      category: 'Educational AI',
      github: 'https://github.com/Rithvik-d/HPCTutorAgent',
      demo: '#'
    },
    {
      title: 'PCOS Prediction System - MLOps Project',
      description: 'A comprehensive MLOps project for PCOS detection using machine learning. Features Docker containerization, RESTful API, web interface, and multiple ML models (Random Forest, SVM, Logistic Regression) with ~92% accuracy. Includes model versioning, health monitoring, and production-ready deployment.',
      image: '/api/placeholder/600/400',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      technologies: ['Python', 'Flask', 'Machine Learning', 'Docker', 'MLOps', 'Scikit-learn', 'REST API'],
      features: [
        'Multiple ML models with ~92% accuracy',
        'Docker containerization for deployment',
        'RESTful API for programmatic access',
        'User-friendly web interface for non-technical users',
        'Model versioning and health monitoring'
      ],
      category: 'Healthcare Tech',
      github: 'https://github.com/Rithvik-d/PCOS-Prediction-System---MLOps-Project',
      demo: '#'
    },
    {
      title: 'BERT-NER Medical Entity Recognition',
      description: 'Medical entity recognition system using BERT (Bidirectional Encoder Representations from Transformers) for extracting and classifying medical entities from text. Implements state-of-the-art NLP techniques for healthcare document analysis.',
      image: '/api/placeholder/600/400',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Python', 'BERT', 'NLP', 'Transformers', 'PyTorch/TensorFlow', 'Medical NLP'],
      features: [
        'BERT-based named entity recognition',
        'Medical entity extraction and classification',
        'State-of-the-art NLP for healthcare',
        'Document analysis and processing'
      ],
      category: 'NLP / Healthcare AI',
      github: 'https://github.com/Rithvik-d/BERT-NER-Medical-Entity-Recognition-',
      demo: '#'
    },
    {
      title: 'Municipal Vehicle Fleet Analysis',
      description: 'Data analysis project for municipal vehicle fleet management. Analyzes vehicle usage patterns, maintenance schedules, fuel efficiency, and operational costs to optimize fleet operations and reduce expenses.',
      image: '/api/placeholder/600/400',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['Python', 'Data Analysis', 'Pandas', 'Visualization', 'Statistical Analysis'],
      features: [
        'Vehicle usage pattern analysis',
        'Maintenance schedule optimization',
        'Fuel efficiency tracking',
        'Cost analysis and reporting'
      ],
      category: 'Data Analysis',
      github: 'https://github.com/Rithvik-d/municipal-vehicle-fleet-analysis',
      demo: '#'
    },
    {
      title: 'Global Earthquake Analysis Dashboard',
      description: 'Real-time global earthquake monitoring dashboard with interactive geospatial visualization. Built with Plotly Dash, Folium, and GeoPandas for comprehensive earthquake data analysis and visualization.',
      image: '/api/placeholder/600/400',
      icon: MapPin,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Python', 'Plotly Dash', 'Folium', 'GeoPandas', 'REST APIs', 'Data Visualization'],
      features: [
        'Real-time earthquake data visualization',
        'Interactive geospatial filtering',
        'Responsive dashboard design',
        'REST API integration for live data'
      ],
      category: 'Data Visualization',
      github: 'https://github.com/Rithvik-d/global_earthquake_Analysis',
      demo: '#'
    },
    {
      title: 'Tax Tracking System',
      description: 'A comprehensive tax tracking and management system for personal or business tax management. Features tax calculation, tracking, reporting, and compliance management with user-friendly interface.',
      image: '/api/placeholder/600/400',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      technologies: ['Full Stack', 'Database', 'Tax Management', 'Financial Software'],
      features: [
        'Tax calculation and tracking',
        'Compliance management',
        'Financial reporting',
        'User-friendly interface'
      ],
      category: 'Financial Software',
      github: 'https://github.com/Rithvik-d/TAX-TRACKING-FINAL---PROJECT-',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              A showcase of my work spanning data science, web development, and full-stack applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white dark:bg-dark-800 text-xs font-medium rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects Note */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Projects Available
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                These are just a few highlights from my portfolio. I have additional projects 
                including machine learning models, web applications, and data analysis tools 
                that demonstrate my diverse skill set and passion for problem-solving.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/rithvik-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  View All Projects on GitHub
                </a>
                <a
                  href="#contact"
                  className="btn-secondary flex items-center gap-2"
                >
                  <BarChart3 className="h-5 w-5" />
                  Discuss Project Ideas
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
