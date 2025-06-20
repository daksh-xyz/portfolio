import React, { useRef, useState } from 'react'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'
import FinderLeft from './FinderLeft'
import FinderContainer from './FinderContainer'

type AppTitle = 'indiSign' | 'Fake News Detector' | 'YT Video Summariser' | 'Desktop';

interface FinderProps {
    title: AppTitle | "Desktop";
    myClick: (title: AppTitle | "Desktop") => void;
    isActive: boolean;
    onActivate: () => void;
}

const Finder: React.FC<FinderProps> = ({
    title,
    myClick,
    isActive,
    onActivate
}) => {
    const nodeRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 150, y: 150 })
    const [isDragging, setIsDragging] = useState(false)
    const [dimension, setDimension] = useState("w-150 h-70")
    const [cols, setCols] = useState("grid-cols-5")

    const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragStop = () => {
        setIsDragging(false);
    };

    const handleClick = () => {
        onActivate();
    };

    return (
        <Draggable
            nodeRef={nodeRef as React.RefObject<HTMLElement>}
            position={position}
            handle='.handle'
            onDrag={handleDrag}
            onStart={handleDragStart}
            onStop={handleDragStop}
        >
            <div
                ref={nodeRef}
                className={`absolute flex ${!isDragging ? "transition-all duration-300 ease-in-out" : ""} ${dimension} rounded-md shadow-lg/30 border-neutral-300/30 border ${isActive ? 'z-50' : 'z-40'}`}
                onClick={handleClick}
            >
                <div className='bg-black/15 handle backdrop-blur-2xl w-1/4 max-w-50 rounded-l-md'>
                    <div className='flex w-14 h-10 ml-1'>
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" onClick={() => myClick(title)}>
                            <circle cx="13" cy="20" r="5" fill="#ff5f57" />
                        </svg>
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" onClick={() => { setPosition({ x: 400, y: 70 }); setDimension("w-150 h-70"); setCols("grid-cols-5") }}>
                            <circle cx="13" cy="20" r="5" fill="#febc2e" />
                        </svg>
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" onClick={() => { setPosition({ x: 0, y: -210 }); setDimension("w-full h-200"); setCols("grid-cols-12") }} >
                            <circle cx="13" cy="20" r="5" fill="#27c83f" />
                        </svg>
                    </div>
                    <div>
                        <p className='ml-3 text-[12px] text-white/85 brightness-50 font-bold subpixel-antialiased'>Favourites</p>
                        <FinderLeft title={title} />
                    </div>
                </div>
                <div className='bg-neutral-800 w-full rounded-r-md p-2'>
                    <div className='flex justify-between handle items-center pb-2 ease-in-out transition-all duration-100 hover:border-b-neutral-700 border-b-1 border-neutral-800 hover:shadow-lg'>
                        <div className='flex gap-2 items-center ml-2'>
                            <div><CgChevronLeft size={24} color='#444444' /></div>
                            <div><CgChevronRight size={24} color='#444444' /></div>
                            <div className='font-black ml-1'>{title}</div>
                        </div>
                        <div className='mr-2'>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 122.879 119.799" enableBackground="new 0 0 122.879 119.799" xmlSpace="preserve"><g>
                                <path fill='#969697' d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z" /></g>
                            </svg>
                        </div>
                    </div>
                    <FinderContainer title={title} cols={cols} />
                </div>
            </div>
        </Draggable>
    )
}

export default Finder