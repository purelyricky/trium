"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">About Us</div>
          </div>

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Decades of Rewinding Excellence
          </h2>
          <p className="section-des mt-5">
            Based in Mlolongo Police Line, Trium Solutions Limited has over 10 years of hands-on experience
            in electric motor rewinding and industrial services. Our managing director brings more than 13 years
            of personal expertise — ensuring every job meets the highest factory specifications.
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="Trium Solutions workshop and equipment" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Precision engineering"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Industrial components"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { stat: "10+", label: "Years of Experience" },
            { stat: "13+", label: "Years — Managing Director" },
            { stat: "1 Year", label: "Warranty on All Repairs" },
            { stat: "Pan-Kenya", label: "Client Base" },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-white rounded-2xl p-6 shadow-[0_7px_14px_#EAEAEA]">
              <div className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                {stat}
              </div>
              <div className="text-sm text-black/50 mt-1 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
