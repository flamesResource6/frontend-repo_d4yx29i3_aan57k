import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Equipment from './components/Equipment'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Pricing />
        <Equipment />
        <Trainers />
        <Gallery />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} AnandaNiketan GYM. All rights reserved.</p>
          <div className="text-xs text-white/50">Built with passion and discipline.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
