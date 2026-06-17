import Link from "next/link";
import { Hero3D } from "@/components/Hero3D";
import { PriceCalculator } from "@/components/PriceCalculator";
import { SocialProof } from "@/components/SocialProof";
import { FabricVisualizer } from "@/components/FabricVisualizer";
import { Testimonials } from "@/components/Testimonials";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="pt-0">
      {/* Hero Section with 3D Background */}
      <section id="collections" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-6 fade-in-up visible pointer-events-none mt-16">
          <span className="px-6 py-2 border border-gold/30 rounded-full text-sm uppercase tracking-widest text-gold bg-black/40 backdrop-blur-md shadow-lg pointer-events-auto">
            Blend of Indian Culture and Nepali Culture
          </span>
          <h1 className="font-serif text-5xl md:text-[80px] text-white drop-shadow-2xl tracking-tight leading-none mb-4">
            Fabric Rolls &amp; Ladies <span className="text-gold italic">Suits</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto bg-black/30 p-6 rounded-2xl backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/5 pointer-events-auto">
            Experience the microscopic detail of our premium fabrics. From exquisite silk to every type of fabric roll and ladies unstitched suits. We deal in all kinds of textiles to perfectly suit your business.
          </p>
          <div className="flex gap-4 mt-4 pointer-events-auto">
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Get a Quote
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black/50 backdrop-blur-md border border-rose-500/50 text-rose-500 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:scale-105"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Interactive 3D Visualizer */}
      <section id="wholesale" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 bg-zinc-950 text-white rounded-t-[3rem] -mt-10 border-t border-zinc-800">
        <div className="text-center mb-16 fade-in-up visible">
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4">Fabric Rolls and Ladies Unstitched Suits</h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
            Drag and interact with our 3D fabric models. We deal with every type of fabric to meet your business and boutique needs.
          </p>
        </div>
        <FabricVisualizer />
      </section>

      {/* Live Price Calculator */}
      <PriceCalculator />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Instagram Social Proof */}
      <SocialProof />
      
      {/* Connect Us Section */}
      <ContactUs />

      <footer className="bg-zinc-950 w-full py-16 border-t border-zinc-800 text-center relative z-10">
        <div id="about" className="flex flex-col items-center gap-6 relative z-10">
          <span className="font-serif text-4xl md:text-5xl text-rose-500 font-bold tracking-wider uppercase">
            Maruti Textile Empire
          </span>
          <p className="text-sm md:text-base text-zinc-400 max-w-lg">Leading wholesaler of Indian and Nepali culture fabric rolls, ladies unstitched suits, and bespoke textiles since 1995.</p>
          <div className="w-32 h-[2px] bg-rose-500/30 my-6" />
          <div className="flex flex-col gap-2">
            <p className="text-sm text-zinc-400 font-medium">Owned by Aditya Kumar Sablaka</p>
            <p className="text-xs text-zinc-500">© 2026 Maruti Textile Empire. All Rights Reserved.</p>
            <p className="text-xs text-zinc-600 mt-2">
              Designed with love by <span className="text-gold">Addigen Agency</span> and created by <a href="https://builtwithadi.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">builtwithadi</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
