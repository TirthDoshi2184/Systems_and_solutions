import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { companyInfo } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', product: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only: just show success state
    setSubmitted(true)
  }

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-industrial pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Get In Touch
          </div>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            LET'S ENGINEER<span className="text-gradient block">YOUR SOLUTION</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl">
            Tell us about your project. Our team will reach out within one business day with technical guidance and a quote.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* ── MAIN ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 grid-dot-bg">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* ── Contact Info ── */}
          <div className="lg:col-span-1 space-y-6">
            {/* Cards */}
            {[
              {
                icon: <MapPin size={20} className="text-orange-500" />,
                title: 'Our Office',
                lines: [companyInfo.office],
              },
              {
                icon: <Phone size={20} className="text-orange-500" />,
                title: 'Telephone',
                lines: [companyInfo.phone, companyInfo.phone2],
              },
              {
                icon: <Mail size={20} className="text-orange-500" />,
                title: 'Email',
                lines: [companyInfo.email],
                link: `mailto:${companyInfo.email}`,
              },
              {
                icon: <Clock size={20} className="text-orange-500" />,
                title: 'Business Hours',
                lines: ['Mon – Sat: 9:00 AM – 6:30 PM', 'Sunday: Closed'],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">{item.title}</p>
                  {item.lines.map((line, i) =>
                    item.link ? (
                      <a key={i} href={item.link} className="block text-sm text-gray-600 hover:text-orange-500 transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-sm text-gray-600">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* GST badge */}
            <div className="bg-navy-900 rounded-xl p-5 text-center" style={{ backgroundColor: '#0a0e50' }}>
              <p className="text-xs text-blue-300 font-mono uppercase tracking-widest mb-1">GST Number</p>
              <p className="text-white font-mono font-bold tracking-widest">{companyInfo.gst}</p>
            </div>
          </div>

          {/* ── Enquiry Form ── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Enquiry Sent!</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Thank you for reaching out. Our engineering team will review your requirements and get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', product: '', message: '' }) }}
                    className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-orange-400 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-2xl text-gray-900 mb-2">Send an Enquiry</h2>
                  <p className="text-gray-400 text-sm mb-8">Fields marked <span className="text-orange-500">*</span> are required.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                          Phone <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98xxx xxxxx"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                          Email <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Product / Service of Interest</label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50 text-gray-600"
                      >
                        <option value="">Select a product…</option>
                        {[
                          'Air Handling Units',
                          'Air Washer Units',
                          'Process AHU',
                          'Fan Coil Units',
                          'Centrifugal Fans',
                          'Axial Flow Fans',
                          'Industrial Exhaust Fans',
                          'Air Coolers',
                          'Cooling & Heating Coils',
                          'Dx-Coils',
                          'Heat Exchangers',
                          'Turnkey Project',
                          'Other Accesories & Services',
                        ].map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                        Message / Requirements <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your HVAC requirements, capacity, application, or any specific technical needs…"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 uppercase tracking-wider text-sm shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
                    >
                      Send Enquiry <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ──────────────────────────────────────────────── */}
      <section className="h-80 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-900 text-center px-6" style={{ backgroundColor: '#0a0e50' }}>
          <div className="text-5xl mb-4">📍</div>
          <p className="text-white font-display font-bold text-xl mb-2">Office</p>
          <p className="text-blue-300 text-sm max-w-md">
            {companyInfo.office}
          </p>
          <a
            href={`https://maps.app.goo.gl/qvy8G7Z8gHwNQUPJ9`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm uppercase tracking-wider"
          >
            <MapPin size={14} /> Open in Google Maps
          </a>
        </div>
      </section>
      <br />
      <section className="h-80 bg-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-900 text-center px-6" style={{ backgroundColor: '#0a0e50' }}>
          <div className="text-5xl mb-4">📍</div>
          <p className="text-white font-display font-bold text-xl mb-2">Works</p>
          <p className="text-blue-300 text-sm max-w-md">
            {companyInfo.Works}
          </p>
          <a
            href={`https://maps.app.goo.gl/wNmEgV1gLn1nkjTP6`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm uppercase tracking-wider"
          >
            <MapPin size={14} /> Open in Google Maps
          </a>
        </div>
        </section>
    </div>
  )
}