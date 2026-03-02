"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const services = [
  {
    title: "Motor Rewinding",
    description: "Factory-specification rewinding for all electric motors and components — done right the first time.",
    buttonText: "Request Service",
    featured: false,
    inverse: false,
    features: [
      "Electric motors (all types & sizes)",
      "Alternators & armatures",
      "Motor coils & compressors",
      "Refrigeration & HVAC components",
      "Fan motors & accessories",
      "1-year warranty on all repairs",
    ],
  },
  {
    title: "Pump Repairs & AC",
    description: "Expert repair and maintenance for industrial pumps and air-conditioning systems.",
    buttonText: "Get a Quote",
    featured: true,
    inverse: true,
    features: [
      "Centrifugal pump repairs",
      "Shaft seals & bearing replacements",
      "AC system maintenance & servicing",
      "New AC project installations",
      "Industrial & commercial projects",
      "Fast turnaround guaranteed",
    ],
  },
  {
    title: "Electrical Services",
    description: "Full-spectrum industrial electrical installations, compliance, and repair services.",
    buttonText: "Contact Us",
    featured: false,
    inverse: false,
    features: [
      "Cable & cable tray installation",
      "Distribution boards & control panels",
      "Wiring diagrams",
      "Certificates of Compliance (CoCs)",
      "Electrical repairs of all kinds",
      "Industrial compliance support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">What We Offer</div>
          </div>
          <h2 className="section-title mt-5">Our Services</h2>
          <p className="section-des mt-5">
            From motor rewinding to full industrial electrical installations, our qualified technicians deliver
            outstanding results — backed by a full one-year warranty.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {services.map(({ title, description, buttonText, featured, features, inverse }) => (
            <div
              key={title}
              className={twMerge(
                "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                  {title}
                </h3>
                {featured && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <p className={twMerge("text-sm mt-4 leading-relaxed", inverse ? "text-white/70" : "text-black/50")}>
                {description}
              </p>
              <a
                href="#contact"
                className={twMerge("btn btn-primary w-full mt-[30px] text-center", inverse && "bg-white text-black")}
              >
                {buttonText}
              </a>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
