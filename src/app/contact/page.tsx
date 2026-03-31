"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {/* Contact Information */}
        <div className="space-y-10 md:space-y-16 animate-in fade-in slide-in-from-left-12 duration-1000">
          <header className="space-y-4 md:space-y-6">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-gray-400">Get in Touch</span>
            <h1 className="text-4xl md:text-7xl font-serif leading-tight text-gray-900 tracking-tight">
              Let's Start a <br />Conversation.
            </h1>
          </header>
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-2 md:mb-4">Location</h3>
              <p className="text-lg md:text-xl font-light text-gray-900">Bengaluru, Karnataka, India</p>
            </div>
            <div>
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-2 md:mb-4">Contact</h3>
              <p className="text-lg md:text-xl font-light text-gray-900">garliconandco@gmail.com</p>
              <p className="text-lg md:text-xl font-light text-gray-900">+91 94437 62561</p>
            </div>
            <div>
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-2 md:mb-4">Inquiries</h3>
              <p className="text-lg md:text-xl font-light text-gray-900">Sales: sales@garlicon.com</p>
            </div>
          </div>
          
          <div className="pt-8 md:pt-12 flex space-x-8 md:space-x-12 opacity-40">
            <a href="https://www.instagram.com/garlicon.in" target="_blank" rel="noopener noreferrer"
              className="text-[10px] md:text-xs tracking-[0.2em] uppercase hover:opacity-100 transition-opacity">
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-in fade-in slide-in-from-right-12 duration-1000">
          <div className="space-y-8 md:space-y-12 bg-[#fafafa] p-6 md:p-12 rounded-sm border border-gray-100 shadow-sm">
            <div className="space-y-3 md:space-y-4">
              <label className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block ml-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:outline-none focus:border-black transition-colors text-base md:text-lg font-light text-gray-900"
                placeholder="Name"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <label className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:outline-none focus:border-black transition-colors text-base md:text-lg font-light text-gray-900"
                placeholder="email@example.com"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <label className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block ml-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:outline-none focus:border-black transition-colors text-base md:text-lg font-light text-gray-900 resize-none min-h-[120px] md:min-h-[150px]"
                placeholder="How can we help?"
              />
            </div>

            {status === "success" && (
              <p className="text-sm text-green-600 tracking-wide">✓ Message sent! We'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 tracking-wide">Something went wrong. Please try again or email us directly.</p>
            )}

            <div className="pt-4 md:pt-8">
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full py-5 md:py-6 bg-black text-white text-[10px] md:text-xs tracking-[0.5em] uppercase hover:bg-gray-800 transition-all duration-500 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}