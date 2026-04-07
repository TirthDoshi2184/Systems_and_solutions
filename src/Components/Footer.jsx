import { Link } from 'react-router-dom'
import { Wind, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { companyInfo, navLinks, products } from '../data'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top CTA band */}
      <div className="bg-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-display font-bold text-xl tracking-wide">
            Ready to Engineer Your Next Project?
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-2 rounded hover:bg-orange-50 transition-colors text-sm uppercase tracking-wider"
          >
            Talk to Our Engineers <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <Wind size={20} className="text-white" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-base leading-none">
                SYSTEMS <span className="text-orange-400">&</span> SOLUTIONS
              </div>
              <div className="text-blue-400 text-xs font-mono mt-0.5">WORKING WITH ELEMENT AIR</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            A team of experienced Engineers catering to HVAC needs of various industrial requirements with design backed by the latest technology.
          </p>
          <div className="flex gap-3">
            {['IN', 'HVAC', 'ISO'].map((tag) => (
              <span key={tag} className="text-xs bg-navy-800 border border-white/10 text-blue-300 px-2 py-1 rounded font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest mb-4 border-b border-orange-500/30 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="text-orange-500/50 group-hover:text-orange-400 transition-colors" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest mb-4 border-b border-orange-500/30 pb-2">
            Products
          </h4>
          <ul className="space-y-2">
            {products.slice(0, 6).map((p) => (
              <li key={p.id}>
                <Link
                  to={`/products/${p.id}`}
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="text-orange-500/50 group-hover:text-orange-400 transition-colors" />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest mb-4 border-b border-orange-500/30 pb-2">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase mb-1">Office</p>
                <p className="text-sm text-gray-400 leading-relaxed">{companyInfo.office}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase mb-1">Works</p>
                <p className="text-sm text-gray-400 leading-relaxed">{companyInfo.Works}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase mb-1">Telephone</p>
                <p className="text-sm text-gray-400">{companyInfo.phone}</p>
                <p className="text-sm text-gray-400">{companyInfo.phone2}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase mb-1">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Systems & Solutions. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  )
}