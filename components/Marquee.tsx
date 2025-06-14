import React from 'react'

interface MarqueeProps {
    text: string
}

const Marquee = ({ text }: MarqueeProps) => {
    return (
        <>
            <div style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                width: '100%',
                position: 'relative',
            }}>
                <span style={{
                    display: 'inline-block',
                    paddingLeft: '100%',
                    animation: 'scroll-text 6s linear infinite'
                }}>
                    {text}
                    <span className='ml-40'>{text}</span>
                </span>
                <style jsx>{`
                        @keyframes scroll-text {
                            0% {
                                transform: translateX(0%);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }
                    `}</style>
            </div>
        </>
    )
}

export default Marquee