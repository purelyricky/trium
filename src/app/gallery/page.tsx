"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/sections/Header";
import {
  Gallery,
  ImageModal,
  GalleryImage,
} from "@/components/ui/react-tailwind-image-gallery";

// ── Span pattern (cycles every 8) ───────────────────────────────────────────
const SPANS = [
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
];

const s = (i: number) => SPANS[i % SPANS.length];
const p = (name: string) => `/trium-images/${name}`;

// ── Gallery data ─────────────────────────────────────────────────────────────
const galleryData: GalleryImage[] = [
  // — Project photos ——————————————————————————————————————————————————————
  { id: 1,  src: p("241.jpg"),  alt: "Motor rewinding",     title: "Motor Rewinding",     span: s(0),  category: "projects" },
  { id: 2,  src: p("257.jpg"),  alt: "Pump repair",         title: "Pump Repair",         span: s(1),  category: "projects" },
  { id: 3,  src: p("258.jpg"),  alt: "Electrical works",    title: "Electrical Works",    span: s(2),  category: "projects" },
  { id: 4,  src: p("259.jpg"),  alt: "AC servicing",        title: "AC Servicing",        span: s(3),  category: "projects" },
  { id: 5,  src: p("260.jpg"),  alt: "Industrial motor",    title: "Industrial Motor",    span: s(4),  category: "projects" },
  { id: 6,  src: p("261.jpg"),  alt: "Bearing replacement", title: "Bearing Replacement", span: s(5),  category: "projects" },
  { id: 7,  src: p("311.jpg"),  alt: "Winding process",     title: "Winding Process",     span: s(6),  category: "projects" },
  { id: 8,  src: p("313.jpg"),  alt: "Motor assembly",      title: "Motor Assembly",      span: s(7),  category: "projects" },
  { id: 9,  src: p("314.jpg"),  alt: "Field service",       title: "Field Service",       span: s(8),  category: "projects" },
  { id: 10, src: p("353.jpg"),  alt: "Control panel",       title: "Control Panel",       span: s(9),  category: "projects" },
  { id: 11, src: p("477.jpg"),  alt: "Pump installation",   title: "Pump Installation",   span: s(10), category: "projects" },
  { id: 12, src: p("573.jpg"),  alt: "Cable routing",       title: "Cable Routing",       span: s(11), category: "projects" },
  { id: 13, src: p("575.jpg"),  alt: "Voltage testing",     title: "Voltage Testing",     span: s(12), category: "projects" },
  { id: 14, src: p("576.jpg"),  alt: "Compressor service",  title: "Compressor Service",  span: s(13), category: "projects" },
  { id: 15, src: p("577.jpg"),  alt: "Generator repair",    title: "Generator Repair",    span: s(14), category: "projects" },
  { id: 16, src: p("578.jpg"),  alt: "Motor rewinding",     title: "Motor Rewinding",     span: s(15), category: "projects" },
  { id: 17, src: p("585.jpg"),  alt: "Pump repair",         title: "Pump Repair",         span: s(16), category: "projects" },
  { id: 18, src: p("670.jpg"),  alt: "Electrical works",    title: "Electrical Works",    span: s(17), category: "projects" },
  { id: 19, src: p("671.jpg"),  alt: "AC servicing",        title: "AC Servicing",        span: s(18), category: "projects" },
  { id: 20, src: p("672.jpg"),  alt: "Industrial motor",    title: "Industrial Motor",    span: s(19), category: "projects" },
  { id: 21, src: p("673.jpg"),  alt: "Bearing replacement", title: "Bearing Replacement", span: s(20), category: "projects" },
  { id: 22, src: p("674.jpg"),  alt: "Winding process",     title: "Winding Process",     span: s(21), category: "projects" },
  { id: 23, src: p("676.jpg"),  alt: "Motor assembly",      title: "Motor Assembly",      span: s(22), category: "projects" },
  { id: 24, src: p("684.jpg"),  alt: "Field service",       title: "Field Service",       span: s(23), category: "projects" },
  { id: 25, src: p("692.jpg"),  alt: "Control panel",       title: "Control Panel",       span: s(24), category: "projects" },
  { id: 26, src: p("693.jpg"),  alt: "Pump installation",   title: "Pump Installation",   span: s(25), category: "projects" },
  { id: 27, src: p("713.jpg"),  alt: "Cable routing",       title: "Cable Routing",       span: s(26), category: "projects" },
  { id: 28, src: p("714.jpg"),  alt: "Voltage testing",     title: "Voltage Testing",     span: s(27), category: "projects" },
  { id: 29, src: p("715.jpg"),  alt: "Compressor service",  title: "Compressor Service",  span: s(28), category: "projects" },
  { id: 30, src: p("716.jpg"),  alt: "Generator repair",    title: "Generator Repair",    span: s(29), category: "projects" },
  { id: 31, src: p("719.jpg"),  alt: "Motor rewinding",     title: "Motor Rewinding",     span: s(30), category: "projects" },
  { id: 32, src: p("721.jpg"),  alt: "Pump repair",         title: "Pump Repair",         span: s(31), category: "projects" },
  { id: 33, src: p("722.jpg"),  alt: "Electrical works",    title: "Electrical Works",    span: s(32), category: "projects" },
  { id: 34, src: p("723.jpg"),  alt: "AC servicing",        title: "AC Servicing",        span: s(33), category: "projects" },
  { id: 35, src: p("725.jpg"),  alt: "Industrial motor",    title: "Industrial Motor",    span: s(34), category: "projects" },
  { id: 36, src: p("726.jpg"),  alt: "Bearing replacement", title: "Bearing Replacement", span: s(35), category: "projects" },
  { id: 37, src: p("728.jpg"),  alt: "Winding process",     title: "Winding Process",     span: s(36), category: "projects" },
  { id: 38, src: p("729.jpg"),  alt: "Motor assembly",      title: "Motor Assembly",      span: s(37), category: "projects" },
  { id: 39, src: p("730.jpg"),  alt: "Field service",       title: "Field Service",       span: s(38), category: "projects" },
  { id: 40, src: p("1574.jpg"), alt: "Control panel",       title: "Control Panel",       span: s(39), category: "projects" },
  { id: 41, src: p("1575.jpg"), alt: "Pump installation",   title: "Pump Installation",   span: s(40), category: "projects" },
  { id: 42, src: p("1585.jpg"), alt: "Cable routing",       title: "Cable Routing",       span: s(41), category: "projects" },
  { id: 43, src: p("1803.jpg"), alt: "Voltage testing",     title: "Voltage Testing",     span: s(42), category: "projects" },
  { id: 44, src: p("1804.jpg"), alt: "Compressor service",  title: "Compressor Service",  span: s(43), category: "projects" },
  { id: 45, src: p("1849.jpg"), alt: "Generator repair",    title: "Generator Repair",    span: s(44), category: "projects" },
  { id: 46, src: p("1850.jpg"), alt: "Motor rewinding",     title: "Motor Rewinding",     span: s(45), category: "projects" },
  { id: 47, src: p("1851.jpg"), alt: "Pump repair",         title: "Pump Repair",         span: s(46), category: "projects" },
  { id: 48, src: p("1852.jpg"), alt: "Electrical works",    title: "Electrical Works",    span: s(47), category: "projects" },
  { id: 49, src: p("1853.jpg"), alt: "AC servicing",        title: "AC Servicing",        span: s(48), category: "projects" },
  { id: 50, src: p("1854.jpg"), alt: "Industrial motor",    title: "Industrial Motor",    span: s(49), category: "projects" },
  { id: 51, src: p("2082.jpg"), alt: "Bearing replacement", title: "Bearing Replacement", span: s(50), category: "projects" },
  { id: 52, src: p("2083.jpg"), alt: "Winding process",     title: "Winding Process",     span: s(51), category: "projects" },
  { id: 53, src: p("2139.jpg"), alt: "Motor assembly",      title: "Motor Assembly",      span: s(52), category: "projects" },
  { id: 54, src: p("2140.jpg"), alt: "Field service",       title: "Field Service",       span: s(53), category: "projects" },
  { id: 55, src: p("2141.jpg"), alt: "Control panel",       title: "Control Panel",       span: s(54), category: "projects" },
  { id: 56, src: p("2143.jpg"), alt: "Pump installation",   title: "Pump Installation",   span: s(55), category: "projects" },
  { id: 57, src: p("3265.jpg"), alt: "Cable routing",       title: "Cable Routing",       span: s(56), category: "projects" },
  { id: 58, src: p("3438.jpg"), alt: "Voltage testing",     title: "Voltage Testing",     span: s(57), category: "projects" },
  { id: 59, src: p("3672.jpg"), alt: "Compressor service",  title: "Compressor Service",  span: s(58), category: "projects" },
  { id: 60, src: p("4269.jpg"), alt: "Generator repair",    title: "Generator Repair",    span: s(59), category: "projects" },

  // — Team & workshop photos ——————————————————————————————————————————————
  { id: 61, src: p("t1.jpg"),  alt: "Workshop floor",  title: "Workshop Floor",  span: s(60), category: "team" },
  { id: 62, src: p("t2.jpg"),  alt: "Team at work",    title: "Team at Work",    span: s(61), category: "team" },
  { id: 63, src: p("t3.jpg"),  alt: "Quality control", title: "Quality Control", span: s(62), category: "team" },
  { id: 64, src: p("t4.jpg"),  alt: "Client site",     title: "Client Site",     span: s(63), category: "team" },
  { id: 65, src: p("t5.jpg"),  alt: "Service call",    title: "Service Call",    span: s(64), category: "team" },
  { id: 66, src: p("t6.jpg"),  alt: "Equipment check", title: "Equipment Check", span: s(65), category: "team" },
  { id: 67, src: p("t7.jpg"),  alt: "Workshop floor",  title: "Workshop Floor",  span: s(66), category: "team" },
  { id: 68, src: p("t8.jpg"),  alt: "Team at work",    title: "Team at Work",    span: s(67), category: "team" },
  { id: 69, src: p("t9.jpg"),  alt: "Quality control", title: "Quality Control", span: s(68), category: "team" },
  { id: 70, src: p("t10.jpg"), alt: "Client site",     title: "Client Site",     span: s(69), category: "team" },
  { id: 71, src: p("t11.jpg"), alt: "Service call",    title: "Service Call",    span: s(70), category: "team" },
  { id: 72, src: p("t12.jpg"), alt: "Equipment check", title: "Equipment Check", span: s(71), category: "team" },
  { id: 73, src: p("t13.jpg"), alt: "Workshop floor",  title: "Workshop Floor",  span: s(72), category: "team" },
  { id: 74, src: p("t14.jpg"), alt: "Team at work",    title: "Team at Work",    span: s(73), category: "team" },
  { id: 75, src: p("t15.jpg"), alt: "Quality control", title: "Quality Control", span: s(74), category: "team" },
  { id: 76, src: p("t16.jpg"), alt: "Client site",     title: "Client Site",     span: s(75), category: "team" },
  { id: 77, src: p("t17.jpg"), alt: "Service call",    title: "Service Call",    span: s(76), category: "team" },
];

type Filter = "all" | "projects" | "team";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all",      label: "All Work" },
  { key: "projects", label: "Projects" },
  { key: "team",     label: "Team & Workshop" },
];

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered =
    filter === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === filter);

  return (
    <>
      <Header />

      <main className="bg-gray-950 min-h-screen pb-20">
        {/* Page hero */}
        <div className="bg-gray-900 border-b border-white/10 py-16">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-white/50 max-w-lg mx-auto text-base leading-relaxed">
              Motor rewinding, pump repairs, electrical installations, and
              industrial maintenance — documented across Kenya since 2007.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-8 text-white/50 hover:text-white text-sm transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to home
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-6">
          <div className="flex gap-2 justify-center py-10 flex-wrap">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === key
                    ? "bg-white text-gray-900 shadow-lg"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                }`}
              >
                {label}
                {key !== "all" && (
                  <span className="ml-2 opacity-60 text-xs">
                    ({galleryData.filter((i) => i.category === key).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <Gallery data={filtered} onImageClick={openModal} />
        </div>
      </main>

      <ImageModal src={modalImage} onClose={closeModal} />
    </>
  );
}
