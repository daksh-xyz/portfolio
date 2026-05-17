"use client";
import React from 'react'
import Image from 'next/image'
import Github from "../../public/github.png"
import { motion, useScroll, useTransform } from "framer-motion";


export const Navbar = () => {
  const { scrollY } = useScroll();
  const containerWidth = useTransform(scrollY, [0, 750], ["100%", "56%"]);

  return (
    <div className='fixed top-0 px-8 h-12 w-screen z-50 flex justify-start'>
      <motion.div
        style={{ 
          width: containerWidth,
        }}
        className='flex items-center justify-end gap-4 h-full transition-all duration-75'
      >
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex shrink-0 items-center justify-center"
        >
          <Image alt="Visit Github" src={Github} width={36} height={36} />
        </a>
        <p className='backdrop-blur-md bg-white/10 border-white/10 border px-4 py-1 rounded-2xl whitespace-nowrap cursor-pointer'>
          Download Resume
        </p>
      </motion.div>
    </div>
  );
};
