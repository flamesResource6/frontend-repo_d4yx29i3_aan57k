const plans = [
  {
    name: 'Basic',
    badge: 'Monthly',
    price: '₹999',
    features: ['Gym floor access', 'Cardio zone', 'Locker facility', 'Group access restricted'],
    highlight: false,
  },
  {
    name: 'Standard',
    badge: 'Quarterly • Most Popular',
    price: '₹2499',
    features: ['All Basic features', 'One fitness assessment', 'Two PT sessions', 'Group classes access'],
    highlight: true,
  },
  {
    name: 'Premium',
    badge: 'Yearly',
    price: '₹7999',
    features: ['All Standard features', 'Monthly assessments', 'Nutrition guidance', 'Priority support'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_10%,rgba(255,180,80,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Membership Plans</h2>
          <p className="text-white/70 mt-2">Choose a plan that matches your momentum.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl p-6 border ${p.highlight ? 'border-amber-400 shadow-[0_0_40px_rgba(255,200,80,0.15)] bg-white/5' : 'border-white/10 bg-white/5'}`}>
              {p.highlight && (
                <div className="absolute -top-3 right-4 text-xs bg-amber-400 text-black px-3 py-1 rounded-full font-bold">Most Popular</div>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-white/70 text-sm">{p.badge}</p>
                  <h3 className="text-2xl font-bold mt-1">{p.name} Plan</h3>
                </div>
                <div className="text-3xl font-extrabold text-amber-400">{p.price}</div>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition ${p.highlight ? 'bg-amber-400 text-black hover:opacity-90' : 'border border-white/20 text-white hover:bg-white/10'}`}>Join {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
