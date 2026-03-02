"use client";
import vaneunits from "@/assets/vane-units.png";
import pistonunits from "@/assets/piston-units.png";
import servopumps from "@/assets/servo-pumps.png";
import motors from "@/assets/motors.png";
import coils from "@/assets/coils.png";
import pumps from "@/assets/pumps.png";
import acunits from "@/assets/ac-units.png";
import armatures from "@/assets/armatures.png";
import alternators from "@/assets/alternators.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <p className="text-center text-black/50 text-sm font-medium uppercase tracking-widest mb-6">
          Equipment &amp; Components We Service
        </p>
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={vaneunits} alt="Vane Units" className="logo-ticker-image" />
            <Image src={pistonunits} alt="Piston Units" className="logo-ticker-image" />
            <Image src={servopumps} alt="Servo Pumps" className="logo-ticker-image" />
            <Image src={motors} alt="Electric Motors" className="logo-ticker-image" />
            <Image src={coils} alt="Motor Coils" className="logo-ticker-image" />
            <Image src={pumps} alt="Industrial Pumps" className="logo-ticker-image" />
            <Image src={acunits} alt="AC Units" className="logo-ticker-image" />
            <Image src={armatures} alt="Armatures" className="logo-ticker-image" />
            <Image src={alternators} alt="Alternators" className="logo-ticker-image" />

            <Image src={vaneunits} alt="Vane Units" className="logo-ticker-image" />
            <Image src={pistonunits} alt="Piston Units" className="logo-ticker-image" />
            <Image src={servopumps} alt="Servo Pumps" className="logo-ticker-image" />
            <Image src={motors} alt="Electric Motors" className="logo-ticker-image" />
            <Image src={coils} alt="Motor Coils" className="logo-ticker-image" />
            <Image src={pumps} alt="Industrial Pumps" className="logo-ticker-image" />
            <Image src={acunits} alt="AC Units" className="logo-ticker-image" />
            <Image src={armatures} alt="Armatures" className="logo-ticker-image" />
            <Image src={alternators} alt="Alternators" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
