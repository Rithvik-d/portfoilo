'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Palette, 
  Cloud, 
  GitBranch, 
  Shield,
  Cpu,
  Globe
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillCategories = [
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'Dashboard Design', 'Usability Testing']
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML', 'CSS', 'React', 'Angular']
    },
    {
      title: 'Programming & Data',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      skills: ['Python', 'Java', 'SQL', 'R', 'Graph-RAG', 'Semantic Search', 'Vector Databases']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Cpu,
      color: 'from-purple-500 to-violet-500',
      skills: ['Spring (Core, MVC)', 'Spring Boot', 'Flask', 'Dash']
    },
    {
      title: 'Tools & Platforms',
      icon: Cloud,
      color: 'from-orange-500 to-amber-500',
      skills: ['Docker', 'Jenkins', 'Git', 'AWS', 'AWS Bedrock', 'SageMaker', 'Amazon Titan', 'Databricks', 'Spark', 'Tableau', 'Google Colab', 'VS Code', 'Eclipse']
    },
    {
      title: 'Concepts & Methodologies',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      skills: ['OOP', 'REST APIs', 'Microservices', 'CI/CD', 'Agile', 'Identity Management (RBAC, OAuth2.0)', 'TDD', 'Distributed Computing', 'Model Benchmarking', 'Cost Optimization']
    },
    {
      title: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      skills: ['Generative AI', 'Stable Diffusion', 'LLM Evaluation', 'Real-time Inference', 'Model Tuning', 'GenAI Pipelines', 'Marketing AI']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
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
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive range of technical skills spanning from design to deployment
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * skillIndex }}
                      className="flex items-center"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I believe in staying current with the latest technologies and best practices. 
                My approach combines hands-on experience with continuous learning through 
                courses, projects, and real-world applications. I'm always excited to 
                explore new tools and frameworks that can improve the quality and efficiency 
                of my work.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900 rounded-full">
                  <GitBranch className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Version Control
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900 rounded-full">
                  <Database className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Data Management
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900 rounded-full">
                  <Shield className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Security Best Practices
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
