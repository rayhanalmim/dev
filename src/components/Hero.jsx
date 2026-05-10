import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaMobileAlt, FaTasks } from 'react-icons/fa'
import { SiGithub, SiLinkedin, SiGmail, SiTelegram, SiReact } from 'react-icons/si'
import site from '../data/site.json'
import './Hero.css'

const roles = site.hero.roles

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const { contact, hero } = site

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const quickStats = [
    { icon: <FaCalendar />, value: '3+', label: 'Years Coding' },
    { icon: <SiReact />, value: '40+', label: 'Projects Shipped' },
    { icon: <FaMobileAlt />, value: '20+', label: 'Happy Clients' },
    { icon: <FaTasks />, value: '99%', label: 'On-time Delivery' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <motion.span
              className="hero-title-main"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="title-part-1">Hi, I&apos;m Fazle Rabbi</span>
              <span className="title-part-2 typing-animation">{roles[currentRole]}</span>
            </motion.span>
            <motion.span
              className="hero-title-sub"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {hero.tagline}
            </motion.span>
          </h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="hero-contacts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href={`mailto:${contact.email}`}
              className="contact-link-hero"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGmail />
            </motion.a>
            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-hero"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiLinkedin />
            </motion.a>
            <motion.a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-hero"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGithub />
            </motion.a>
            {contact.telegram ? (
              <motion.a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-hero"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiTelegram />
              </motion.a>
            ) : null}
          </motion.div>

          <motion.div
            className="quick-stats-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="quick-stats-horizontal">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="quick-stat-pill"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <span className="stat-icon-pill">{stat.icon}</span>
                  <div className="stat-content-pill">
                    <span className="stat-value-pill">{stat.value}</span>
                    <span className="stat-label-pill">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.div
            className="hero-avatar-glow"
            animate={{
              scale: [1, 1.12, 1],
              rotate: [0, 90, 0],
              borderRadius: [
                '40% 60% 70% 30% / 40% 50% 60% 50%',
                '60% 40% 30% 70% / 50% 60% 40% 60%',
                '40% 60% 70% 30% / 40% 50% 60% 50%'
              ]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="hero-avatar-frame"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="https://i.ibb.co.com/qYSLPQPC/Chat-GPT-Image-May-8-2026-08-50-25-PM.png"
              alt="Fazle Rabbi"
              className="hero-avatar-img"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
