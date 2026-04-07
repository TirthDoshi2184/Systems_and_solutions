import { Award, Settings, Shield, Zap, Clock, Headphones } from 'lucide-react'

const iconMap = {
  Award,
  Settings,
  Shield,
  Zap,
  Clock,
  HeadphonesIcon: Headphones,
}

export default function FeatureCard({ feature, light = false }) {
  const Icon = iconMap[feature.icon] || Settings

  return (
    <div className={`group p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
      light
        ? 'bg-white/5 hover:bg-white/10 border border-white/10'
        : 'bg-white border border-gray-100 shadow-sm hover:shadow-lg'
    }`}>
      <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
        <Icon size={24} className="text-orange-500" />
      </div>
      <h3 className={`font-display font-bold text-lg mb-2 ${light ? 'text-white' : 'text-gray-900'}`}>
        {feature.title}
      </h3>
      <p className={`text-sm leading-relaxed ${light ? 'text-blue-200' : 'text-gray-500'}`}>
        {feature.desc}
      </p>
    </div>
  )
}