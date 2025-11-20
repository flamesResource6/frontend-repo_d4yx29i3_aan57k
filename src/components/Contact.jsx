export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-zinc-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Start Your Fitness Journey</h2>
            <p className="text-white/75 mt-3">Visit us, call us, or drop a message—our team will guide you through the best plan for your goals.</p>

            <div className="mt-6 grid gap-3 text-white/80">
              <p><span className="text-white">Address:</span> 123, Wellness Avenue, AnandaNiketan, IN</p>
              <p><span className="text-white">Contact:</span> +91 98765 43210</p>
              <p><span className="text-white">Opening Hours:</span> Mon–Sat: 5:30 AM – 10:00 PM • Sun: 7:00 AM – 1:00 PM</p>
            </div>

            <div className="mt-6 h-64 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.116100673!2d72.7410996!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU2LjAiTiA3MsKwNDUnNTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <form className="grid gap-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-amber-400" placeholder="Your name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-amber-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone</label>
                  <input type="tel" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-amber-400" placeholder="+91" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-amber-400" placeholder="Tell us your goals"></textarea>
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-amber-500 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(255,80,80,0.35)] hover:opacity-95 transition">
                Send Message
              </button>
              <p className="text-xs text-white/60">By submitting, you agree to be contacted by our team.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
