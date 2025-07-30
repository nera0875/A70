import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div 
      className="hero-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h1>Découvrez l'intersection de l'IA et de la Vie</h1>
      <p>Plongez dans le monde fascinant des neurones, de l'ADN et de l'intelligence artificielle.</p>
      <motion.button
        className="cta-button"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        Explorer Maintenant
      </motion.button>
    </motion.div>
  )
}

export default Hero
