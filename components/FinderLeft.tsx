import React from 'react'
import Clock from './icons/Clock'
import Desktop from './icons/Desktop'
import Documents from './icons/Documents'
import FolderIcon from './icons/FolderIcon'

type AppTitle = 'Recents' | 'Desktop' | 'Documents' | 'indiSign' | 'Fake News Detector' | 'YT Video Summariser';

interface FinderLeftProps {
    title: AppTitle;
}

const FinderLeft = ({ title }: FinderLeftProps) => {
    return (
        <div className='justify-center text-sm ml-2'>
            <ul>
                <li
                    className={`p-1 rounded-md mr-2 ${title === "Recents" ? "bg-neutral-500/45" : ""} cursor-pointer hover:bg-neutral-500/30`}
                >
                    <span className='flex items-center pl-2'><Clock /><span className='ml-2 font-bold antialiased'>Recents</span></span>
                </li>
                <li
                    className={`p-1 rounded-md mr-2 ${title === "Desktop" ? "bg-neutral-500/45" : ""} cursor-pointer hover:bg-neutral-500/30`}
                >
                    <span className='flex items-center pl-2'><Desktop /><span className='ml-2 font-bold antialiased'>Desktop</span></span>
                </li>
                <li
                    className={`p-1 rounded-md mr-2 ${title === "Documents" ? "bg-neutral-500/45" : ""} cursor-pointer hover:bg-neutral-500/30`}
                >
                    <span className='flex items-center pl-2'><Documents /><span className='ml-2 font-bold antialiased'>Documents</span></span>
                </li>
                <li
                    className={`p-1 rounded-md mr-2 ${title === "indiSign" ? "bg-neutral-500/45" : ""} cursor-pointer hover:bg-neutral-500/30`}
                >
                    <span className='flex items-center pl-2'><FolderIcon /><span className='ml-2 font-bold antialiased'>indiSign</span></span>
                </li>
            </ul>
        </div>
    )
}

export default FinderLeft
