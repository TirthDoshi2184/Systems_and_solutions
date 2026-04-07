import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, CheckCircle, Wind } from 'lucide-react'
import SectionTitle from '../Components/SectionTitle'
import ProductCard from '../Components/ProductCard'
import FeatureCard from '../Components/FeatureCard'
import StatCounter from '../Components/StatCounter'
import { products, whyChooseUs, industries, stats, companyInfo } from '../data'

export default function Home() {
  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-industrial hero-pattern">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-5 bg-orange-500 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-5 bg-sky-500 blur-3xl" />
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Diagonal accent */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10" style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(249,115,22,0.3) 100%)'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Wind size={12} />
              Industrial HVAC &amp; Refrigeration Experts
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-white leading-none mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
              PRECISION
              <span className="block text-gradient"> ENGINEERED</span>
              <span className="block text-white">AIR SYSTEMS</span>
            </h1>

            <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-xl">
              {companyInfo.description.substring(0, 200)}...
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 uppercase tracking-wider text-sm"
              >
                View Products <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-orange-400 text-white hover:text-orange-400 font-bold px-8 py-4 rounded-lg transition-all duration-200 uppercase tracking-wider text-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-orange-500 pl-4">
                  <div className="font-display font-black text-3xl text-white">{s.value}</div>
                  <div className="text-blue-300 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>

        {/* Bottom diagonal */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }} />
      </section>

      {/* ===================== INTRO BAND ===================== */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {['Air Handling Units', 'Centrifugal Fans', 'Heat Exchangers', 'Refrigeration Plants', 'Fan Coil Units', 'Axial Flow Fans'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-600">
                <CheckCircle size={14} className="text-orange-500" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT SNIPPET ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              label="Who We Are"
              title="India's Trusted Industrial HVAC Engineers"
              subtitle="For over two decades, Systems & Solutions has been designing and manufacturing high-performance HVAC and refrigeration equipment for India's most demanding industries."
            />
            <ul className="space-y-3 mb-8">
              {[
                'Experienced team of HVAC engineers & designers',
                'In-house manufacturing at Ahmedabad facility',
                'Study, Design, Supply & Execution of Turnkey Projects',
                'Custom solutions for industrial & critical applications',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-navy-600 font-bold uppercase tracking-wider text-sm border-b-2 border-orange-500 pb-1 hover:text-orange-600 transition-colors">
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
                alt="Air Handling Unit"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80"
                alt="Industrial Coils"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                alt="Centrifugal Fan"
                className="rounded-xl shadow-lg w-full h-48 object-cover -mt-4"
              />
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80"
                alt="Axial Flow Fan"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-4"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-xl p-4 shadow-xl">
              <div className="font-display font-black text-4xl">{companyInfo.experience}</div>
              <div className="text-xs font-bold uppercase tracking-wider">Years of<br/>Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS ===================== */}
      <section className="py-20 bg-gray-50 grid-dot-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Our Products"
            title="Complete HVAC & Refrigeration Solutions"
            subtitle="From air handling units to refrigeration plants — engineered for reliability, efficiency and industrial performance."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wider text-sm"
              style={{ backgroundColor: '#0f1560' }}
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== STATS BAND ===================== */}
      <section className="py-16 bg-industrial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Why Choose Us"
            title="The Systems & Solutions Advantage"
            subtitle="We combine engineering expertise with manufacturing excellence to deliver solutions that exceed expectations."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section className="py-20 bg-navy-900" style={{ backgroundColor: '#0a0e50' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Industries We Serve"
            title="Trusted Across Sectors"
            subtitle="Our solutions power operations in some of India's most demanding industrial environments."
            light
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="group text-center p-5 rounded-xl bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 transition-all duration-200 cursor-default"
              >
                <div className="text-3xl mb-2">{ind.icon}</div>
                <p className="text-sm text-blue-200 font-semibold group-hover:text-white transition-colors">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-20 bg-orange-500 industrial-stripe">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Have a Project in Mind?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Let our engineers analyze your requirements and design the most efficient HVAC solution for your facility.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors uppercase tracking-wider text-sm"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors uppercase tracking-wider text-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}