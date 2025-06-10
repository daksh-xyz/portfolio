'use client';

import React, { useMemo, useState } from 'react'
import MenuBarDate from './Date'
import Image from 'next/image';
import BatteryIcon from './icons/Battery';
import Wifi from './icons/Wifi';
import Control from './icons/Control';
import DynamicIsland from './DynamicIsland';

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

type AboutProps = {
    visibility: boolean;
};

const About = ({ visibility }: AboutProps) => {
    if (visibility) {
        return (
            <>
                <div className='absolute top-10 bg-neutral-950/20 px-1 py-1 text-orange-50 backdrop-blur-xl border-1 border-neutral-300/30 rounded-sm w-60 text-sm shadow-lg/20'>
                    <div className='mt-1 mb-1 cursor-default select-none rounded-sm px-2 hover:bg-sky-600'>About Me</div>
                    <hr className='text-neutral-300/30 mx-2'></hr>
                    <div className='mt-1 mb-1 cursor-default select-none rounded-sm px-2 hover:bg-sky-600'>Force Quit</div>
                    <hr className='text-neutral-300/30 mx-2'></hr>
                    <div className='mt-1 mb-1 cursor-default select-none rounded-sm px-2 hover:bg-sky-600'>Sleep</div>
                    <div className='mt-1 mb-1 cursor-default select-none rounded-sm px-2 hover:bg-sky-600'>Restart</div>
                    <div className='mt-1 mb-1 cursor-default select-none rounded-sm px-2 hover:bg-sky-600'>Shut Down</div>
                    <hr className='text-neutral-300/30 mx-2'></hr>
                    <div className='mt-1 mb-1 cursor-default select-none rounded-sm px-2 hover:bg-sky-600'>Lock Screen</div>
                    <div className='mt-1 mb-1 cursor-default select-none rounded-sm px-2 hover:bg-sky-600'>Log out Daksh Lal...</div>
                </div>
            </>
        );
    } else {
        return <></>
    }
}

const MenuBar = () => {
    const [visibility, setVisibility] = useState(false)
    const battery = useMemo(() => getRandomInt(1, 20), [])
    return (
        <div className='w-full bg-orange-50/10 px-5 text-orange-50 backdrop-blur-xl rounded-t-md p-2 flex justify-between'>
            <div className='flex gap-4'>
                <div className={`${visibility ? 'bg-neutral-100/10' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16" onClick={() => { setVisibility(!visibility) }}>
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    </svg>
                </div>
                <div className='font-bold text-sm select-none cursor-default'>Finder</div> {/* Add Current App Name */}
                <div className='text-sm select-none cursor-default'>File</div>
                <div className='text-sm select-none cursor-default'>Edit</div>
                <div className='text-sm select-none cursor-default'>View</div>
                <div className='text-sm select-none cursor-default'>Go</div>
                <div className='text-sm select-none cursor-default'>Window</div>
                <div className='text-sm select-none cursor-default'>Help</div>
                <About visibility={visibility} />
            </div>
            <div className='relative'>
                <div className='absolute -top-2 -left-37'>
                    <DynamicIsland />
                </div>
            </div>
            <div className='flex gap-4 align-middle'>
                <div className='self-center justify-center transition-normal'>
                    <BatteryIcon battery={battery} />
                </div>
                <div className='self-center justify-center'>
                    <Wifi />
                </div>
                <div className='self-center justify-center'>
                    <Control />
                </div>
                <div className='self-center justify-center'>
                    <Image src={"/siri.png"} alt="siri" height={100} width={100} className='h-4 w-4' />
                </div>
                <div>
                    <MenuBarDate />
                </div>
            </div>
        </div>
    )
}

export default MenuBar