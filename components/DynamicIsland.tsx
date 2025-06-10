import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import AudioBars from './AudioBars';
import AirpodCharge from './icons/AirpodCharge';
import Marquee from './Marquee';


const DynamicIsland = () => {
    const tracks = {
        song: ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d4/71/d4/d471d4e7-7743-7487-67ee-c6842b6d3ae8/mzaf_17737787135110456163.plus.aac.p.m4a", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/47/14/e3/4714e377-d7c3-c548-35d8-e64eab7de5e3/mzaf_7178672795846554680.plus.aac.p.m4a", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1d/9e/4c/1d9e4cc0-c3ce-2660-d116-86fb386d5920/mzaf_18139705836037492329.plus.aac.p.m4a"],
        art: ["/song1.jpg", "/song2.jpg", "/song3.jpg"],
        details: ["places to be ⋅ Fred again... Anderson .Paak & CHIKA", "Toi Et Moi ⋅ Paradis", "Emagination (B-Side) ⋅ Miami Horror"],
        color: [["from-[#5a7ed1]", "to-[#434449]"], ["from-[#345c6d]", "to-[#d0b8a1]"], ["from-[#d8a1a3]", "to-[#705d6c]"]]
    }
    const [number, setNumber] = useState(0)
    const [stage, setStage] = useState<"locked" | "unlocked" | "video" | "art">("locked");
    const [playing, setPlaying] = useState(false)
    const [isFading, setIsFading] = useState(false);
    const airpodref = useRef<HTMLVideoElement>(null)
    const audioref = useRef<HTMLAudioElement>(null)
    const unlockref = useRef<HTMLAudioElement>(null)
    const playAudio = () => {
        if (playing) {
            audioref.current?.pause();
        } else {
            audioref.current?.play();
        }
    };
    const playAirpods = () => {
        airpodref.current?.play();
    }
    useEffect(() => {
        const audio = audioref.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            const timeRemaining = audio.duration - audio.currentTime;
            if (!isFading && timeRemaining <= 1500 / 1000) {
                setIsFading(true);
                fadeOutAudio(audio, () => {
                    setNumber((prev) => (prev + 1) % 3);
                    setIsFading(false);
                });
            }
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [number, isFading]);

    const fadeOutAudio = (audioElement: HTMLAudioElement, callback: () => void) => {
        const steps = 10;
        const interval = 1500 / steps;
        let step = 0;

        const fade = () => {
            step++;
            audioElement.volume = Math.max(1 - (step / steps), 0);
            if (step < steps) {
                setTimeout(fade, interval);
            } else {
                callback(); // switch track
            }
        };

        fade();
    };

    const unlockTimer = () => {
        const timer = setTimeout(() => { setStage("video"); playAirpods(); }, 1000)
        return () => clearTimeout(timer)
    }

    return (
        <div className="select-none rounded-b-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-md group">
            <div className={`relative flex h-9 origin-top overflow-hidden rounded-b-xl text-white transition-all duration-300 w-50 scale-100 ${stage === "art" ? "group-hover:h-16" : ""}`}>
                <div className="h-full w-full rounded-b-xl bg-black">
                    <audio
                        ref={audioref}
                        autoPlay
                        src={tracks.song[number]}
                        onPause={() => setPlaying(false)}
                        onPlay={() => {
                            setPlaying(true);
                            if (audioref.current) {
                                audioref.current.volume = 1; // reset volume for new track
                            }
                        }}
                    />
                    <div className="absolute left-0 top-0 flex h-9 items-center" onClick={() => { setStage("unlocked"); unlockref.current?.play(); unlockTimer() }}>
                        <audio
                            src={"unlock.wav"}
                            ref={unlockref}
                        />
                        <div className="pl-2.5">
                            <svg
                                className={`size-[18px] absolute left-2.5 top-2 fill-current transition-all duration-200 ${stage === "locked" || stage === "unlocked" ? "backdrop-opacity-100" : "opacity-0"}`}
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    className={`origin-[56%_50%] transition-all duration-300 ${stage === "unlocked" ? "-scale-x-100" : ""}`}
                                    d="M4.21913,6.85699 L5.46719,6.85699 L5.46719,4.60904 C5.46719,3.04945 6.46827,2.19354 7.66062,2.19354 C8.85055,2.19354 9.86619,3.04945 9.86619,4.60904 L9.86619,6.85699 L11.10875,6.85699 L11.10875,4.73287 C11.10875,2.27366 9.48122,1 7.66062,1 C5.8455,1 4.21913,2.27366 4.21913,4.73287 L4.21913,6.85699 Z"
                                />
                                <path
                                    className={`origin-center transition-all duration-300 ${stage === "unlocked" ? "-translate-x-px" : ""}`}
                                    d="M4.54279,14.2793 L10.78394,14.2793 C11.79607,14.2793 12.3267,13.7365 12.3267,12.6438 L12.3267,7.92337 C12.3267,6.83432 11.79607,6.29701 10.78394,6.29701 L4.54279,6.29701 C3.529458,6.29701 3,6.83432 3,7.92337 L3,12.6438 C3,13.7365 3.529458,14.2793 4.54279,14.2793 Z"
                                />
                            </svg>
                            <div className={`transition-all duration-200 ${stage === "video" ? "backdrop-opacity-100" : "opacity-0"}`}>
                                <video ref={airpodref} src="airpods.mp4" height={28} width={28} onEnded={() => { setStage("art"); playAudio(); setPlaying(true) }}></video>
                            </div>
                            <div className={`absolute top-2 transition-all duration-200 ${stage === "art" ? "backdrop-opacity-100 group-hover:opacity-100" : "opacity-0"}`}>
                                <Image className='rounded-sm' src={tracks.art[number]} alt='nigga' width={20} height={20} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 flex h-10 items-center"></div>
                    <div className={`pointer-events-none absolute bottom-0 left-0 right-0 flex origin-top justify-center pb-[11px] text-xs font-semibold text-stone-300/85 opacity-0 ${stage === "art" ? "group-hover:opacity-100" : ""} transition-opacity duration-300 [mask-image:linear-gradient(to_left,rgba(0,0,0,0)_7%,rgba(0,0,0,1)_11%,rgba(0,0,0,1)_89%,rgba(0,0,0,0)_93%)]`}>
                        <Marquee text={`🎵 ${tracks.details[number]}`} />
                    </div>
                    <div className="absolute right-0 top-0 flex h-10 items-center" onClick={() => { setPlaying(!playing); playAudio() }}>
                        <div className="group pr-[9px]">
                            {stage === "video" ? (
                                <>
                                    <AirpodCharge />
                                    <audio autoPlay src={"/connect.mp3"} />
                                </>
                            ) : stage === "art" ? (
                                <AudioBars playing={playing} color={tracks.color[number]} />
                            ) : ""}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DynamicIsland