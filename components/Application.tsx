import { useAtom } from 'jotai'
import Image from 'next/image'
import React from 'react'
import { desktopFinderAtom } from '../utils/context'

interface ApplicationProps {
    name: string,
    icon: string,
    canOpen: boolean,
    link: string
}

interface popupCenterProps {
    url: string,
    title: string,
    w: number,
    h: number,
    bruh: () => void
}

const launchApp = ({ url, title, w, h, bruh }: popupCenterProps) => {
    if (title === "Finder") {
        bruh()
    } else {
        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft
        const top = (height - h) / 2 / systemZoom + dualScreenTop
        window.open(url, title,
            `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
        )
    }
}

const Application = ({ name, icon, canOpen, link }: ApplicationProps) => {
    const [desktopFinderVisibility, setDesktopFinderVisibility] = useAtom(desktopFinderAtom)
    return (
        <div className='group text-center'>
            <div className='absolute bottom-23 bg-neutral-800/80 backdrop-blur-md rounded-md border-1 border-orange-50/30 w-18 py-1 speech-bubble-right text-sm hidden group-hover:block'>{name}</div>
            <div className='w-18 h-18 flex rounded-md' onClick={() => canOpen && launchApp({ url: link, title: name, w: 800, h: 500, bruh: () => setDesktopFinderVisibility(!desktopFinderVisibility) })} >
                <Image src={`/icons/${icon}`} width={100} height={100} alt='df' />
            </div>
            {canOpen ? (
                <div className='h-1 w-18'>
                    <svg width="100" height="12" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="6" r="2" fill="oklch(82.7% 0.119 306.383)" />
                    </svg>
                </div>
            ) : ""}
        </div>
    )
}

export default Application