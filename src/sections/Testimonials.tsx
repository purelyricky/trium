"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Trium Solutions rewound our factory motors to factory specs. Machine downtime dropped significantly and their team was incredibly professional throughout.",
    imageSrc: avatar1.src,
    name: "James Mutua",
    username: "Plant Manager, Nairobi Manufacturing Co.",
  },
  {
    text: "We've relied on Trium for our refrigeration motor rewinding needs for years. Always reliable, fast, and perfectly up to specification every time.",
    imageSrc: avatar2.src,
    name: "Grace Wanjiku",
    username: "Facilities Director, Nairobi Supermarket Chain",
  },
  {
    text: "Their electrical installation team was exceptional — cables, control panels, and CoCs all handled smoothly and delivered on schedule.",
    imageSrc: avatar3.src,
    name: "David Omondi",
    username: "Project Engineer, Mombasa Industrial Park",
  },
  {
    text: "Quick pump repair turnaround meant our production line was barely interrupted. Trium Solutions truly understands industrial urgency.",
    imageSrc: avatar4.src,
    name: "Fatuma Hassan",
    username: "Operations Manager, Athi River Processing Plant",
  },
  {
    text: "The AC maintenance Trium provides for our shopping center is thorough and proactive. We haven't had a major breakdown since we brought them on board.",
    imageSrc: avatar5.src,
    name: "Peter Kariuki",
    username: "Facilities Manager, Garden City Mall",
  },
  {
    text: "From alternators to armatures, Trium's rewinding work is consistently excellent. Their one-year warranty gives us real peace of mind.",
    imageSrc: avatar6.src,
    name: "Susan Achieng",
    username: "Maintenance Engineer, Nakuru Mining Group",
  },
  {
    text: "We rely on Trium for all motor rewinding across our Kenyan branches. The quality and reliability have been outstanding across every engagement.",
    imageSrc: avatar7.src,
    name: "Michael Njoroge",
    username: "Technical Director, Petrochemical Group Kenya",
  },
  {
    text: "Hospital equipment demands precision and certified work. Trium Solutions delivers exactly that — reliable, compliant electrical services every time.",
    imageSrc: avatar8.src,
    name: "Dr. Agnes Kamau",
    username: "Head of Engineering, Nairobi Hospital Group",
  },
  {
    text: "Their managing director's hands-on expertise is evident in every project. Trium is our go-to partner for all motor and electrical service needs.",
    imageSrc: avatar9.src,
    name: "Collins Odhiambo",
    username: "CEO, East Africa Refrigeration Services",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={name}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 tracking-tight text-black/50 text-sm">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Client Testimonials</div>
          </div>
          <h2 className="section-title mt-5">Trusted Across Kenya</h2>
          <p className="section-des mt-5">
            From hospitals to mining companies, our clients span every major industry. Here&apos;s what they say
            about working with Trium Solutions Limited.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
