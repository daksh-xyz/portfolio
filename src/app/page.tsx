"use client";

import React, { useState } from 'react'
import MenuBar from '../../components/MenuBar'
import { useAtom } from 'jotai';
import { stageAtom } from '../../utils/context';
import DynamicIsland from '../../components/DynamicIsland';
import LockScreen from '../../components/LockScreen';
import Folder from '../../components/Folder';
import Finder from '../../components/Finder';


const Home = () => {
  const [stage] = useAtom(stageAtom);
  const [DocumentsFinder, setDocumentsFinder] = useState(false);
  const [DownloadsFinder, setDownloadsFinder] = useState(false);
  const [DesktopFinder, setDesktopFinder] = useState(false);
  const [activeFinder, setActiveFinder] = useState<string | null>(null);
  const myClick = (title: string) => {
    if (title === "Documents") {
      setDocumentsFinder(true);
    } else if (title === "Downloads") {
      setDownloadsFinder(true);
    } else if (title === "Desktop") {
      setDesktopFinder(true);
    }
  }
  const hideFinder = (title: string) => {
    if (title === "Documents") {
      setDocumentsFinder(false);
    } else if (title === "Downloads") {
      setDownloadsFinder(false);
    } else if (title === "Desktop") {
      setDesktopFinder(false);
    }
  }
  return (
    <div className="w-full h-screen overflow-hidden bg-[url('/wallpaper.png')] bg-cover bg-center bg-no-repeat rounded-md md:block hidden">
      <div className={`ease-in-out transition-all duration-300 ${stage !== "locked" ? "opacity-100" : "opacity-0 -translate-y-10"} `} >
        <div className='absolute top-0 left-0 w-full z-10'>
          <MenuBar />
        </div>
      </div>
      <div className='absolute top-0 left-[50%] z-13'>
        <div className='relative -left-[50%]'>
          <DynamicIsland />
        </div>
      </div>
      <div className={`select-none mt-10 w-full h-screen text-center ease-in-out text-purple-300/85 transition-all duration-300 ${stage === "locked" ? "opacity-100" : "opacity-0 invisible"}`}>
        <LockScreen />
      </div>
      <div className={`absolute top-10 z-1 overflow-hidden h-[95%] w-screen ${stage === "locked" ? "opacity-0 invisible" : "opacity-100"}`}>
        <div className="relative w-full h-full">
          <Folder title={"Documents"} inheritPosition={{ x: 20, y: 20 }} myClick={myClick} />
          <Folder title={"Downloads"} inheritPosition={{ x: 70, y: 10 }} myClick={myClick} />
          <Folder title={"Desktop"} inheritPosition={{ x: 30, y: 30 }} myClick={myClick} />
          {DocumentsFinder && <Finder title={"Documents"} myClick={hideFinder} isActive={activeFinder === "Documents"} onActivate={() => setActiveFinder("Documents")} />}
          {DownloadsFinder && <Finder title={"Downloads"} myClick={hideFinder} isActive={activeFinder === "Downloads"} onActivate={() => setActiveFinder("Downloads")} />}
          {DesktopFinder && <Finder title={"Desktop"} myClick={hideFinder} isActive={activeFinder === "Desktop"} onActivate={() => setActiveFinder("Desktop")} />}
        </div>
      </div>
    </div>
  )
}

export default Home