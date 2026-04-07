import { useState } from 'react'
import { Search } from 'lucide-react'
import SectionTitle from '../Components/SectionTitle'
import ProductCard from '../Components/ProductCard'
import { products } from '../data'

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))]

export default function Products() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = products.filter((p) => {
    const matchCat = active === 'All' || p.category === active
    const matchQ = p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-industrial pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Our Products
          </div>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            COMPLETE HVAC &amp;<span className="text-gradient block">REFRIGERATION</span>
            <span>SOLUTIONS</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            From air handling units to turnkey refrigeration plants — engineered to perform in India's harshest industrial environments.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* ── FILTERS ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-8 sticky top-[68px] z-30 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  active === cat
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-full border border-gray-200 bg-white focus:outline-none focus:border-orange-400 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 grid-dot-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-4xl mb-4">🔍</p>
              <p className="font-semibold">No products found matching your search.</p>
            </div>
          ) : (
            <>
              <p className="text-xs text-gray-400 font-mono mb-8 uppercase tracking-widest">
                Showing {filtered.length} of {products.length} products
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}