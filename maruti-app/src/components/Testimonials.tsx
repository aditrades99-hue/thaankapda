"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", role: "Boutique Owner", text: "The unstitched suits are of incredible quality. My customers absolutely love the fabric rolls from Maruti!" },
    { name: "Sunil Shrestha", role: "Retailer", text: "Best wholesale prices in Nepal and India. The blend of cultures in their designs is exactly what the market demands." },
    { name: "Anita K.", role: "Fashion Designer", text: "Every fabric I order is premium. Fast delivery and huge savings on bulk orders. Highly recommended!" },
  ];

  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800 text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Trusted by Hundreds</h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-xl relative group hover:border-gold/30 transition-colors"
            >
              <div className="flex gap-1 mb-4 text-gold">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-gold" />)}
              </div>
              <p className="text-zinc-300 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="text-white font-bold tracking-wider">{review.name}</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
