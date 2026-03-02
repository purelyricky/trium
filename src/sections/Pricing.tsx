"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const services = [
  {
    icon: "⚙️",
    title: "Motor Rewinding",
    description:
      "Factory-specification rewinding for all electric motors and components — done right the first time.",
    buttonText: "Request Service",
    featured: false,
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
    icon: "🔧",
    title: "Pump Repairs & AC",
    description:
      "Expert repair and maintenance for industrial pumps and air-conditioning systems.",
    buttonText: "Get a Quote",
    featured: true,
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
    icon: "⚡",
    title: "Electrical Services",
    description:
      "Full-spectrum industrial electrical installations, compliance, and repair services.",
    buttonText: "Contact Us",
    featured: false,
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

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-stretch lg:justify-center">
          {services.map(({ icon, title, description, buttonText, featured, features }) => (
            <div
              key={title}
              className={twMerge(
                "p-8 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full flex flex-col",
                featured &&
                  "border-transparent bg-gradient-to-br from-[#001E80] to-[#183EC2] text-white shadow-[0_7px_28px_rgba(24,62,194,0.35)]"
              )}
            >
              {/* Icon */}
              <div
                className={twMerge(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5",
                  featured ? "bg-white/15" : "bg-[#EAEEFE]"
                )}
              >
                {icon}
              </div>

              {/* Title + badge */}
              <div className="flex items-center justify-between gap-2">
                <h3 className={twMerge("text-xl font-bold tracking-tight", featured ? "text-white" : "text-black")}>
                  {title}
                </h3>
                {featured && (
                  <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">
                    Core Service
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className={twMerge(
                  "text-sm mt-3 leading-relaxed",
                  featured ? "text-white/80" : "text-black/50"
                )}
              >
                {description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className={twMerge(
                  "btn btn-primary w-full mt-6 text-center",
                  featured && "bg-white text-[#001E80] hover:bg-white/90"
                )}
              >
                {buttonText}
              </a>

              {/* Divider */}
              <div
                className={twMerge("border-t mt-6 mb-5", featured ? "border-white/20" : "border-[#F1F1F1]")}
              />

              {/* Feature list */}
              <ul className="flex flex-col gap-3 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-start gap-3">
                    <span
                      className={twMerge(
                        "mt-0.5 flex-shrink-0",
                        featured ? "text-white/70" : "text-[#001E80]"
                      )}
                    >
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <span className={featured ? "text-white/80" : "text-black/70"}>{feature}</span>
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
