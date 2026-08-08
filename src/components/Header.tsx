"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUp } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/90 shadow-lg backdrop-blur-md"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            onClick={handleLinkClick}
            className="text-xl font-bold tracking-wide text-white transition hover:text-yellow-400 sm:text-2xl"
          >
            Artisan Studio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 lg:text-base ${
                  scrolled
                    ? "text-gray-300 hover:text-white"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-5 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block border-b border-white/10 py-3.5 text-sm font-medium text-gray-200 transition hover:text-white last:border-b-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Back To Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-25 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-xl transition-all duration-300 hover:bg-gray-800 sm:left-8 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
