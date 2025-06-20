"use client";

import React, { useState } from 'react'
import MenuBar from '../../components/MenuBar'
import { useAtom } from 'jotai';
import { desktopFinderAtom, stageAtom } from '../../utils/context';
import DynamicIsland from '../../components/DynamicIsland';
import LockScreen from '../../components/LockScreen';
import Folder from '../../components/Folder';
import Finder from '../../components/Finder';
import Dock from '../../components/Dock';

type FolderTitle = 'indiSign' | 'Fake News Detector' | 'YT Video Summariser';
type AppTitle = 'indiSign' | 'Fake News Detector' | 'YT Video Summariser';

interface FolderPosition {
  x: number;
  y: number;
}

const FOLDER_POSITIONS: Record<FolderTitle, FolderPosition> = {
  'indiSign': { x: 200, y: 500 },
  'Fake News Detector': { x: 700, y: 400 },
  'YT Video Summariser': { x: 300, y: 30 }
};

const Home = () => {
  const [stage] = useAtom(stageAtom);
  const [desktopFinderVisibility, setDesktopFinderVisibility] = useAtom(desktopFinderAtom)
  const [openFinders, setOpenFinders] = useState<Record<AppTitle, boolean>>({
    'indiSign': false,
    'Fake News Detector': false,
    'YT Video Summariser': false
  });
  const [activeFinder, setActiveFinder] = useState<AppTitle | string | null>(null);

  const handleFinderOpen = (title: string) => {
    setOpenFinders(prev => ({
      ...prev,
      [title]: true
    }));
  };

  const handleFinderClose = (title: AppTitle | string) => {
    if (title === 'Desktop') {
      console.log("fired")
      setDesktopFinderVisibility(false);
      return;
    } else {
      setOpenFinders(prev => ({
        ...prev,
        [title]: false
      }));
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-[url('/wallpaper.png')] bg-cover bg-center bg-no-repeat rounded-md md:block hidden">
      <div className={`ease-in-out transition-all duration-300 ${stage !== "locked" ? "opacity-100" : "opacity-0 -translate-y-10"}`}>
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
          {Object.entries(FOLDER_POSITIONS).map(([title, position]) => (
            <Folder
              key={title}
              title={title as FolderTitle}
              inheritPosition={position}
              myClick={handleFinderOpen}
            />
          ))}

          {Object.entries(openFinders).map(([title, isOpen]) =>
            isOpen && (
              <Finder
                key={title}
                title={title as AppTitle}
                myClick={handleFinderClose}
                isActive={activeFinder === title}
                onActivate={() => setActiveFinder(title as AppTitle)}
              />
            )
          )}
          {
            desktopFinderVisibility && (
              <Finder
                title="Desktop"
                myClick={handleFinderClose}
                isActive={activeFinder === "Desktop"}
                onActivate={() => setActiveFinder("Desktop")}
              />
            )
          }
        </div>
      </div>
      <div className={`absolute bottom-10 left-[50%] -translate-x-[50%] z-5 ease-in-out duration-300 ${stage === "locked" ? "opacity-0 translate-y-10 invisible" : "opacity-100"} `}>
        <Dock />
      </div>
    </div>
  )
}

export default Home