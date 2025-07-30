import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AISection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="ai-intelligence-section"
    >
      <h2>Intelligence Artificielle</h2>
      <p>L'IA transforme notre monde. Découvrez comment nous repoussons les limites.</p>
      
      <div className="ai-features">
        <motion.div variants={itemVariants} animate={inView ? "visible" : "hidden"} className="feature-card">
          <h3>Apprentissage Automatique</h3>
          <p>Des algorithmes qui apprennent et s'améliorent avec les données.</p>
        </motion.div>
        <motion.div variants={itemVariants} animate={inView ? "visible" : "hidden"} className="feature-card">
          <h3>Traitement du Langage Naturel</h3>
          <p>Donner aux machines la capacité de comprendre le langage humain.</p>
        </motion.div>
        <motion.div variants={itemVariants} animate={inView ? "visible" : "hidden"} className="feature-card">
          <h3>Vision par Ordinateur</h3>
          <p>Permettre aux systèmes d'interpréter et de comprendre le monde visuel.</p>
        </motion.div>
      </div>

      <motion.button
        className="cta-button"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        En savoir plus sur l'IA
      </motion.button>
    </motion.div>
  )
}

export default AISection
