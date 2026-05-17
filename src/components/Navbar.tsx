"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SocialDock from "./SocialDock";

export const Navbar = () => {
  const { scrollY } = useScroll();

  const rightOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const centerOpacity = useTransform(scrollY, [500, 800], [0, 1]);
  const rightPointerEvents = useTransform(
    scrollY,
    [0, 400],
    ["auto", "none"]
  );

  const centerPointerEvents = useTransform(
    scrollY,
    [500, 800],
    ["none", "auto"]
  );

  return (
    <div className="fixed bottom-8 left-0 w-screen h-12 z-50">

      {/* Right side */}
      <motion.div
        style={{
          opacity: rightOpacity,
          pointerEvents: rightPointerEvents,
        }}
        className="absolute right-8 top-0 h-full flex items-center gap-4"
      >
        <SocialDock />

        <p className="backdrop-blur-md bg-white/10 border-white/10 border px-4 py-1 rounded-2xl whitespace-nowrap cursor-pointer">
          Download Resume
        </p>
      </motion.div>

      {/* Center */}
      <motion.div
        style={{
          opacity: centerOpacity,
          pointerEvents: centerPointerEvents,
        }}
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex items-center gap-4"
      >
          <SocialDock />

        <p className="backdrop-blur-md bg-white/10 border-white/10 border px-4 py-1 rounded-2xl whitespace-nowrap cursor-pointer">
          Download Resume
        </p>
      </motion.div>

    </div>
  );
};