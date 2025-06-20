import React from 'react'
import Application from './Application'

const Dock = () => {
    const apps = [
        {
            name: "Finder",
            icon: "Finder.png",
            canOpen: true,
            link: ''
        },
        {
            name: "Apps",
            icon: "Launchpad.png",
            canOpen: false,
            link: ''
        },
        {
            name: "Mail",
            icon: "Mail.png",
            canOpen: true,
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=dakshrklal@gmail.com'
        },
        {
            name: "Photos",
            icon: "Photos.png",
            canOpen: false,
            link: ''
        },
        {
            name: "Music",
            icon: "Music.png",
            canOpen: false,
            link: ''
        },
        {
            name: "Github",
            icon: "Github.png",
            canOpen: true,
            link: 'https://github.com/daksh-xyz'
        },
        {
            name: "Safari",
            icon: "safari.png",
            canOpen: true,
            link: 'https://google.com'
        },
        {
            name: "Bin",
            icon: "bin.png",
            canOpen: false,
            link: ''
        },
    ]
    return (
        <div className='flex backdrop-blur-xl bg-orange-50/10 w-auto rounded-xl p-2'>
            {apps.map((item) => (
                <Application key={item.name} name={item.name} icon={item.icon} canOpen={item.canOpen} link={item.link} />
            ))}
        </div>
    )
}

export default Dock