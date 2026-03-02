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
            <Image src={vaneunits} alt="vane units logo" className="logo-ticker-image" />
            <Image src={pistonunits} alt="piston units logo" className="logo-ticker-image" />
            <Image src={servopumps} alt="servo pumps logo" className="logo-ticker-image" />
            <Image src={motors} alt="motors logo" className="logo-ticker-image" />
            <Image src={coils} alt="coils logo" className="logo-ticker-image" />
            <Image src={pumps} alt="pumps logo" className="logo-ticker-image" />
            <Image src={acunits} alt="ac units logo" className="logo-ticker-image" />
            <Image src={armatures} alt="armatures logo" className="logo-ticker-image" />
            <Image src={alternators} alt="alternators logo" className="logo-ticker-image" />

            <Image src={vaneunits} alt="vane units logo" className="logo-ticker-image" />
            <Image src={pistonunits} alt="piston units logo" className="logo-ticker-image" />
            <Image src={servopumps} alt="servo pumps logo" className="logo-ticker-image" />
            <Image src={motors} alt="motors logo" className="logo-ticker-image" />
            <Image src={coils} alt="coils logo" className="logo-ticker-image" />
            <Image src={pumps} alt="pumps logo" className="logo-ticker-image" />
            <Image src={acunits} alt="ac units logo" className="logo-ticker-image" />
            <Image src={armatures} alt="armatures logo" className="logo-ticker-image" />
            <Image src={alternators} alt="alternators logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
