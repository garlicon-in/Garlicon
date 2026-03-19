import Image from "next/image";

export default function AboutPage() {
  return (
      <div className="pt-32 pb-24 px-6 md:px-20 min-h-screen bg-white overflow-hidden">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-20 md:mb-32 space-y-4 md:space-y-6">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-gray-400">Our Story</span>
          <h1 className="text-4xl md:text-7xl font-serif leading-tight text-gray-900 tracking-tight">
            Heritage and <br />Modernity.
          </h1>
          <div className="w-12 md:w-16 h-[1px] bg-gray-200 mx-auto mt-8 md:mt-12" />
        </header>
  
        {/* Hero Image Section */}
        <section className="mb-24 md:mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-sm group">
            <Image
              src="https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=2070&auto=format&fit=crop"
              alt="Handful of Garlic Bulbs"
              fill
              className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="space-y-6 md:space-y-8 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900">The Roots of Garlicon</h2>
            <p className="text-gray-500 font-light leading-relaxed text-base md:text-lg">
              Garlicon began as a small boutique farm dedicated to the single-minded pursuit of the world's most aromatic and aesthetically perfect garlic. Over the years, our commitment to quality has evolved into a global brand that represents professional excellence in cultivation.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base md:text-lg">
              Every bulb we produce undergoes a rigorous selection process, ensuring it meets our standard for density, oil content, and flavor intensity. We believe that true luxury lies in the simplest of ingredients, perfected.
            </p>
          </div>
        </section>
  
        {/* Philosophy Section */}
        <section className="bg-[#f9f9f9] -mx-6 md:-mx-20 py-20 md:py-32 px-6 md:px-20 mb-24 md:mb-40 text-center">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
              Our approach is built on <br className="hidden md:block" />three foundational pillars.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
              {[
                { title: "Precision", desc: "Every step of the growth cycle is monitored with artistic attention to detail." },
                { title: "Purity", desc: "No synthetic additives. Just clean soil, pure water, and natural sunlight." },
                { title: "Passion", desc: "A deep-seated love for the craft that transcends the ordinary." }
              ].map((pillar) => (
                <div key={pillar.title} className="space-y-3 md:space-y-4">
                  <h3 className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Team / Mission Statement */}
        <section className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12 pb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">Joining the Garlicon Experience</h2>
          <p className="text-gray-500 font-light leading-relaxed text-lg md:text-xl">
            We invite you to experience the difference that professional cultivation makes. Garlicon is more than a product; it's a testament to what is possible when nature meets unyielding standards.
          </p>
          <div className="w-12 md:w-16 h-[1px] bg-gray-200 mx-auto" />
        </section>

    </div>
  );
}
