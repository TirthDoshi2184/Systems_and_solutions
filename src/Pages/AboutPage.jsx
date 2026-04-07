import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../Components/SectionTitle'
import { companyInfo, milestones, infrastructure, whyChooseUs, stats } from '../data'
import FeatureCard from '../Components/FeatureCard'

export default function About() {
  return (
    <div>
      {/* ── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative bg-industrial pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            About Us
          </div>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            ENGINEERING<span className="text-gradient"> EXCELLENCE</span>
            <span className="block">SINCE 1999</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A team of dedicated HVAC engineers building India's industrial air systems with precision, technology, and passion.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* ── COMPANY OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              label="Who We Are"
              title="India's Trusted Industrial HVAC Specialists"
            />
            <p className="text-gray-500 leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Headquartered in Ahmedabad, Gujarat, we have successfully executed over 500 HVAC and refrigeration projects across pharmaceuticals, textiles, food processing, automotive, defence, and data centres. Our in-house design, fabrication, and commissioning capability makes us a truly end-to-end solution provider.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-5 border-l-4 border-orange-500">
                  <div className="font-display font-black text-3xl text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
              alt="Manufacturing facility"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-navy-900 rounded-xl p-6 shadow-xl" style={{ backgroundColor: '#0a0e50' }}>
              <div className="font-display font-black text-5xl text-gradient">{companyInfo.experience}</div>
              <div className="text-blue-300 text-sm font-semibold uppercase tracking-wider mt-1">Years of<br />Excellence</div>
            </div>
            {/* Accent dot grid */}
            <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }} />
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 grid-dot-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full" />
              <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6 text-white text-2xl font-black">M</div>
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To deliver precision-engineered HVAC and refrigeration solutions that help Indian industry achieve optimal operational efficiency, energy savings, and environmental sustainability. We are committed to solving the toughest thermal challenges with innovation and integrity.
              </p>
            </div>
            {/* Vision */}
            <div className="rounded-2xl p-10 relative overflow-hidden text-white" style={{ backgroundColor: '#0a0e50' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full" />
              <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6 text-white text-2xl font-black">V</div>
              <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-blue-200 leading-relaxed">
                To be recognised as India's most trusted industrial HVAC brand — one that engineers look to for cutting-edge, reliable, and sustainable air-conditioning solutions. We aspire to build systems that stand the test of time and contribute to a greener India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES / TIMELINE ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="Our Journey" title="Milestones That Define Us" center />
          <div className="relative">
            {/* Centre line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-orange-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className="md:w-5/12">
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="text-orange-500 font-mono font-black text-lg mb-1">{m.year}</div>
                      <div className="font-display font-bold text-xl text-gray-900 mb-2">{m.title}</div>
                      <p className="text-gray-500 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow-md z-10" />
                  </div>
                  {/* Spacer */}
                  <div className="md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ───────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 industrial-stripe" style={{ backgroundColor: '#0a0e50' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Infrastructure"
            title="Built for Manufacturing Excellence"
            subtitle="Our state-of-the-art facility in Ahmedabad is equipped to handle every stage of your project."
            light
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item) => (
              <div key={item.title} className="group p-6 rounded-xl bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 transition-all duration-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="Why Choose Us" title="The Systems & Solutions Advantage" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-orange-500 industrial-stripe">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-white text-3xl mb-4">Ready to Work With Us?</h2>
          <p className="text-orange-100 mb-8">Get in touch with our engineering team to discuss your HVAC requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors uppercase tracking-wider text-sm"
          >
            Contact Our Engineers <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}