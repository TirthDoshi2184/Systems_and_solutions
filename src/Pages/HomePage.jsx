import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, CheckCircle, Wind,
  Factory, Building2, Pill, ShoppingBag, Truck,
  Thermometer, Settings, Shield, Award, Clock,
  Zap, Layers, Wrench, Phone, Mail, MapPin,
  ChevronRight, Star
} from 'lucide-react'
import SectionTitle from '../Components/SectionTitle'
import ProductCard from '../Components/ProductCard'
import FeatureCard from '../Components/FeatureCard'
import StatCounter from '../Components/StatCounter'
import { products, whyChooseUs, industries, stats, companyInfo } from '../data'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const marqueeProducts = [
  { label: 'Air Handling Units',            slug: 'air-handling-units',     icon: Wind },
  { label: 'Air Washer Units',              slug: 'air-washer-units',        icon: Wind },
  { label: 'Process AHU',                  slug: 'process-ahu',             icon: Settings },
  { label: 'Fan Coil Units',               slug: 'fan-coil-units',          icon: Layers },
  { label: 'Centrifugal Fans',             slug: 'centrifugal-fans',        icon: Settings },
  { label: 'Axial Flow Fans',              slug: 'axial-flow-fans',         icon: Wind },
  { label: 'Industrial Exhaust Fans',      slug: 'industrial-exhaust-fans', icon: Wrench },
  { label: 'Air Coolers',                  slug: 'air-coolers',             icon: Thermometer },
  { label: 'Cooling & Heating Coils',      slug: 'cooling-heating-coils',   icon: Thermometer },
  { label: 'Dx-Coils',                     slug: 'dx-coils',                icon: Zap },
  { label: 'Heat Exchangers',              slug: 'heat-exchangers',         icon: Zap },
  { label: 'Turnkey Project',              slug: 'turnkey-project',         icon: Shield },
  { label: 'Other Accessories & Services', slug: 'accessories-services',    icon: Award },
]

const services = [
  {
    icon: Settings,
    title: 'Custom HVAC Design',
    desc: 'Site-specific engineering and design for industrial, commercial, and critical environments.',
  },
  {
    icon: Wrench,
    title: 'In-House Manufacturing',
    desc: 'Complete fabrication at our Ahmedabad facility with rigorous quality control at every stage.',
  },
  {
    icon: Layers,
    title: 'Turnkey Project Execution',
    desc: 'Study, design, supply and full commissioning — we own every phase of the project.',
  },
  {
    icon: Shield,
    title: 'After-Sales Support',
    desc: 'Dedicated service teams ensuring uptime, maintenance, and rapid response across India.',
  },
  {
    icon: Zap,
    title: 'Energy Optimisation',
    desc: 'Systems engineered for peak efficiency with measurable reductions in operational energy cost.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'ISO 9001:2015 certified processes with full traceability from raw material to delivery.',
  },
]

const usps = [
  {
    number: '01',
    title: 'Engineering First',
    desc: 'Every system starts on the drawing board, not a catalogue. Our engineers analyse your load, space, and environment before a single component is specified.',
  },
  {
    number: '02',
    title: 'Built in India, for Indian Conditions',
    desc: 'Designed for the heat, humidity, and dust realities of Indian industry — not adapted from foreign specs.',
  },
  {
    number: '03',
    title: 'Single-Source Accountability',
    desc: 'From estimation to commissioning, one team owns the project. No handoffs, no excuses.',
  },
  {
    number: '04',
    title: '25+ Years of Domain Depth',
    desc: 'Decades of field knowledge embedded in every product — we have solved problems your next vendor has not seen yet.',
  },
]

const industriesList = [
  { icon: Pill,        name: 'Pharmaceuticals',  desc: 'GMP-compliant AHU and cleanroom solutions' },
  { icon: Factory,     name: 'Manufacturing',    desc: 'Process cooling and ventilation for factories' },
  { icon: Building2,   name: 'Commercial',       desc: 'Central HVAC for offices, malls, and hotels' },
  { icon: Truck,       name: 'Cold Chain',       desc: 'Refrigeration plants and blast coolers' },
  { icon: ShoppingBag, name: 'Textile',          desc: 'Humidity and temperature control systems' },
  { icon: Settings,    name: 'Automotive',       desc: 'Paint booth ventilation and plant cooling' },
]

const testimonials = [
  {
    quote: 'Their AHU delivered exactly to spec on a tight pharma project timeline. The engineering team was exceptional.',
    name: 'Rajesh Mehta',
    title: 'Plant Manager, Pharmaceutical Division',
    rating: 5,
  },
  {
    quote: 'Eight years, three factories. Unmatched reliability and the best after-sales team in the business.',
    name: 'Anita Desai',
    title: 'Head of Engineering, Textile Group',
    rating: 5,
  },
  {
    quote: 'Turnkey execution was seamless — from design through commissioning with zero snags.',
    name: 'Vikram Shah',
    title: 'Director, Cold Chain Logistics',
    rating: 5,
  },
]

/* ─────────────────────────────────────────────
   MARQUEE ITEM CSS (inline style tag)
───────────────────────────────────────────── */
const marqueeCSS = `
  @keyframes marquee-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .sns-marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 38s linear infinite;
  }
  .sns-marquee-track:hover { animation-play-state: paused; }
  .sns-marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 28px;
    border-right: 1px solid rgba(255,255,255,0.06);
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    white-space: nowrap;
  }
  .sns-marquee-item:hover { background: rgba(249,115,22,0.10); }
  .sns-marquee-item:hover .sns-dot { background: #f97316; }
  .sns-marquee-item:hover .sns-label { color: #f97316; }
  .sns-marquee-item:hover .sns-icon { color: #f97316; }
  .sns-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #374151; flex-shrink: 0;
    transition: background 0.2s;
  }
  .sns-label {
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: #9ca3af; transition: color 0.2s;
  }
  .sns-icon { color: #4b5563; transition: color 0.2s; flex-shrink: 0; }
`

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════
          HERO — UNTOUCHED (exact original)
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-industrial hero-pattern">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-5 bg-orange-500 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-5 bg-sky-500 blur-3xl" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 w-full h-screen flex pt-20">
          {/* LEFT PANEL */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between px-8 lg:px-14 py-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-10">
                <Wind size={12} />
                Industrial HVAC &amp; Refrigeration Experts
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-orange-500 pl-4">
                    <div className="font-display font-black text-2xl text-white">{s.value}</div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>
                PRECISION
                <span className="block text-gradient"> ENGINEERED</span>
                <span className="block text-white">AIR SYSTEMS</span>
              </h1>
              <p className="text-blue-200 text-base leading-relaxed mb-8 max-w-md">
                {companyInfo.description.substring(0, 160)}...
              </p>
              <div className="flex items-start gap-2 text-blue-100 text-sm mb-8">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span>Precision air handling built for industrial performance and commercial excellence.</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/products"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 uppercase tracking-wider text-sm">
                  View Products <ArrowRight size={16} />
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-orange-400 text-white hover:text-orange-400 font-bold px-7 py-3.5 rounded-lg transition-all duration-200 uppercase tracking-wider text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — image mosaic */}
          <div className="hidden lg:grid w-3/5 grid-cols-3 grid-rows-2 gap-1.5 p-1.5 h-full">
            <div className="row-span-2 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" alt="Industrial plant"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" alt="HVAC components"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=600&q=80" alt="Commercial space"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80" alt="Pharmaceutical industry"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Automotive factory"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                style={{ filter: 'grayscale(0.3) hue-rotate(180deg) saturate(1.5)' }} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-20">
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* ══════════════════════════════════════
          MARQUEE — clickable infinite scroller
      ══════════════════════════════════════ */}
      <style>{marqueeCSS}</style>

      <section className="bg-gray-950 border-y border-gray-800 overflow-hidden">
        <div className="sns-marquee-track">
          {[...marqueeProducts, ...marqueeProducts].map((item, i) => {
            const Icon = item.icon
            return (
              <Link key={i} to={`/products/${item.slug}`} className="sns-marquee-item">
                <span className="sns-dot" />
                <Icon size={13} className="sns-icon" />
                <span className="sns-label">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ABOUT */}
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">
 
    {/* Section label — centered above */}
    <div className="flex items-center justify-center gap-3 mb-16">
      <div className="w-8 h-px bg-orange-500" />
      <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">About Systems &amp; Solutions</span>
      <div className="w-8 h-px bg-orange-500" />
    </div>
 
    <div className="grid lg:grid-cols-2 gap-16 items-center">
 
      {/* LEFT — image with badge INSIDE a relative wrapper, no negative offsets */}
      <div className="relative">
        {/* Main image */}
        <div className="relative overflow-hidden rounded-2xl" style={{ height: '520px' }}>
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
            alt="Systems and Solutions manufacturing facility"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Bottom caption inside image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
               style={{ background: 'linear-gradient(to top, rgba(10,10,25,0.80) 0%, transparent 100%)' }}>
            <p className="text-white text-xs uppercase tracking-widest font-bold">Ahmedabad Facility</p>
            <p className="text-white/60 text-xs mt-0.5">In-house fabrication · 50,000 sq ft production floor</p>
          </div>
        </div>
 
        {/* Experience badge — positioned TOP-RIGHT, stays inside the container */}
        <div className="absolute top-5 right-5 bg-white rounded-xl px-5 py-4 shadow-xl text-center">
          <div className="font-black text-gray-900 leading-none" style={{ fontSize: '2.5rem' }}>
            {companyInfo.experience}
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-widest font-semibold mt-1">
            Years of<br />Excellence
          </div>
        </div>
 
        {/* Decorative orange square bottom-left */}
        <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-orange-500 rounded-xl -z-10" />
      </div>
 
      {/* RIGHT — text, no overflow issues */}
      <div className="min-w-0">
        <h2 className="text-gray-900 font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em' }}>
          Engineering the Air<br />
          <span style={{ color: '#1e3a5f' }}>India Breathes.</span>
        </h2>
 
        <p className="text-gray-500 text-base leading-relaxed mb-4">
          For over two decades, Systems &amp; Solutions has been the manufacturing partner of choice
          for India's most demanding industries — designing and building high-performance HVAC and
          refrigeration systems that work reliably in the toughest environments.
        </p>
        <p className="text-gray-500 text-base leading-relaxed mb-10">
          From a single custom AHU to complete turnkey HVAC plant execution, our Ahmedabad facility
          combines engineering rigour with in-house fabrication — delivering on time, on spec, every time.
        </p>
 
        <ul className="space-y-5 mb-10">
          {[
            [Shield,  'Experienced team of HVAC engineers & system designers'],
            [Factory, 'In-house manufacturing at our Ahmedabad production facility'],
            [Layers,  'Study, Design, Supply & Turnkey project execution'],
            [Zap,     'Custom solutions for industrial & critical environments'],
          ].map(([Icon, text]) => (
            <li key={text} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={14} className="text-orange-500" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed pt-1">{text}</p>
            </li>
          ))}
        </ul>
 
        <Link to="/about"
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-colors duration-200">
          Our Story <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  </div>
</section>
      {/* ══════════════════════════════════════
          PRODUCTS — grid showcase
      ══════════════════════════════════════ */}
      <section className="bg-gray-50 py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Product Range</span>
              </div>
              <h2 className="text-gray-900 font-black leading-tight"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em' }}>
                Complete HVAC &amp;<br />Refrigeration Solutions
              </h2>
            </div>
            
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-10 py-4 rounded-lg uppercase tracking-wider text-sm transition-all duration-200">
              Explore Full Catalogue <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — what we offer
      ══════════════════════════════════════ */}
      <section className="bg-white py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">What We Offer</span>
            </div>
            <h2 className="text-gray-900 font-black leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em' }}>
              End-to-End HVAC<br />
              <span style={{ color: '#1e3a5f' }}>Engineering Services</span>
            </h2>
          </div>

          {/* Services grid with flush dividers */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div key={i}
                  className="bg-white p-8 group hover:bg-orange-50 transition-colors duration-300 cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon size={20} className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                  <h3 className="text-gray-900 font-black text-sm uppercase tracking-tight mb-3">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════ */}
      <section className="bg-gray-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-white/5">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-white font-black leading-none mb-3"
                     style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  {s.value}
                </div>
                <div className="w-10 h-px bg-orange-500 mx-auto mb-3" />
                <div className="text-gray-500 text-xs uppercase tracking-[0.18em] font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US — numbered + image
      ══════════════════════════════════════ */}
      <section className="bg-gray-50 py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Sticky left: headline + photo */}
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Why Choose Us</span>
              </div>
              <h2 className="text-gray-900 font-black leading-tight mb-8"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em' }}>
                The Systems &amp;<br />Solutions<br />
                <span style={{ color: '#1e3a5f' }}>Advantage</span>
              </h2>
              <div className="overflow-hidden rounded-2xl aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80"
                  alt="Industrial coil manufacturing"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Right: numbered USPs */}
            <div className="divide-y divide-gray-200">
              {usps.map((usp, i) => (
                <div key={i}
                  className="group py-8 flex gap-7 hover:bg-white hover:-mx-6 hover:px-6 hover:shadow-sm rounded-xl transition-all duration-300 cursor-default">
                  <div className="text-orange-500/20 font-black leading-none shrink-0 group-hover:text-orange-500/50 transition-colors duration-300"
                       style={{ fontSize: '4rem' }}>
                    {usp.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-gray-900 font-black text-base uppercase tracking-tight mb-2">{usp.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════ */}
      <section className="bg-gray-900 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Industries We Serve</span>
              <div className="w-8 h-px bg-orange-500" />
            </div>
            <h2 className="text-white font-black leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em' }}>
              Trusted Across Every Sector
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Our systems power operations in India's most demanding environments — built for the conditions each industry actually faces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {industriesList.map((ind) => {
              const Icon = ind.icon
              return (
                <div key={ind.name}
                  className="group flex flex-col items-center text-center p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white font-bold text-xs uppercase tracking-wider mb-1.5 transition-colors duration-300 leading-tight">{ind.name}</p>
                  <p className="text-gray-600 group-hover:text-white/70 text-xs leading-snug transition-colors duration-300">{ind.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="bg-white py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Client Testimonials</span>
            </div>
            <h2 className="text-gray-900 font-black leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em' }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={13} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                {/* <div className="text-orange-200 font-serif text-6xl leading-none -mt-3 mb-1 select-none">"</div> */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-8">{t.quote}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-xs">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-black text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — split dark / orange
      ══════════════════════════════════════ */}
      <section>
        <div className="grid lg:grid-cols-2">

          {/* LEFT — dark */}
          <div className="bg-gray-950 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Start a Project</span>
              </div>
              <h2 className="text-white font-black leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.025em' }}>
                Have a Project<br />in Mind?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-10">
                Let our engineers analyse your requirements and design the most efficient HVAC solution for your facility — from a single unit to a complete plant.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-3.5 rounded-lg uppercase tracking-wider text-sm transition-colors duration-200">
                  Request a Quote <ArrowRight size={15} />
                </Link>
                <Link to="/products"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white font-bold px-7 py-3.5 rounded-lg uppercase tracking-wider text-sm transition-colors duration-200">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — orange */}
          <div className="bg-orange-500 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20">
            <p className="text-orange-200 text-xs font-bold uppercase tracking-[0.2em] mb-8">Get in Touch</p>
            <div className="space-y-6 mb-10">
              {[
                { Icon: Phone,  label: 'Call Us Directly',   value: '+91 79 0000 0000',             href: 'tel:+917900000000' },
                { Icon: Mail,   label: 'Send an Enquiry',    value: 'info@systemssolutions.in',      href: 'mailto:info@systemssolutions.in' },
                { Icon: MapPin, label: 'Visit Our Facility', value: 'Ahmedabad, Gujarat, India',     href: null },
                { Icon: Clock,  label: 'Working Hours',      value: 'Mon–Sat: 9:00 AM – 6:00 PM',   href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-orange-100 text-xs uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-white font-black text-sm hover:text-orange-100 transition-colors">{value}</a>
                      : <p className="text-white font-black text-sm">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-orange-400/50 pt-6">
              <p className="text-orange-100 text-xs">
                <span className="font-black text-white">✦ ISO 9001:2015 Certified</span>
                &nbsp;&nbsp;·&nbsp;&nbsp;Responding within 24 business hours
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}