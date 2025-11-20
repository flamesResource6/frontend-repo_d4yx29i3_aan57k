import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2060&auto=format&fit=crop"
          alt="Gym hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,80,80,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,180,80,0.2),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80 text-xs tracking-wide">Premium Fitness • Clean • Modern • Energetic</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-md">
            Transform Strength Into Lifestyle.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            Train with discipline. Grow with focus. Achieve with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-amber-500 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(255,80,80,0.35)] hover:opacity-95 transition">Join Now</a>
            <a href="#equipment" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white border border-white/20 hover:bg-white/10 transition">Explore Facilities</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
