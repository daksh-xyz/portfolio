"use client";

import React, { useState } from 'react'
import MenuBar from '../../components/MenuBar'

const Home = () => {
  const [stage, setStage] = useState<"locked" | "unlocked">("locked")
  return (
    <div className="w-full h-screen bg-[url('/wallpaper.png')] bg-cover bg-center bg-no-repeat rounded-md" onClick={() => setStage("unlocked")}>
      <div className={`ease-in-out transition-all duration-300 ${stage === "unlocked" ? "opacity-100" : "opacity-0 -translate-y-10"} `} >
        <MenuBar />
      </div>
    </div>
  )
}

export default Home