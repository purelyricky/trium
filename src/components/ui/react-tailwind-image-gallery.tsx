"use client";

import React from "react";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  span: string;
  category: "projects" | "team";
}

interface GalleryProps {
  data: GalleryImage[];
  onImageClick: (src: string) => void;
}

interface ImageModalProps {
  src: string | null;
  onClose: () => void;
}

export function Gallery({ data, onImageClick }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[220px]">
      {data.map((img) => (
        <div
          key={img.id}
          className={`group cursor-pointer relative overflow-hidden rounded-xl ${img.span}`}
          onClick={() => onImageClick(img.src)}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {img.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ImageModal({ src, onClose }: ImageModalProps) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/92 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Enlarged view"
        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
}
