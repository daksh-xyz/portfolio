import Blob from '@/components/Blob';
import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/fonts/PetitFormalScript-Regular.ttf',
})

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <section className='-z-1 absolute h-screen w-screen'>
          <Blob />
          <Blob
            from="rgba(255,0,0,0.5)"
            via="rgba(255,165,0,0.8)"
            viaStop="60%"
            to="rgba(255,255,0,1)"
            duration="15s"
            delay="5s"
          />
          <Blob
            from="rgba(255, 94, 98, 0.45)"
            via="rgba(255, 107, 203, 0.75)"
            to="rgba(186, 73, 255, 0.8)"
            duration="15s"
            delay="3s"
            direction="reverse"
          />
        </section>
        <p className={`text-7xl -translate-x-35 ${myFont.className}`}>Hi, I&apos;m</p>
        <p className={"text-9xl"}>Daksh Lal</p>
      </div>
  )
}
