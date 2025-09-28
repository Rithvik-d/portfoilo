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
      description: 'Implemented a distributed Graph-RAG architecture on CDER learning materials to achieve sub-second semantic retrieval. Research collaboration with Prof. Zhu and Prof. Wang focusing on scalable knowledge retrieval systems.',
      image: '/api/placeholder/600/400',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Python', 'Graph-RAG', 'Distributed Computing', 'CDER', 'Semantic Search', 'Vector Databases'],
      features: [
        'Distributed Graph-RAG architecture implementation',
        'Sub-second semantic retrieval performance',
        'Research collaboration with academic faculty',
        'Scalable knowledge retrieval system'
      ],
      category: 'AI Research',
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Stylist – Personalized Outfit Recommendations',
      description: 'Built a GenAI pipeline to recommend clothing outfits in real time using AWS Bedrock, SageMaker, and Stable Diffusion. Optimized inference latency by 25% through advanced model tuning and performance optimization.',
      image: '/api/placeholder/600/400',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
      technologies: ['AWS Bedrock', 'SageMaker', 'Stable Diffusion', 'GenAI', 'Python', 'Real-time Inference'],
      features: [
        'Real-time personalized outfit recommendations',
        'GenAI pipeline with AWS Bedrock integration',
        '25% inference latency optimization',
        'Stable Diffusion for visual generation'
      ],
      category: 'Generative AI',
      github: '#',
      demo: '#'
    },
    {
      title: 'Amazon Titan Image Generator – Visual Ads for Octank Dog Food',
      description: 'Generated high-quality marketing creatives using Amazon Titan Image Generator and evaluated model cost/performance trade-offs for production deployment. Focused on optimizing visual content generation for marketing campaigns.',
      image: '/api/placeholder/600/400',
      icon: Image,
      color: 'from-orange-500 to-red-500',
      technologies: ['Amazon Titan', 'Image Generation', 'Marketing AI', 'Cost Optimization', 'Production Deployment'],
      features: [
        'High-quality marketing creative generation',
        'Cost/performance trade-off analysis',
        'Production deployment optimization',
        'Marketing campaign automation'
      ],
      category: 'Marketing AI',
      github: '#',
      demo: '#'
    },
    {
      title: 'AWS Bedrock Model Evaluation – AI Workflow Optimization',
      description: 'Benchmarked Bedrock LLMs (Claude, Titan, Llama) to design a cost-efficient AI inference strategy, reducing compute costs by 20%. Comprehensive evaluation of multiple language models for optimal performance and cost balance.',
      image: '/api/placeholder/600/400',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['AWS Bedrock', 'Claude', 'Titan', 'Llama', 'Model Benchmarking', 'Cost Optimization'],
      features: [
        'Multi-LLM benchmarking and evaluation',
        '20% compute cost reduction achieved',
        'Cost-efficient AI inference strategy',
        'Production-ready optimization framework'
      ],
      category: 'AI Optimization',
      github: '#',
      demo: '#'
    },
    {
      title: 'Food Inspection Analysis Using Association Rule Mining',
      description: 'Applied the Apriori algorithm to uncover associations between inspection results, facility types, and risk levels using data from the City of Chicago Data Portal. Generated association rules to identify frequent patterns and insights for improving food safety.',
      image: '/api/placeholder/600/400',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['Python', 'Apriori Algorithm', 'Data Mining', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Association rule mining using Apriori algorithm',
        'Analysis of Chicago food inspection data',
        'Pattern recognition for food safety insights',
        'Data visualization and reporting'
      ],
      category: 'Data Science',
      github: '#',
      demo: '#'
    },
    {
      title: 'PCOS Detection & Analysis Web Application',
      description: 'Designed a web interface that made medical predictions accessible to non-technical users. Focused on interface clarity, user empathy, and iterative testing to create an intuitive healthcare application.',
      image: '/api/placeholder/600/400',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      technologies: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Medical prediction interface for non-technical users',
        'User-centered design with empathy focus',
        'Iterative testing and usability improvements',
        'Accessible healthcare technology'
      ],
      category: 'Healthcare Tech',
      github: '#',
      demo: '#'
    },
    {
      title: 'Global Earthquake Monitoring Dashboard',
      description: 'Designed and deployed a real-time dashboard with interactive geospatial filters using Plotly Dash, Folium, and GeoPandas. Focused on usability and responsiveness, enabling users to quickly filter and interpret earthquake data.',
      image: '/api/placeholder/600/400',
      icon: MapPin,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Python', 'Plotly Dash', 'Folium', 'GeoPandas', 'REST APIs', 'Pandas'],
      features: [
        'Real-time earthquake data visualization',
        'Interactive geospatial filtering',
        'Responsive dashboard design',
        'REST API integration'
      ],
      category: 'Data Visualization',
      github: '#',
      demo: '#'
    },
    {
      title: 'Access Control System for Internal Applications',
      description: 'Developed a secure identity management system for 10+ internal tools using RBAC and password encryption. Enabled seamless user onboarding and access provisioning with minimal manual intervention.',
      image: '/api/placeholder/600/400',
      icon: Lock,
      color: 'from-purple-500 to-violet-500',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'Docker', 'RBAC', 'OAuth2.0'],
      features: [
        'Role-based access control (RBAC)',
        'Password encryption and security',
        'Multi-application integration',
        'Automated user provisioning'
      ],
      category: 'Security',
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce Website Development',
      description: 'Built a full-stack clothing e-commerce site using Java/Spring Boot and React, with front-to-back integration. Integrated features such as product listing, shopping cart, and order processing.',
      image: '/api/placeholder/600/400',
      icon: ShoppingCart,
      color: 'from-orange-500 to-amber-500',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'JavaScript'],
      features: [
        'Full-stack e-commerce platform',
        'Product catalog and search',
        'Shopping cart functionality',
        'Order processing system'
      ],
      category: 'E-commerce',
      github: '#',
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my work spanning data science, web development, and full-stack applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
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
