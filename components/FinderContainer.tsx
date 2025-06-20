import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type AppTitle = 'indiSign' | 'Fake News Detector' | 'YT Video Summariser' | 'Desktop';

interface AppLink {
    title: AppTitle | string;
    url: string;
    icon: string;
}

const APP_LINKS: Record<AppTitle | string, AppLink | AppLink[]> = {
    'YT Video Summariser': {
        title: 'YT Video Summariser',
        url: 'https://daksh-xyz-youtubesummarizer.streamlit.app',
        icon: '/icons/safari.png'
    },
    'indiSign': {
        title: 'indiSign',
        url: 'https://indi-sign.vercel.app/',
        icon: '/icons/safari.png'
    },
    'Fake News Detector': {
        title: 'Fake News Detector',
        url: 'https://daksh-xyz-fake-news-detector.streamlit.app/',
        icon: '/icons/safari.png'
    },
    'Desktop':
        [
            {
                title: 'indiSign',
                url: 'https://indi-sign.vercel.app/',
                icon: '/icons/safari.png'
            }, {
                title: 'Fake News Detector',
                url: 'https://daksh-xyz-fake-news-detector.streamlit.app/',
                icon: '/icons/safari.png'
            }, {
                title: 'YT Video Summariser',
                url: 'https://daksh-xyz-youtubesummarizer.streamlit.app',
                icon: '/icons/safari.png'
            }
        ]
}

interface FinderContainerProps {
    title: AppTitle;
    cols: string;
}

const FinderContainer: React.FC<FinderContainerProps> = ({ title, cols }) => {
    const appContent = APP_LINKS[title];

    if (!appContent) {
        return null;
    }

    const linksToRender = Array.isArray(appContent) ? appContent : [appContent];

    return (
        <div className={`grid ${cols} gap-2 mt-1 transition-all ease-in-out duration-150`}>
            {linksToRender.map((appLink) => (
                <div className='w-24' key={appLink.title}>
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
            ))}
        </div>
    )
}

export default FinderContainer