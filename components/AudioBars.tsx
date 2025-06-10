import React from 'react'

interface AudioBarsProps {
    playing: boolean,
    color: string[]
}

const AudioBars = ({ playing, color }: AudioBarsProps) => {
    console.log(color)
    return (
        <>
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center pr-[9px] transition duration-400">
                    {/* Pause Icon */}
                    <svg
                        className={`size-4 absolute transition-all duration-200 ease-in-out transform ${playing ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
                            } fill-current text-white/85`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 28"
                        aria-hidden="true"
                    >
                        <path d="M8.55859 23.0898H11.2305C12.25 23.0898 12.7891 22.5508 12.7891 21.5195V5.55859C12.7891 4.49219 12.25 4 11.2305 4H8.55859C7.53906 4 7 4.53906 7 5.55859V21.5195C7 22.5508 7.53906 23.0898 8.55859 23.0898ZM17.0781 23.0898H19.7383C20.7695 23.0898 21.2969 22.5508 21.2969 21.5195V5.55859C21.2969 4.49219 20.7695 4 19.7383 4H17.0781C16.0469 4 15.5078 4.53906 15.5078 5.55859V21.5195C15.5078 22.5508 16.0469 23.0898 17.0781 23.0898Z" />
                    </svg>

                    {/* Play Icon */}
                    <svg
                        className={`size-4 absolute transition-all duration-200 ease-in-out transform ${playing ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                            } fill-current text-white/85`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 28"
                        aria-hidden="true"
                    >
                        <path d="M6.40625 23.8633C6.875 23.8633 7.27344 23.6758 7.74219 23.4062L21.4062 15.5078C22.3789 14.9336 22.7188 14.5586 22.7188 13.9375C22.7188 13.3164 22.3789 12.9414 21.4062 12.3789L7.74219 4.46875C7.27344 4.19922 6.875 4.02344 6.40625 4.02344C5.53906 4.02344 5 4.67969 5 5.69922V22.1758C5 23.1953 5.53906 23.8633 6.40625 23.8633Z" />
                    </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pr-[9px] transition duration-400 scale-0 opacity-0 blur-sm">
                    <svg className="size-4 fill-current text-white/85" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" aria-hidden="true">
                        <path d="M6.40625 23.8633C6.875 23.8633 7.27344 23.6758 7.74219 23.4062L21.4062 15.5078C22.3789 14.9336 22.7188 14.5586 22.7188 13.9375C22.7188 13.3164 22.3789 12.9414 21.4062 12.3789L7.74219 4.46875C7.27344 4.19922 6.875 4.02344 6.40625 4.02344C5.53906 4.02344 5 4.67969 5 5.69922V22.1758C5 23.1953 5.53906 23.8633 6.40625 23.8633Z"></path>
                    </svg>
                </div>
            </div>
            <div className="flex w-5 items-center justify-center space-x-[1.5px] brightness-110 group-hover:scale-125 group-hover:blur-[3.5px] group-hover:brightness-125 group-hover:saturate-150">
                <div className={`w-[2px] h-5 ${playing ? 'animate-[playing_0.95s_ease_infinite]' : 'transform: scale-y-20'} rounded-[1px] transition-all duration-500 bg-gradient-to-b ${color[0]} ${color[1]}`} />
                <div className={`w-[2px] h-5 ${playing ? 'animate-[playing_1.46s_ease_infinite]' : 'transform: scale-y-20'} rounded-[1px] transition-all duration-500 bg-gradient-to-b ${color[0]} ${color[1]}`} />
                <div className={`w-[2px] h-5 ${playing ? 'animate-[playing_0.82s_ease_infinite]' : 'transform: scale-y-20'} rounded-[1px] transition-all duration-500 bg-gradient-to-b ${color[0]} ${color[1]}`} />
                <div className={`w-[2px] h-5 ${playing ? 'animate-[playing_1.24s_ease_infinite]' : 'transform: scale-y-20'} rounded-[1px] transition-all duration-500 bg-gradient-to-b ${color[0]} ${color[1]}`} />
            </div>
        </>
    )
}

export default AudioBars