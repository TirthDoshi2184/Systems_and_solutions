export default function SectionTitle({ label, title, subtitle, light = false, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <span className={`inline-block text-xs font-mono font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded ${
          light
            ? 'bg-orange-500/20 text-orange-300'
            : 'bg-orange-100 text-orange-600'
        }`}>
          — {label} —
        </span>
      )}
      <h2 className={`font-display font-bold leading-none mb-3 ${
        light ? 'text-white' : 'text-gray-900'
      }`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base max-w-2xl leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-blue-200' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-orange-500 rounded ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}