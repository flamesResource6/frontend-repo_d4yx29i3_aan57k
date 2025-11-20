const items = [
  { title: 'Treadmills', img: 'https://images.unsplash.com/photo-1596357395105-85e9d2a2154a?q=80&w=1974&auto=format&fit=crop' },
  { title: 'Dumbbells & Barbells', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2060&auto=format&fit=crop' },
  { title: 'Smith Machine', img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop' },
  { title: 'Stationary Bikes', img: 'https://images.unsplash.com/photo-1546484959-f9a46b1c1b88?q=80&w=2069&auto=format&fit=crop' },
  { title: 'Chest & Leg Press', img: 'https://images.unsplash.com/photo-1598971802278-3b2d48e7f1b6?q=80&w=1974&auto=format&fit=crop' },
  { title: 'Cable Machine', img: 'https://images.unsplash.com/photo-1598971639058-32bdb747eb53?q=80&w=1974&auto=format&fit=crop' },
  { title: 'Cross Trainers', img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1974&auto=format&fit=crop' },
  { title: 'Functional Setup', img: 'https://images.unsplash.com/photo-1596357395033-f796f7681c1e?q=80&w=1974&auto=format&fit=crop' },
]

export default function Equipment() {
  return (
    <section id="equipment" className="relative bg-black text-white">
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Our Equipment & Facilities</h2>
          <p className="text-white/70 mt-2">Built for performance, safety, and comfort.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-2xl overflow-hidden border border-white/10">
              <img src={it.img} alt={it.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="font-semibold">{it.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
