export default function StatCounter({ value, label }) {
  return (
    <div className="text-center group">
      <div className="font-display font-black text-5xl md:text-6xl text-gradient leading-none mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">{label}</div>
    </div>
  )
}