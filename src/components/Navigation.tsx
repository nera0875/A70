import { motion } from 'framer-motion'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Neural Networks', href: '#neural' },
    { name: 'DNA', href: '#dna' },
    { name: 'AI Intelligence', href: '#ai' }
  ]

  return (
    <nav className="navigation">
      <motion.div 
        className="nav-container"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-logo">
          <span className="logo-text">AI•DNA•NEURAL</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-item"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1, color: '#ffffff' }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navigation
