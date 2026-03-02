import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="Trium Solutions Limited" height={40} className="relative" />
        </div>
        <p className="mt-4 text-white/40 text-xs">
          Trium Solutions Limited — Motor Rewinding &amp; Electrical Services, Nairobi, Kenya
        </p>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Clients</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-2 md:gap-4 text-xs text-white/50">
          <span>Kitengela, Jua Kali Road, Nairobi &bull; P.O. Box 22070-0200</span>
          <span className="hidden md:inline">|</span>
          <a href="tel:+254768388710" className="hover:text-white transition-colors">
            +254 768 388 710
          </a>
          <span className="hidden md:inline">|</span>
          <a href="tel:+254735800240" className="hover:text-white transition-colors">
            +254 735 800 240
          </a>
          <span className="hidden md:inline">|</span>
          <a href="mailto:thardeusokoth1993@outlook.com" className="hover:text-white transition-colors">
            thardeusokoth1993@outlook.com
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 Trium Solutions Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};
