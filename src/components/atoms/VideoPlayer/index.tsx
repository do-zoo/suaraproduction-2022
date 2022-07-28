import { ArrowsExpandIcon, ArrowSmLeftIcon, ArrowSmRightIcon, PauseIcon, PlayIcon, VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/solid';
import React, { useEffect, useRef, useState} from 'react';
import { Video } from '../../../assets';

function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    // const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    // const [volume, setVolume] = useState(0.5);
    const [videoBarWidth , setVideoBarWidth] = useState(0);
    const [volumeBarWidth, setVolumeBarWidth] = useState(0);
    const [pointStyle, setPointStyle] = useState("hidden");
    const [showVidMenu, setShowVidMenu] = useState("hidden");

    // console.log(imOver);
    // console.log(showVidMenu);

    const videoRef = useRef(null);
    const timeBarRef = useRef(null);
    const controllerRef = useRef(null);

    const getMinute = (time) => {
        const minute = Math.floor(time/60);
        const alterMinute =  `0${minute}` ;
        if (minute < 10) {
            return alterMinute.slice(-2);
        } else {
            return minute;
        }

    };


    const getSecond = (time) => {
        const second = Math.floor(time%60);
        const alterSecond =  `0${second}` ;
        if (second < 10) {
            return alterSecond.slice(-2);
        }
        return second;
    };
    
    

    
    
    const videoHandler = (control) => {
        if (control === "play") {
          videoRef.current.play();
        } else if (control === "pause") {
          videoRef.current.pause();
        }
    };

    
    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.addEventListener("click", () => {
                if (videoRef.current.paused) {
                    videoHandler("play");
                    setIsPlaying(true);
                } else {
                    videoHandler("pause");
                    setIsPlaying(false);
                }
            });

            videoRef.current.addEventListener('loadeddata', () => {
                setDuration(videoRef.current.duration);
            });
        }

        
        if(videoRef.current.currentTime === videoRef.current.duration) {
            setIsPlaying(false);
            setShowVidMenu("visible");
        }
        
        controllerRef.current.addEventListener('mouseover', () => {
            setShowVidMenu("visible");
        });

        controllerRef.current.addEventListener('mouseleave', () => {
            
            if(isPlaying) {
                setShowVidMenu("hidden");
            } 
            else {
                setShowVidMenu("visible");
            }
        });
        

        const getVideoBarWidth = () => {
            const width = Math.ceil(currentTime/duration * 100);
            return width;
        };

        const getVolumeBarWidth = () => {
            const width = Math.ceil(videoRef.current.volume * 100);
            return width;
        };
        
        console.log(volumeBarWidth);
        setVideoBarWidth(getVideoBarWidth());
        setVolumeBarWidth(getVolumeBarWidth());
}, [ currentTime, duration, isPlaying, volumeBarWidth]);

    useEffect(() => {
        let interval;

        if (videoRef.current ) {
            interval = setInterval(() => {
                const c = videoRef.current.currentTime;
                    if (c < 10) {
                        setCurrentTime(`0${c}`);
                    } else {
                        setCurrentTime(c);
                    }
            }, 1000)
        } 

        return () => {
            if(interval) clearInterval(interval);
        }
    }, []);

    const handlePlay = () => {
        videoHandler(isPlaying ? "pause" : "play")
        setIsPlaying(!isPlaying)
    }
    
    const handleMute = () => {
        setIsMuted(!isMuted)
        videoRef.current.muted = !videoRef.current.muted;
        
    }
    
    const handleTimeBar = (e) => {
        const width = e.target.clientWidth;
        const x = e.nativeEvent.offsetX;
        const time = x/width * duration;
        videoRef.current.currentTime = time;
        setCurrentTime(time);
    }


    const handleFullScreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
            videoRef.current.msRequestFullscreen();
        }
    }

    const handleVolume = (e) => {
        const width = e.target.clientWidth;
        const x = e.nativeEvent.offsetX;
        const volume = x/width;
        console.log(volume);
        videoRef.current.volume = volume;
        setVolumeBarWidth(volume * 100);
    }



  return (
    <section 
        className='relative text-text-color'
        ref={controllerRef}
    >
        <div 
            className="video-wrapper"
            // onMouseOver={() => {
            //     console.log("I'm move");
            //     // setShowVidMenu("visible");
            // }}
            // onMouseLeave={() =>{
            //     // setShowVidMenu("visible");
            //     console.log("I'm Enter");

            // }}
        >
            <video 
                ref={videoRef}
                src={Video} 
                className='w-full h-full rounded'
                controls = {false}
                // id='video'
            />
            <div 
                id='video-controller'
                className={
                    showVidMenu === "visible" ? " video-controller absolute bg-text-color-dark bg-opacity-75 w-full px-1 sm:px-2 lg:px-6 flex flex-col bottom-0 duration-500" : "video-controller absolute bg-text-color-dark bg-opacity-75 w-full px-1 sm:px-2 lg:px-6 bottom-0  duration-500 opacity-0 hidden"
                }
            >
                <div 
                    className="progress-area relative  w-full rounded -translate-y-[10px] py-2 cursor-pointer"
                    ref={timeBarRef}
                    onMouseOver={() => {
                        setPointStyle("visible");
                    }}
                    onMouseOut={() => {
                        setPointStyle("hidden");
                    }}

                    onClick={handleTimeBar}
                >
                    <div 
                        className="progress-bar volume-bar flex items-center bg-[#ababab] w-full rounded"
                    >
                        <span 
                            className={pointStyle === "visible" ? "h-1 rounded bg-my-orange inline-block relative cursor-pointer before:absolute before:w-3 before:h-3 before:bg-text-color before:-right-[6px] before:-top-[4px] before:rounded-full before:cursor-pointer duration-100" : "h-1 rounded bg-my-orange inline-block relative cursor-pointer before:absolute before:w-3 before:h-3 before:bg-text-color before:-right-[6px] before:-top-[4px] before:rounded-full before:cursor-pointer before:hidden duration-100"}
                            style={{
                                width: `${videoBarWidth}%`
                            }}
                        ></span>
                    </div>
                </div>
                <div className="time-bar w-full flex justify-between text-xs font-light text-[#ababab]">
                    <div className="time-bar-current flex items-center">
                        {/* <span className=''>{currentMinutes} : {currentSeconds}</span> */}
                        <span 
                            className=''
                            dangerouslySetInnerHTML={{ __html: `${getMinute(currentTime)} : ${getSecond(currentTime)}` }}
                        />
                    </div>
                    <div className="time-bar-total flex items-center">
                        <span 
                            className=''
                            dangerouslySetInnerHTML={{ __html: `${getMinute(duration)} : ${getSecond(duration)}` }}
                        />
                    </div>
                </div>

                <div className="video-controller-button relative pt-1 pb-3 px-1">
                    <div className="video-controller-button-item flex items-center gap-3 justify-between">
                        <div className="left flex gap-3">
                            <button className="video-controller-button-item-button w-6">
                                <ArrowSmLeftIcon />
                            </button>
                            <button 
                                className="video-controller-button-item-button w-6"
                                onClick={handlePlay}
                            >
                                {
                                    isPlaying ? <PauseIcon /> : <PlayIcon />
                                }
                            </button>
                            <button className="video-controller-button-item-button w-6">
                                <ArrowSmRightIcon />
                            </button>
                            <div className="volume-control flex items-center gap-2">
                                <button 
                                    className="volume-control-button w-6"
                                    onClick={handleMute}
                                >
                                    {
                                        isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />
                                    }
                                </button>
                                <div 
                                    className="volume-bar py-1 cursor-pointer w-[64px]"
                                    onClick={handleVolume}
                                >
                                    <div 
                                        className={
                                            isMuted ? "volume-bar w-0" : "volume-bar flex items-center relative w-[64px] h-1 bg-[#ababab] rounded "
                                        } 
                                    >
                                        <span 
                                            className={
                                                isMuted ? 'w-0 duration-150' : 'h-1 rounded bg-text-color inline-block relative  before:absolute before:w-3 before:h-3 before:bg-text-color before:-right-[6px] before:-top-[4px] before:rounded-full before:cursor-pointer duration-100duration-150'
                                            }

                                            style={{
                                                width: `${volumeBarWidth}%`
                                            }}
                                        />
                                        {/* <span className='w-[64px] h-1 rounded bg-text-color inline-block'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="zoom-control flex items-center bg-my-orange h-full"
                            onClick={handleFullScreen}
                        >
                            <button className="w-6 cursor-pointer">
                                <ArrowsExpandIcon />
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="progress-area-time">

        </div>
        
        
    </section>
  )
}

export default VideoPlayer