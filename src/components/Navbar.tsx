"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-10 flex justify-between items-center ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent text-white"
      }`}
    >
          <Link href="/" className="flex items-center space-x-3 md:space-x-5 group">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4985cd81-6fd7-4dbd-b950-d6e82ea1ba14/Garlicon-removebg-preview-1772660104887.png?width=8000&height=8000&resize=contain" 
              alt="Garlicon Logo"
              className={`w-10 h-10 md:w-16 md:h-16 object-contain transition-all duration-500 group-hover:scale-110 ${
                isScrolled ? "brightness-0" : "invert brightness-0"
              }`}
            />
            <span className="text-2xl md:text-4xl font-serif tracking-[0.2em] md:tracking-[0.3em] font-medium uppercase whitespace-nowrap">
              Garlicon
            </span>
          </Link>
      <div className="flex space-x-6 md:space-x-12">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`text-[10px] md:text-sm tracking-[0.2em] uppercase transition-colors ${
              pathname === link.path 
                ? (isScrolled ? "text-gray-900 font-bold" : "text-white font-bold")
                : (isScrolled ? "text-gray-500 hover:text-gray-900" : "text-white/60 hover:text-white")
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
