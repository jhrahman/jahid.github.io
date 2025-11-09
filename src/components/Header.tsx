import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setIsOpen(false)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/activities', label: 'Activities' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-secondary py-4 relative z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between md:justify-center items-center relative">
          {/* Logo or Brand - Only visible on mobile */}
          <Link to="/" className="text-accent font-bold text-xl tracking-wider md:hidden">
            JAHID
          </Link>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <motion.button
            className="md:hidden p-2 text-text hover:text-accent focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div
              className="w-6 h-5 flex flex-col justify-between"
              aria-hidden="true"
            >
              <motion.span
                className="w-full h-0.5 bg-current transform origin-left"
                variants={{
                  open: { rotate: 45, y: -2 },
                  closed: { rotate: 0, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current transform origin-left"
                variants={{
                  open: { rotate: -45, y: 2 },
                  closed: { rotate: 0, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12 px-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>
                  <motion.div
                    className={`relative px-2 py-1 text-base ${
                      location.pathname === item.path
                        ? 'text-accent'
                        : 'text-text hover:text-accent'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
                        layoutId="underline"
                      />
                    )}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden"
            >
              <motion.ul
                className="flex flex-col items-center py-4 space-y-4 bg-secondary"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <Link 
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className={`px-4 py-2 text-lg ${
                          location.pathname === item.path
                            ? 'text-accent'
                            : 'text-text hover:text-accent'
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header