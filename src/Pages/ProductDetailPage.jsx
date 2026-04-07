import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'
import { products } from '../data'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) return <Navigate to="/products" replace />

  const related = products.filter((p) => p.id !== id && p.category === product.category).slice(0, 3)

  return (
    <div>
      {/* ── BREADCRUMB / HERO ─────────────────────────────────────────── */}
      <section className="relative bg-industrial pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-300 text-xs font-mono mb-8">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-orange-400 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-orange-400">{product.name}</span>
          </nav>
          <Link to="/products" className="inline-flex items-center gap-2 text-blue-200 hover:text-orange-400 transition-colors text-sm font-semibold mb-6">
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded text-white"
              style={{ backgroundColor: product.color }}
            >
              {product.category}
            </span>
            <h1 className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {product.name}
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Left — image + enquiry card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* Quick enquiry card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Quick Enquiry</h3>
              <p className="text-sm text-gray-500 mb-5">
                Interested in <strong>{product.name}</strong>? Contact our engineering team for pricing and availability.
              </p>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-lg transition-colors uppercase tracking-wider text-sm w-full mb-3"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+917926931234"
                className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-orange-400 text-gray-600 hover:text-orange-500 font-semibold px-6 py-3 rounded-lg transition-colors text-sm w-full"
              >
                <Phone size={14} /> Call Us
              </a>
            </div>
          </div>

          {/* Right — details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <div className="w-12 h-1 rounded mb-4" style={{ backgroundColor: product.color }} />
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Product Overview</h2>
              <p className="text-gray-500 leading-relaxed text-base">{product.fullDesc}</p>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-5">Technical Specifications</h2>
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-r border-gray-100 w-2/5">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-mono">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-5">Applications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.applications.map((app) => (
                  <div key={app} className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                    <CheckCircle size={14} className="text-orange-500 shrink-0" />
                    <span className="text-sm text-gray-600 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 grid-dot-bg">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex gap-4 items-center p-4">
                  <img src={p.image} alt={p.name} className="w-20 h-20 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: p.color }}>{p.category}</div>
                    <div className="font-display font-bold text-gray-900 text-base leading-tight">{p.name}</div>
                    <div className="text-xs text-gray-400 mt-1 line-clamp-2">{p.shortDesc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-orange-500 industrial-stripe">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-white text-3xl mb-4">Need a Custom Specification?</h2>
          <p className="text-orange-100 mb-8">Our engineers can design a solution exactly to your process requirements.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors uppercase tracking-wider text-sm">
              Enquire Now <ArrowRight size={16} />
            </Link>
            <a href="mailto:info@systemsandsolutions.co.in" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors uppercase tracking-wider text-sm">
              <Mail size={14} /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}