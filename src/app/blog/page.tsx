'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'My Journey in Data Science: From Electrical Engineering to AI',
      excerpt: 'Reflecting on my transition from electrical engineering to data science and the exciting opportunities ahead.',
      content: 'Coming from an electrical engineering background, my journey into data science has been both challenging and rewarding. The mathematical foundation from my engineering studies provided a solid base for understanding machine learning algorithms and statistical concepts...',
      author: 'Dhanpal Rithvik',
      date: '2024-12-15',
      readTime: '5 min read',
      tags: ['Data Science', 'Career', 'Machine Learning'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Accessible Healthcare Applications: PCOS Detection Project',
      excerpt: 'How I designed a user-friendly interface for medical predictions that non-technical users could easily understand.',
      content: 'Creating the PCOS Detection web application taught me the importance of user-centered design in healthcare technology. The challenge wasn\'t just building an accurate model, but making it accessible to people who needed it most...',
      author: 'Dhanpal Rithvik',
      date: '2024-12-10',
      readTime: '7 min read',
      tags: ['Healthcare', 'UI/UX', 'Python', 'Machine Learning'],
      featured: false
    },
    {
      id: 3,
      title: 'Tutoring 200+ Students: Lessons in Teaching and Communication',
      excerpt: 'What I learned about effective teaching and the impact of clear communication in computer science education.',
      content: 'As a Graduate Assistant at MSU, I\'ve had the privilege of tutoring over 200 students in various computer science subjects. This experience has taught me that teaching is not just about knowing the material, but about understanding how people learn...',
      author: 'Dhanpal Rithvik',
      date: '2024-12-05',
      readTime: '6 min read',
      tags: ['Teaching', 'Education', 'Communication'],
      featured: false
    },
    {
      id: 4,
      title: 'Real-time Data Visualization: Building the Earthquake Dashboard',
      excerpt: 'Creating an interactive dashboard for global earthquake monitoring using Plotly Dash and geospatial data.',
      content: 'The Global Earthquake Monitoring Dashboard project combined my interests in data visualization and real-time systems. Using Plotly Dash, Folium, and GeoPandas, I created an interactive platform that makes complex geospatial data accessible...',
      author: 'Dhanpal Rithvik',
      date: '2024-11-28',
      readTime: '8 min read',
      tags: ['Data Visualization', 'Python', 'Geospatial', 'Dashboard'],
      featured: false
    },
    {
      id: 5,
      title: 'Security First: Building RBAC Systems for Enterprise Applications',
      excerpt: 'My experience developing secure identity management systems and the importance of proper access control.',
      content: 'At Medplus, I was responsible for developing and securing user authentication systems across multiple internal applications. This experience taught me that security isn\'t just about encryption, but about designing systems that are both secure and usable...',
      author: 'Dhanpal Rithvik',
      date: '2024-11-20',
      readTime: '6 min read',
      tags: ['Security', 'Java', 'Spring Boot', 'RBAC'],
      featured: false
    }
  ]

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-16">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              My Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Thoughts, experiences, and insights from my journey in data science, 
              software development, and education.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Post</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="card p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{post.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* All Posts */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{post.author}</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Get notified when I publish new posts about data science, 
                software development, and my learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
