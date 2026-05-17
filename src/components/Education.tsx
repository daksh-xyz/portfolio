'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import React, { useRef, useState } from 'react';

const months = ['January', 'February', 'March', 'April', 'May'];

export default function Education() {
  const containerRef = useRef(null);

  const [month, setMonth] = useState(months[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  // added
  const monthIndex = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, months.length - 1]
  );

  useMotionValueEvent(monthIndex, 'change', (latest) => {
    setMonth(months[Math.round(latest)]);
  });

  return (
    <div>
      <div className='h-16 pl-8'>
        <p className={`font-black text-5xl`}>What I&apos;ve been up to</p>
      </div>
      <div
        ref={containerRef}
        className='relative h-1000'
      >
        {/* background line */}
        <div className='absolute left-1/2 -translate-x-1/2 w-3 h-full bg-gray-700/30 rounded-2xl'>

          {/* animated line */}
          <motion.div
            style={{
              height: lineScale,
              background:
                'linear-gradient(rgba(255, 94, 98, 0.45), rgba(255, 107, 203, 0.75), rgba(186, 73, 255, 0.8))',
            }}
            className='absolute top-0 left-1/2 -translate-x-1/2 w-2 rounded-2xl'
          />
        </div>

        {/* timeline items */}
        <div className='h-100 flex flex-row justify-center'>
          <div className='flex-1'>
            <motion.p
              key={month}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='sticky top-1/2 font-black text-4xl text-center'
            >
              {month}, 2026
            </motion.p>
          </div>
          <div className='w-5 h-5 bg-white rounded-full sticky top-[47.5%]' />
          <div className='flex-1'></div>
        </div>
        <div className='h-100 flex justify-center'>
          <div className='w-5 h-5 bg-white rounded-full sticky top-[47.5%]' />
        </div>
      </div>
    </div>
  );
}