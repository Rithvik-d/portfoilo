'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Users, 
  Code, 
  Shield,
  GraduationCap,
  Award
} from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      title: 'Graduate Assistant & Supplemental Instructor',
      company: 'Center for Academic Success and Tutoring (CAST), MSU',
      location: 'Montclair, NJ',
      period: 'Oct 2024 - Present',
      type: 'Education',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Provide tutoring support for CSIT courses, including Python programming',
        'Deliver one-on-one tutoring for Python, Java, Data Structures, Web Development, and Database Systems',
        'Assist students with problem-solving exercises, debugging, and clarifying doubts',
        'Serve as Supplemental Instructor for Python, guiding students through programming challenges',
        'Successfully tutored over 200+ students across various computer science disciplines'
      ],
      technologies: ['Python', 'Java', 'Data Structures', 'Web Development', 'Database Systems']
    },
    {
      title: 'Full Stack Application Developer',
      company: 'Optical Health Solution Pvt Ltd (Medplus)',
      location: 'Hyderabad, India',
      period: 'Jun 2022 - Dec 2023',
      type: 'Development',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Developed applications and micro-services using Java/J2EE, Spring, and various frontend frameworks',
        'Developed and secured user authentication & access control systems (RBAC) across internal applications',
        'Designed secure APIs to manage sensitive user credentials with encryption and audit logging',
        'Contributed to Medplus e-commerce platform for medicines, overseeing front-end to back-end integration',
        'Maintained and developed applications for diagnostics, finance, and optical services',
        'Implemented CI/CD pipelines using Docker and Jenkins'
      ],
      technologies: ['Java/J2EE', 'Spring Boot', 'React', 'Angular', 'Docker', 'Jenkins', 'RBAC', 'OAuth2.0']
    },
    {
      title: 'Student Production Assistant',
      company: 'Office of Student Belonging (OSB), MSU',
      location: 'Montclair, NJ',
      period: 'Aug 2024 - Oct 2024',
      type: 'Administration',
      icon: Users,
      color: 'from-purple-500 to-violet-500',
      achievements: [
        'Organized and managed orientation activities and events for new students',
        'Promoted engagement and created a welcoming environment for incoming students',
        'Collaborated with team members to facilitate smooth operations during orientation weeks'
      ],
      technologies: ['Event Management', 'Student Services', 'Team Collaboration']
    }
  ]

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Successfully maintained a 4.0/4.0 CGPA while managing multiple professional roles',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Teaching Impact',
      description: 'Tutored over 200+ students across various computer science disciplines, boosting their performance',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Project Delivery',
      description: 'Delivered end-to-end full-stack and dashboard projects with focus on usability and visual clarity',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-900">
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey of growth through diverse roles in education, development, and student services
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Timeline Line */}
                  <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300"></div>
                  
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}>
                      <exp.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 font-semibold text-lg mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Achievements Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
