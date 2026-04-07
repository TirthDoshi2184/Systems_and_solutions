import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Category badge */}
        <span
          className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded text-white"
          style={{ backgroundColor: product.color }}
        >
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div
          className="w-8 h-1 rounded mb-3 transition-all duration-300 group-hover:w-14"
          style={{ backgroundColor: product.color }}
        />
        <h3 className="font-display font-bold text-xl text-gray-900 mb-2 leading-tight group-hover:text-navy-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {product.shortDesc}
        </p>
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors group/link"
          style={{ color: product.color }}
        >
          View Details
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}