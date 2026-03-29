import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1628998092164-4365d9ed0d29?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Garlic Bulbs"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                    priority
                  />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
              </div>
            
            <div className="relative z-10 text-center text-white space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <h1 className="text-6xl md:text-9xl font-serif font-light tracking-tighter uppercase px-4">
                Garlicon
              </h1>
              <p className="text-xs md:text-2xl font-light tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-90 max-w-3xl mx-auto px-8 leading-relaxed">
                The Art of Professional Cultivation
              </p>
              <div className="pt-8 md:pt-12">
                <Link 
                  href="/about" 
                  className="inline-block px-10 md:px-16 py-4 md:py-5 border-2 border-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-700 text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold"
                >
                  Discover the Brand
                </Link>
              </div>
            </div>

        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
          <div className="w-[1px] h-16 bg-white" />
        </div>
      </section>

        {/* Featured Section */}
        <section className="py-20 md:py-32 px-6 md:px-20 bg-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 md:space-y-8 max-w-lg animate-in fade-in slide-in-from-left-12 duration-1000">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-gray-400">Our Essence</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-gray-900">
              Uncompromising Quality, <br className="hidden md:block" />Rooted in Tradition.
            </h2>
            <p className="text-gray-500 leading-relaxed font-light text-base md:text-lg">
              At Garlicon, we don't just grow garlic; we curate it. Our bulbs are selected for their symmetry, flavor profile, and architectural beauty, bringing a premium culinary experience to the most discerning kitchens.
            </p>
            <div className="pt-2 md:pt-4">
               <Link href="/about" className="group flex items-center space-x-4 text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold">
                 <span>Learn more</span>
                 <div className="w-8 h-[1px] md:w-12 bg-gray-300 group-hover:w-20 transition-all duration-500" />
               </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-sm shadow-xl md:shadow-2xl">
             <Image
              src="https://images.unsplash.com/photo-1665913063124-5246fe97ee50?q=80&w=1964&auto=format&fit=crop"
              alt="Peeled Garlic Cloves"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
            />
          </div>
        </section>

        {/* Visual Quote Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center bg-[#f9f9f9] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=2070&auto=format&fit=crop"
              alt="Garlic Field Backdrop"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 px-6">
            <blockquote className="text-2xl md:text-4xl font-serif italic text-gray-800 max-w-4xl mx-auto leading-relaxed">
              "Simplification is the ultimate sophistication. In every bulb, we find the perfection of nature's design."
            </blockquote>
            <cite className="block mt-6 md:mt-8 text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-400 not-italic">
              — The Garlicon Philosophy
            </cite>
          </div>
        </section>

        {/* Product Gallery Teaser */}
        <section className="py-20 md:py-32 px-6 md:px-16 bg-[#f9f9f9]">
          <div className="text-center mb-14 md:mb-20">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-gray-400">The Collection</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif font-light text-gray-900 tracking-tight">
              Seven Varieties. One Standard.
            </h2>
            <p className="mt-5 max-w-lg mx-auto text-gray-400 font-light text-sm md:text-base leading-relaxed">
              From classic white pearl to rare wild garlic — each variety priced per kilogram and available for direct enquiry.
            </p>
          </div>

          {/* Preview cards row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 md:gap-4 max-w-6xl mx-auto">
            {[
              { name: "AA", price: "₹36.00", img: "https://images.unsplash.com/photo-1773956538620-04930194fe93?q=80&w=600&auto=format&fit=crop" },
              { name: "AAA", price: "₹44.00", img: "https://images.unsplash.com/photo-1773956379025-d6e7777897c3?q=80&w=600&auto=format&fit=crop" },
              { name: "BOM", price: "₹111.00", img: "https://images.unsplash.com/photo-1773956268887-9f3f6f54b6fc?q=80&w=600&auto=format&fit=crop" },
              { name: "Datra", price: "₹33.00", img: "https://images.unsplash.com/photo-1773956958736-b529339a7d5a?q=80&w=600&auto=format&fit=crop" },
              { name: "Kuli", price: "₹51.00", img: "https://images.unsplash.com/photo-1773956840856-d7f307a0d07a?q=80&w=600&auto=format&fit=crop" },
              { name: "Fresh Red Onion", price: "₹23.00", img: "https://images.unsplash.com/photo-1760192499223-0dc15a4ad3c5?q=80&w=600&auto=format&fit=crop" },
              { name: "Fresh Indian Red Onion", price: "₹8.00", img: "https://images.unsplash.com/photo-1683355739329-cea18ba93f02?q=80&w=600&auto=format&fit=crop" },
            ].map((p) => (
              <div key={p.name} className="group relative overflow-hidden aspect-[3/4] bg-gray-100">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                  <p className="text-white text-[9px] md:text-[10px] font-semibold tracking-widest uppercase leading-tight">{p.name}</p>
                  <p className="text-white/70 text-[8px] md:text-[9px] tracking-widest">{p.price} / kg</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/products"
              className="inline-block px-10 md:px-14 py-4 md:py-5 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold"
            >
              View Full Collection
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-white text-center px-6">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 md:mb-12 text-gray-900 tracking-tight">Interested in a partnership?</h2>
          <Link
            href="/contact"
            className="inline-block w-full md:w-auto px-12 md:px-16 py-5 md:py-6 bg-black text-white hover:bg-gray-800 transition-all duration-500 text-[10px] md:text-sm tracking-[0.4em] uppercase"
          >
            Get in Touch
          </Link>
        </section>

    </div>
  );
}
