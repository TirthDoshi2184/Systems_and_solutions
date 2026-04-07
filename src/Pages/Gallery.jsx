import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import SectionTitle from '../Components/SectionTitle'
import { galleryImages } from '../data'

const categories = ['All', ...Array.from(new Set(galleryImages.map((g) => g.category)))]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((g) => g.category === active)

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
            Gallery
          </div>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            OUR WORK IN<span className="text-gradient block">ACTION</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            A visual journey through our manufacturing facility, finished products, and project installations.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* ── FILTERS ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-6 sticky top-[68px] z-30 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                active === cat
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY GRID ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 grid-dot-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, idx) => (
              <div
                key={img.id}
                className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm">{img.title}</p>
                    <span className="text-xs text-orange-300 font-mono uppercase tracking-wider">{img.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full rounded-xl shadow-2xl max-h-[80vh] object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white font-bold text-lg">{lightbox.title}</p>
              <span className="text-orange-400 text-xs font-mono uppercase tracking-wider">{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}