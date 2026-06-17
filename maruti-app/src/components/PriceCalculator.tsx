"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Info } from "lucide-react";

export function PriceCalculator() {
  const [estimatedPrice, setEstimatedPrice] = useState<number>(5000);
  
  const savings = estimatedPrice * 0.15;
  const finalTotal = estimatedPrice - savings;

  const whatsappMessage = `Hello Maruti Textile Empire! I am interested in placing an order. The goods price is around NPR ${estimatedPrice.toFixed(0)}, and after my 15% discount, it comes down to NPR ${finalTotal.toFixed(0)}. Please share more details!`;
  const whatsappUrl = `https://wa.me/9779811222021?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="calculator" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-royal-maroon/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4 tracking-wide">Calculate Your Savings</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Enter the estimated price of the goods you want to buy and instantly see your massive wholesale discount!
            </p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Controls */}
              <div className="space-y-8 flex flex-col justify-center">
                <div>
                  <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-2">
                      Estimated Goods Price (NPR)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-bold">NPR</span>
                      <input
                        type="number"
                        min="0"
                        value={estimatedPrice}
                        onChange={(e) => setEstimatedPrice(Number(e.target.value))}
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl py-4 pl-14 pr-4 text-xl font-mono text-white focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Input the market price of the fabric rolls or ladies suits you wish to order.
                  </p>
                </div>
              </div>

              {/* Output Panel */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
                
                <div>
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <span className="uppercase tracking-widest text-sm font-bold">Your Discounted Price</span>
                  </div>
                  <h3 className="text-5xl font-serif text-white mb-4">
                    NPR {finalTotal.toFixed(0)}
                  </h3>
                  
                  <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4 mb-8">
                    <p className="text-green-400 font-semibold text-center text-sm uppercase tracking-wider">
                      🎉 You save 15% (NPR {savings.toFixed(0)})!
                    </p>
                  </div>
                </div>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-white text-black py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Save Now
                </a>

                <div className="mt-4 flex items-start gap-2 text-xs text-zinc-500">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>Disclaimer: It may vary by products and time of buying.</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
