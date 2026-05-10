import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiVuedotjs, 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiAngular
} from 'react-icons/si'
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaShoppingCart, 
  FaShieldAlt,
  FaBitcoin,
  FaRobot
} from 'react-icons/fa'
import './About.css'

const About = () => {
  const techIcons = [
    // Uncomment and update if you want floating icons on the section
    // { icon: <SiReact />, position: { top: '10%', left: '30%' }, delay: 0 },
    // { icon: <SiNextdotjs />, position: { top: '20%', left: '10%' }, delay: 0.15 },
    // { icon: <SiVuedotjs />, position: { top: '30%', left: '60%' }, delay: 0.25 },
    // { icon: <SiAngular />, position: { top: '50%', left: '45%' }, delay: 0.35 },
    // { icon: <SiNodedotjs />, position: { bottom: '30%', left: '15%' }, delay: 0.5 },
    // { icon: <SiPython />, position: { bottom: '10%', right: '20%' }, delay: 0.65 },
    // { icon: <SiDocker />, position: { top: '70%', right: '15%' }, delay: 0.8 },
    // { icon: <FaRobot />, position: { bottom: '12%', left: '55%' }, delay: 1 }
  ]

  return (
    <section id="about" className="about">
      {/* Floating Tech Icons - Full Width */}
      <div className="floating-icons">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              delay: item.delay * 0.1,
              y: {
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>
        
        <div className="about-wrapper">
          <div className="about-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <strong>MERN Stack Web Developer</strong> focused on building aesthetic, high-performance applications. I enjoy designing APIs, crafting attractive user interfaces, and optimizing performance to deliver smooth and efficient user experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specialized in <strong>React</strong> and <strong>Next.js</strong> on the frontend, with a strong backend foundation in <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. Comfortable across the full stack — from database modeling to pixel-perfect UI.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I follow <strong>clean architecture</strong> principles and modern development patterns. My goal is to write clean, maintainable code, improve <strong>UI/UX</strong> flows, and build applications that feel fast, secure, and intuitive.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Strong problem-solver with a focus on <strong>performance</strong>, <strong>scalability</strong>, and shipping production-ready features end-to-end. Always learning, always iterating, always building.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
