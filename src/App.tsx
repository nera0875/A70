import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import NeuralNetwork from './components/NeuralNetwork'
import DNAHelix from './components/DNAHelix'
import AISection from './components/AISection'
import ParticleField from './components/ParticleField'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      
      {/* Hero Section with 3D Background */}
      <section className="hero-section">
        <Canvas className="hero-canvas">
          <ParticleField />
        </Canvas>
        <Hero />
      </section>

      {/* Neural Network Section */}
      <section className="neural-section">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="section-content"
        >
          <h2>Neural Networks</h2>
          <p>Exploring the intricate connections that power artificial intelligence</p>
        </motion.div>
        <Canvas className="neural-canvas">
          <NeuralNetwork />
        </Canvas>
      </section>

      {/* DNA Section */}
      <section className="dna-section">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="section-content"
        >
          <h2>DNA & Genetics</h2>
          <p>The blueprint of life meets artificial intelligence</p>
        </motion.div>
        <Canvas className="dna-canvas">
          <DNAHelix />
        </Canvas>
      </section>

      {/* AI Intelligence Section */}
      <section className="ai-section">
        <AISection />
      </section>
    </div>
  )
}

export default App
