const photos = [
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574689049865-9837f3d7f1cc?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2060&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Gallery</h2>
          <p className="text-white/70 mt-2">Spaces, energy, and real transformations.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img src={src} alt={`Gallery ${i+1}`} className="h-56 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
