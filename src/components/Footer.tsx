import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-2xl font-display font-bold gradient-text">Lalindu Palliyaguruge</span>
            <p className="text-gray-400 mt-2">Software Engineering Undergraduate</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/lalindumalaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/lalindu-palliyaguruge-45a0b4202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/lali_nmk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linktr.ee/lali.nmk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLink size={24} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm mt-8">
          {new Date().getFullYear()} Lalindu Palliyaguruge. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer