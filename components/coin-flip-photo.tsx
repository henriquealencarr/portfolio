"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CoinFlipPhoto() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-[60px] opacity-40"
        style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", transform: "scale(1.2)" }}
      />
      {/* Gradient border ring — coin flip */}
      <motion.div
        className="relative rounded-full p-[3px]"
        style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)", transformPerspective: 1000 }}
        animate={{ rotateY: [0, 0, 360, 360] }}
        transition={{ duration: 5, times: [0, 0.7, 0.95, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-full overflow-hidden w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] lg:w-[420px] lg:h-[420px]">
          <Image
            src="/photo.jpg"
            alt="Henrique Alencar"
            width={420}
            height={420}
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 420px"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>
      {/* Inner shine */}
      <div
        className="absolute inset-[3px] rounded-full pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)" }}
      />
    </div>
  );
}
