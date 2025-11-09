import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config/emailjs'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      label: 'Email',
      value: 'jahidur011@gmail.com',
      href: 'mailto:jahidur011@gmail.com',
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      value: 'jhrahman',
      href: 'https://github.com/jhrahman',
    },
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'Jahidur Rahman',
      href: 'https://www.linkedin.com/in/jhrahman/',
    },
    // {
    //   icon: <FaTwitter size={24} />,
    //   label: 'Twitter',
    //   value: '@yourusername',
    //   href: 'https://twitter.com/yourusername',
    // },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'tflash978@gmail.com'
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('Error sending email:', error)
    }

    setLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-accent px-4"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="bg-secondary p-4 md:p-8 rounded-lg mx-4"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-lg mb-8 text-text/80">
          I'm always open to new opportunities and collaborations. Feel free to reach out through the form below or any of my social channels:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-primary p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text/80 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-secondary border border-accent/20 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent text-text"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text/80 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-secondary border border-accent/20 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent text-text"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text/80 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-secondary border border-accent/20 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent text-text resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 text-text rounded-md text-sm font-medium transition duration-200
                ${loading 
                  ? 'bg-accent/50 cursor-not-allowed' 
                  : 'bg-accent hover:bg-accent/80 active:bg-accent/90'
                }`}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-primary rounded-lg hover:bg-accent/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-accent mr-4">{contact.icon}</span>
                <div>
                  <h3 className="font-bold">{contact.label}</h3>
                  <p className="text-text/80">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
      <Toaster position="bottom-right" />
    </motion.div>
  )
}

export default Contact