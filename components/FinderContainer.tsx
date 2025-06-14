import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type AppTitle = 'indiSign' | 'Fake News Detector' | 'YT Video Summariser';

interface AppLink {
    title: AppTitle;
    url: string;
    icon: string;
}

const APP_LINKS: Record<AppTitle, AppLink> = {
    'YT Video Summariser': {
        title: 'YT Video Summariser',
        url: 'https://daksh-xyz-youtubesummarizer.streamlit.app',
        icon: '/safari.png'
    },
    'indiSign': {
        title: 'indiSign',
        url: 'https://indi-sign.vercel.app/',
        icon: '/safari.png'
    },
    'Fake News Detector': {
        title: 'Fake News Detector',
        url: 'https://daksh-xyz-fake-news-detector.streamlit.app/',
        icon: '/safari.png'
    }
}

interface FinderContainerProps {
    title: AppTitle;
}

const FinderContainer: React.FC<FinderContainerProps> = ({ title }) => {
    const appLink = APP_LINKS[title];

    if (!appLink) {
        return null;
    }

    return (
        <div className='grid grid-cols-5 gap-2 mt-1'>
            <div className='w-24'>
                <Link
                    href={appLink.url}
                    target='_blank'
                    className="block transition-transform hover:scale-105"
                >
                    <Image
                        src={appLink.icon}
                        alt={`${appLink.title} icon`}
                        width={100}
                        height={100}
                        className='select-none w-14 h-14 m-auto'
                        draggable="false"
                    />
                    <p className='text-sm/tight wrap-break-word text-center mt-1'>{appLink.title}</p>
                </Link>
            </div>
        </div>
    )
}

export default FinderContainer