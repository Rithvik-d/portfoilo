'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">
                Dhanpal Rithvik
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Full Stack Developer & Data Scientist passionate about creating 
                innovative solutions that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/#about"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  About
                </a>
                <a
                  href="/#skills"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Skills
                </a>
                <a
                  href="/#experience"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Experience
                </a>
                <a
                  href="/#projects"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Projects
                </a>
                <a
                  href="/#contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Social Links and Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rithvik-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhanpal-rithvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:dhanpalr1@montclair.edu"
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>201-705-0625</p>
                <p>dhanpalr1@montclair.edu</p>
                <p>Harrison, NJ 07029</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-dark-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="h-4 w-4 text-red-500" />
                </motion.div>
                <span>by Dhanpal Rithvik</span>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-400">
                  © 2024 Dhanpal Rithvik. All rights reserved.
                </p>
                <motion.button
                  onClick={scrollToTop}
                  className="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
