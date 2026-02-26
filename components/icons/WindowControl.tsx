import React from 'react'

interface WindowControlProps {
    color: string;
    lineColor: string;
    handleClick: () => void;
}

const WindowControl: React.FC<WindowControlProps> = ({ color, lineColor, handleClick }) => {
    return (
        <svg
            width="100"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
                handleClick()
            }}
        >
            <circle cx="10" cy="10" r="5" fill={color} />
            {color === "#ff5f57" ? (
                <>
                    <line
                        x1={12}
                        y1={8}
                        x2={8}
                        y2={12}
                        className='opacity-0 group-hover:opacity-100'
                        stroke={lineColor}
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                    <line
                        x1={12}
                        y1={12}
                        x2={8}
                        y2={8}
                        className='opacity-0 group-hover:opacity-100'
                        stroke={lineColor}
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                </>
            ) : color === "#febc2e" ? (
                <line
                    x1={12}
                    y1={10}
                    x2={8}
                    y2={10}
                    className='opacity-0 group-hover:opacity-100'
                    stroke={lineColor}
                    strokeWidth={2}
                    strokeLinecap="round"
                />) : (
                // <path stroke={lineColor} strokeWidth={2} className='opacity-0 group-hover:opacity-100' d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"/>
                <>
                <line
                    x1={12}
                    y1={10}
                    x2={8}
                    y2={10}
                    className='opacity-0 group-hover:opacity-100'
                    stroke={lineColor}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                 <line
                    x1={10}
                    y1={8}
                    x2={10}
                    y2={12}
                    className='opacity-0 group-hover:opacity-100'
                    stroke={lineColor}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                </>
                )}
        </svg>
    )
}

export default WindowControl