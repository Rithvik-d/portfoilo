'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Phone, MapPin, Sparkles, Code, Database } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-dark-900">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={mounted ? { y, opacity } : {}}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Greeting */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </motion.div>

              {/* Name and Title */}
              <div className="space-y-4">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="text-primary-600 dark:text-primary-400">
                    Rithvik
                  </span>
                </motion.h1>
                
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  Full Stack Developer & Data Scientist
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              >
                I create innovative solutions that bridge the gap between data science and 
                software development. Currently pursuing my Master's in Data Science with a 
                perfect 4.0 GPA while building impactful applications.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>201-705-0625</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>dhanpalr1@montclair.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Harrison, NJ</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#projects"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/dhanpal-rithvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="https://github.com/rithvik-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="/blog"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                  aria-label="Blog"
                >
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative lg:flex justify-center hidden"
            >
              <div className="relative">
                {/* Main Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center shadow-2xl"
                >
                  {/* Profile Initials */}
                  <div className="text-8xl font-bold text-primary-600 dark:text-primary-400">
                    DR
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-dark-800 rounded-xl shadow-lg flex items-center justify-center">
                    <Code className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-dark-800 rounded-xl shadow-lg flex items-center justify-center">
                    <Database className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <div className="absolute top-8 -left-8 w-12 h-12 bg-white dark:bg-dark-800 rounded-full shadow-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary-600" />
                  </div>
                </motion.div>

                {/* Background Decoration */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full blur-3xl opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full blur-2xl opacity-40"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary-600 rounded-full mx-auto flex justify-center cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
