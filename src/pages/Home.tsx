import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[80vh] px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8 group"
      >
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-purple-500 to-accent rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
        
        {/* Image container */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-secondary">
          <img
            src="/images/myphoto.png"
            alt="Jahidur Rahman - IT Engineer"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-accent text-center"
        whileHover={{ scale: 1.05 }}
      >
        Jahidur Rahman
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 text-text/80 text-center"
        whileHover={{ scale: 1.05 }}
      >
        IT Engineer
      </motion.p>
      <div className="flex space-x-6">
        <SocialLink href="https://github.com/jhrahman" icon={<FaGithub size={30} />} />
        <SocialLink
          href="https://www.linkedin.com/in/jhrahman/"
          icon={<FaLinkedin size={30} />}
        />
        <SocialLink
          href="mailto:jahidur011@gmail.com"
          icon={<FaEnvelope size={30} />}
        />
      </div>
    </motion.div>
  )
}

const SocialLink = ({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-text hover:text-accent transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  )
}

export default Home