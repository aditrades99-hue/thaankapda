"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface InstaPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
}

export function SocialProof() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const res = await fetch("/api/instagram");
        const json = await res.json();
        if (json.data) {
          setPosts(json.data);
        }
      } catch (error) {
        console.error("Failed to load Instagram feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-800 text-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-maroon/20 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <a 
            href="https://instagram.com/thankapda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full mb-6 shadow-md hover:border-pink-500/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-500"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors">@thankapda</span>
          </a>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Woven Into <span className="text-gold italic">Culture</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            See how our premium fabrics are being styled and utilized by top designers and fashion boutiques worldwide.
          </motion.p>
        </div>

        {/* Content Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="w-12 h-12 border-4 border-zinc-800 border-t-gold rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {posts.map((post, idx) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 block shadow-xl"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900">
                {post.media_url.endsWith('.mp4') ? (
                  <video 
                    src={post.media_url} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img 
                    src={post.media_url} 
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-zinc-200 line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                    <span className="inline-block mt-3 text-gold text-xs font-bold uppercase tracking-wider">
                      View on Instagram
                    </span>
                  </div>
                </div>
              </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
