import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BUSINESS_NAME = 'Jon Baer Photography';
const TAGLINE = 'Cinematic storytelling through still moments.';

const gallery = [
  {src: 'https://images.unsplash.com/photo-1504198266286-1659872e6590?w=1600&q=80&auto=format&fit=crop', alt: 'Action sports shot'},
  {src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80&auto=format&fit=crop', alt: 'Senior portrait'},
  {src: 'https://images.unsplash.com/photo-1500336624523-d727130c3328?w=1600&q=80&auto=format&fit=crop', alt: 'Evening stadium lights'},
  {src: 'https://images.unsplash.com/photo-1518544881609-3c9e6aa2a6b5?w=1600&q=80&auto=format&fit=crop', alt: 'Cinematic close-up portrait'},
  {src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop', alt: 'Team in huddle'},
  {src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80&auto=format&fit=crop', alt: 'Golden hour portrait'},
];

export default function PhotographyWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white font-bold">JB</div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">{BUSINESS_NAME}</h1>
              <p className="text-xs opacity-70 italic">{TAGLINE}</p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold text-white tracking-tight leading-tight">{BUSINESS_NAME}</h2>
            <p className="mt-5 text-slate-400 text-lg max-w-lg">Subtle tones. Cinematic light. Real emotion. I capture moments that feel like scenes from your favorite film — whether on the field, in studio, or under stadium lights.</p>

            <div className="mt-8 flex gap-4">
              <Button className="bg-slate-800 hover:bg-slate-700">View Portfolio</Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">Pricing</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <img src={gallery[0].src} alt={gallery[0].alt} className="w-full h-96 object-cover brightness-90" />
          </motion.div>
        </section>

        <section id="portfolio" className="mt-24">
          <h3 className="text-3xl font-semibold text-white mb-2">Portfolio</h3>
          <p className="text-slate-400">A cinematic blend of sports and lifestyle moments — rich tones, real emotion, and intentional composition.</p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <motion.figure key={i} whileHover={{ scale: 1.03 }} className="overflow-hidden rounded-lg">
                <img src={g.src} alt={g.alt} className="w-full h-56 object-cover brightness-90 hover:brightness-110 transition" />
              </motion.figure>
            ))}
          </div>
        </section>

        <section id="about" className="mt-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-white mb-4">About Jon</h3>
            <p className="text-slate-400 leading-relaxed">I’m Jon — a photographer driven by atmosphere, emotion, and story. My work blends the precision of sports imagery with the mood of cinematic portraiture. Every session is a collaboration to create something authentic and visually timeless.</p>
          </div>

          <div className="rounded-lg overflow-hidden border border-slate-800 shadow-lg">
            <img src={gallery[5].src} alt="About portrait" className="w-full h-80 object-cover brightness-90" />
          </div>
        </section>

        <section id="contact" className="mt-32 bg-slate-900 border border-slate-800 rounded-xl p-10">
          <h3 className="text-3xl font-semibold text-white mb-3">Contact</h3>
          <p className="text-slate-400 mb-8">For bookings or inquiries, email <strong>hello@jonbaerphoto.com</strong> or fill out the form below.</p>

          <form className="grid md:grid-cols-2 gap-4">
            <input className="p-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" placeholder="Full name" />
            <input className="p-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" placeholder="Email" />
            <input className="p-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" placeholder="Phone (optional)" />
            <input className="p-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:ring-2 focus:ring-slate-600" placeholder="Preferred date" />
            <textarea className="p-3 bg-slate-800 border border-slate-700 rounded md:col-span-2 focus:outline-none focus:ring-2 focus:ring-slate-600" rows={4} placeholder="Tell me about your shoot" />
            <div className="md:col-span-2 flex gap-4">
              <Button type="submit" className="bg-white text-slate-900 hover:bg-slate-200">Send Request</Button>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-800 mt-24 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
      </footer>
    </div>
  );
}
