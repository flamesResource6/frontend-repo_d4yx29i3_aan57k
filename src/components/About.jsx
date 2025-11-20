import { Dumbbell, HeartPulse, UserRoundCheck, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    desc: 'Build power and endurance with our extensive free-weights and machines.'
  },
  {
    icon: HeartPulse,
    title: 'Cardio Zone',
    desc: 'HIIT, treadmills, bikes, rowers—everything you need to sweat it out.'
  },
  {
    icon: UserRoundCheck,
    title: 'Personal Coaching',
    desc: 'Certified trainers offering goal-focused and tailored programs.'
  },
  {
    icon: BadgeCheck,
    title: 'Fitness Programs',
    desc: 'Strength, weight loss, mobility, and athlete performance tracks.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(255,80,80,0.08),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Why Choose AnandaNiketan GYM?</h2>
            <p className="text-white/80 leading-relaxed">
              We are a premium, hygiene-first fitness space designed to elevate your routine. With modern equipment, expert coaches, and an electric atmosphere, we help you turn consistency into results.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <p className="font-semibold">Certified Trainers</p>
                <p className="text-sm text-white/70 mt-1">Experienced, accredited professionals to guide every rep and step.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <p className="font-semibold">Hygiene-Focused</p>
                <p className="text-sm text-white/70 mt-1">Cleanliness protocols and regular sanitization across all zones.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <p className="font-semibold">Flexible Timings</p>
                <p className="text-sm text-white/70 mt-1">Early mornings to late evenings—train on your schedule.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <p className="font-semibold">Modern Machines</p>
                <p className="text-sm text-white/70 mt-1">Latest cardio, strength, and functional rigs for every goal.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 transition shadow">
                <f.icon className="w-8 h-8 text-amber-400" />
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-white/70 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
