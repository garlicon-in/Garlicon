import Image from "next/image";

const products = [
  {
    id: 1,
    name: "AA",
    description: "Classic large-bulb variety with a bold, pungent flavour. Ideal for everyday culinary use.",
    pricePerKg: 36.00,
    image: "https://images.unsplash.com/photo-1773956538620-04930194fe93?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "AAA",
    description: "Striking purple-streaked bulbs with a rich, complex flavour. A favourite among chefs.",
    pricePerKg: 44.00,
    image: "https://images.unsplash.com/photo-1773956379025-d6e7777897c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "BOM",
    description: "Slow-fermented for weeks to produce a sweet, umami-rich flavour with a velvety texture.",
    pricePerKg: 111.00,
    image: "https://images.unsplash.com/photo-1773956268887-9f3f6f54b6fc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Datra",
    description: "Oversized mild-flavoured cloves, perfect for roasting whole or slicing thinly.",
    pricePerKg: 33.00,
    image: "https://images.unsplash.com/photo-1773956958736-b529339a7d5a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Kuli",
    description: "Traditionally cold-smoked over wood chips, delivering a deep, smoky aromatic depth.",
    pricePerKg: 51.00,
    image: "https://images.unsplash.com/photo-1773956840856-d7f307a0d07a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Fresh Red Onion",
    description: "Slow-roasted to golden perfection, unlocking a naturally sweet, caramelised richness.",
    pricePerKg: 23.00,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Fresh Indian Red Onion",
    description: "Foraged from woodland meadows, offering a delicate, fresh flavour unlike any cultivated variety.",
    pricePerKg: 8.00,
    image: "https://images.unsplash.com/photo-1683355739329-cea18ba93f02?q=80&w=1200&auto=format&fit=crop",
  },
];

const WHATSAPP_NUMBER = "9443762561"; // Replace with actual number

function buildWhatsAppLink(productName: string, pricePerKg: number) {
  const message = encodeURIComponent(
    `Hello Garlicon! I'm interested in enquiring about *${productName}* (₹${pricePerKg.toFixed(2)}/kg). Could you please provide more details?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// WhatsApp SVG icon reused across cards
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 0 0 .613.614l6.115-1.603A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.888a9.87 9.87 0 0 1-5.031-1.376l-.36-.214-3.733.979.997-3.647-.235-.374A9.86 9.86 0 0 1 2.112 12C2.112 6.53 6.53 2.112 12 2.112S21.888 6.53 21.888 12 17.47 21.888 12 21.888z" />
    </svg>
  );
}

export default function ProductsPage() {
  // 7 items: first 6 fill a 3-col grid evenly; last item is centred
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24 px-6 text-center bg-[#f9f9f9] border-b border-gray-100">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-gray-400">
          Our Range
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-serif font-light tracking-tight text-gray-900">
          The Collection
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-gray-400 font-light text-sm md:text-base leading-relaxed">
          Seven exceptional varieties. Each bulb selected for purity, potency, and provenance.
        </p>
        <div className="mt-8 w-px h-12 bg-gray-200 mx-auto" />
      </section>

      {/* Product Grid — first 6 items */}
      <section className="pt-20 md:pt-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 7th item — centred on its own row */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <ProductCard product={products[6]} />
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-16 md:py-20 mt-20 md:mt-28 text-center border-t border-gray-100 px-6">
        <p className="text-gray-400 text-xs md:text-sm font-light tracking-widest uppercase">
          Minimum order quantities apply &nbsp;·&nbsp; Bulk pricing available &nbsp;·&nbsp; Nationwide delivery
        </p>
      </section>
    </div>
  );
}

type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
      {/* Image — always full colour */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8 space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-serif text-gray-900 tracking-tight">
            {product.name}
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline space-x-1 pt-1">
          <span className="text-2xl md:text-3xl font-serif font-light text-gray-900">
            ₹{product.pricePerKg.toFixed(2)}
          </span>
          <span className="text-xs text-gray-400 tracking-widest uppercase">/ kg</span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100" />

        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppLink(product.name, product.pricePerKg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center space-x-3 w-full py-4 bg-black text-white text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#25D366] transition-colors duration-500"
        >
          <WhatsAppIcon />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
