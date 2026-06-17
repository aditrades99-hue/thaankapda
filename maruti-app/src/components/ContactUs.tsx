"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Store } from "lucide-react";

export function ContactUs() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Connect With Us</h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
            Visit our showroom or reach out to us directly. We are always ready to fulfill your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-serif text-gold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-full text-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-wider mb-1">Our Location</h4>
                    <a href="https://www.google.com/maps?hl=en-GB&mat=Cdqt6FeNO6ByElcBTVDHnvS7hbIyBDkVSaSdNZK8n9xh7n4sl3g5RLuoH9lzeb9RxO13Es2r6qrANyV3bTSM5wWcYzPBfOB6mBCBYH2Eq2NKgxtp66r8Xqr11bVw9kLRjIsaCAcGU1SHAL9B&authuser=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KRMNLbHsGes5MV7_1v57qTSs&daddr=%E0%A4%A8%E0%A4%AF%E0%A4%BE%E0%A4%81+%E0%A4%B8%E0%A4%A1%E0%A4%95,+Kathmandu+44600" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm leading-relaxed hover:text-gold transition-colors inline-block">
                      Maruti Textile Empire<br/>
                      New Road, Kathmandu, Nepal<br/>
                      (Delivery available across Nepal & India)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-full text-gold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-wider mb-1">Phone / WhatsApp</h4>
                    <a href="https://wa.me/9779811222021" className="text-zinc-400 text-sm hover:text-gold transition-colors">
                      +977 9811222021
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-serif text-gold mb-6">Social & Profiles</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://instagram.com/thankapda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-full transition-colors border border-zinc-800 hover:border-gold/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="text-sm font-bold tracking-wider">@thankapda</span>
                </a>
                <a href="https://www.facebook.com/people/Maruti-Textile-Empire/61570758446756/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-full transition-colors border border-zinc-800 hover:border-gold/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="text-sm font-bold tracking-wider">Facebook Page</span>
                </a>
                <a href="https://g.page/r/CV7_1v57qTSsEBM/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gold hover:bg-white text-black px-6 py-3 rounded-full transition-colors shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                  <Store className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-wider uppercase">Google Review</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-zinc-800 relative shadow-xl"
          >
            {/* Interactive Google Maps Embed (Replace src with actual Maps iframe URL) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.857353934944!2d85.312329!3d27.708317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
