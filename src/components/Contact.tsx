import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess(null)
    setLoading(true)

    let validationErrors: { name?: string; email?: string; message?: string } = {}

    if (!formData.name.trim()) validationErrors.name = 'Name is required'
    if (!formData.email.trim() || !validateEmail(formData.email)) validationErrors.email = 'Valid email is required'
    if (!formData.message.trim()) validationErrors.message = 'Message is required'

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      try {
        await emailjs.send(
          'service_gg7n79q',
          'template_0g8p1mr',
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          'Hxo_Swgh8CPZ4PfgU'
        )
        setSuccess('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } catch (error) {
        setSuccess('Failed to send message. Please try again later.')
      }
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I'm always interested in hearing about new opportunities, creative projects,
                or chances to collaborate. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:lalindupalliyaguruge9@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  <FaEnvelope className="text-xl" />
                  <span>lalindupalliyaguruge9@gmail.com</span>
                </a>
                <a
                  href="http://www.linkedin.com/in/lalindu-palliyaguruge-45a0b4202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/lalindumalaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linktr.ee/lali.nmk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  <FaLink className="text-xl" />
                  <span>My LinkTree</span>
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary/20 border border-secondary rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary/20 border border-secondary rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary/20 border border-secondary rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              <button type="submit" className="button-primary w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && <p className={`text-sm mt-2 ${success.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>{success}</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
