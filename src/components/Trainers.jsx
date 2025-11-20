const trainers = [
  {
    name: 'Aarav Mehta',
    role: 'Head Coach',
    certs: 'ACE, CSCS',
    bio: 'Strength and conditioning specialist with 8+ years coaching athletes and professionals.',
    img: 'https://images.unsplash.com/photo-1558222217-3f96b2384cc8?q=80&w=1887&auto=format&fit=crop'
  },
  {
    name: 'Isha Kapoor',
    role: 'Personal Trainer',
    certs: 'ISSA, PN1',
    bio: 'Personalized fat-loss and mobility programs with a focus on sustainable habits.',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1887&auto=format&fit=crop'
  },
  {
    name: 'Rohan Das',
    role: 'Performance Coach',
    certs: 'NSCA-CPT',
    bio: 'Speed, agility, and power training for athletes and fitness enthusiasts.',
    img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a50?q=80&w=1887&auto=format&fit=crop'
  }
]

export default function Trainers() {
  return (
    <section id="trainers" className="relative bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Meet Our Trainers</h2>
          <p className="text-white/70 mt-2">Certified professionals committed to your goals.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="h-60 overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <span className="text-xs bg-amber-400 text-black px-2 py-1 rounded-full font-bold">{t.certs}</span>
                </div>
                <p className="text-amber-300/90 mt-1 text-sm">{t.role}</p>
                <p className="text-white/75 text-sm mt-3">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
