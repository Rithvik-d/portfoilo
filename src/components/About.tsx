'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Target } from 'lucide-react'

const About = () => {
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

  const education = [
    {
      degree: 'Master of Science in Data Science',
      school: 'Montclair State University (MSU)',
      location: 'Montclair, NJ',
      graduation: 'Expected Dec 2025',
      gpa: '4.0/4.0',
      coursework: [
        'Advanced Database',
        'Statistics for Data Science',
        'Deep Learning',
        'Data Mining',
        'Big Data Analytics',
        'Computer Algorithms & Analysis',
        'Machine Learning'
      ]
    },
    {
      degree: 'Bachelor of Technology in Electrical and Electronic Engineering',
      school: 'St. Martin\'s Engineering College',
      location: 'Hyderabad, India',
      graduation: 'Aug 2021',
      gpa: '3.3/4.0',
      coursework: []
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m a passionate <strong className="text-primary-600">Data Scientist</strong> and <strong className="text-primary-600">Full Stack Developer </strong> 
                   currently pursuing my Master&apos;s degree at Montclair State University with a perfect 4.0 GPA. 
                  My journey combines technical expertise with a strong focus on creating user-centered solutions.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With experience in both <strong>academic tutoring</strong> and <strong>professional software development </strong>, 
                  I bring a unique perspective to problem-solving. I&apos;ve successfully tutored over 200+ students 
                  while maintaining excellent academic performance and delivering end-to-end projects.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My expertise spans across <strong>Python, Java, React, Spring Boot</strong>, and various data science tools. 
                  I&apos;m particularly passionate about building applications that make complex data accessible 
                  to non-technical users through intuitive interfaces.
                </p>
              </div>

              {/* Key Achievements */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 dark:bg-dark-800 rounded-lg">
                  <Award className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-600">4.0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">GPA</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-dark-800 rounded-lg">
                  <Target className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-600">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Students Tutored</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary-600" />
                Education
              </h3>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 font-medium">{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{edu.graduation}</div>
                      <div className="text-lg font-bold text-primary-600">{edu.gpa}</div>
                    </div>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        Relevant Coursework:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
