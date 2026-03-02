"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Kenya&apos;s trusted motor rewinding experts — serving industrial clients since 2007
        </p>
        <div className="inline-flex gap-1 items-center">
          <a href="#contact" onClick={close}>Get a Free Quote</a>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5 bg-[#EAEEFE]/80">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Trium Solutions Limited" height={130} width={130} />
            <button
              className="md:hidden p-1 text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#about" className="hover:text-black transition-colors">About</a>
              <a href="#services" className="hover:text-black transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-black transition-colors">Clients</a>
              <a href="#contact" className="hover:text-black transition-colors">Contact</a>
              <a
                href="#contact"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              >
                Get a Quote
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#F1F1F1] shadow-md">
          <div className="container py-6 flex flex-col gap-5 text-black/70 text-[15px]">
            <a href="#about" onClick={close} className="hover:text-black transition-colors">About</a>
            <a href="#services" onClick={close} className="hover:text-black transition-colors">Services</a>
            <a href="#testimonials" onClick={close} className="hover:text-black transition-colors">Clients</a>
            <a href="#contact" onClick={close} className="hover:text-black transition-colors">Contact</a>
            <a href="#contact" onClick={close} className="btn btn-primary w-full justify-center mt-1">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
