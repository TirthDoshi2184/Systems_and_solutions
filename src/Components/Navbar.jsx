import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wind } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      {/* Top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-orange-500 via-sky-500 to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">

          {/* Logo */}
{/* Logo */}
<Link to="/" className="flex items-center gap-3 group">
  <img
  src="https://res.cloudinary.com/dne8hhrez/image/upload/v1775754968/Logo_original.jpg_bldate.png"
  alt="Logo"
  className="h-14 w-auto object-contain"
  style={{ maxWidth: '200px', mixBlendMode: 'screen' }}
/>
</Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-body font-semibold tracking-wider uppercase transition-all duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-orange-400'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-200 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200 shadow-lg hover:shadow-orange-500/30"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(10,14,80,0.98)', backdropFilter: 'blur(10px)' }}
      >
        <div className="px-4 py-4 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors border-l-2 ${
                location.pathname === link.path
                  ? 'text-orange-400 border-orange-500 bg-orange-500/10'
                  : 'text-gray-200 border-transparent hover:border-orange-500 hover:text-orange-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 px-4 py-3 bg-orange-500 text-white text-center text-sm font-bold uppercase tracking-wider rounded"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}