import React, { useEffect, useRef, useState } from 'react'
import { VideoPlayer } from '../../atoms'

function Showreel() {
  const [refName, setRefName] = useState('Video');

  const diamondRef = useRef(null);
  useEffect(() => {
    if (diamondRef.current) {
      console.log('diamondRef', diamondRef.current.clientWidth);
    }
  }, [ refName ]);

  const showreelMenu = [
    {
      title: 'Video',
    },
    {
      title: 'Audio',
    },
    {
      title: 'Virtual Event',
    },
  ];


  const switchRefMenu = (e) => {
    switch (e) {
      case "Video":
        setRefName('Video');
        break;
      case "Audio":
        setRefName('Audio');
        break;
      case "Virtual Event":
        setRefName('Virtual Event');
        break;
      default:
        break;
    }
  };


  
  return (
    <section className='relative bg-main-color batas-suci text-text-color'>
        <div className="py-20">
            <div className="title lg:text-right text-center px-16">
                <h2 className='lg:text-3xl text-2xl font-bold uppercase mb-6'>
                    Showreel
                </h2>
                <p className='text-sm sm:text-base'>
                Salah Satu Hasil Karya Kami 
                </p>
            </div>
            <div className='grid md:grid-cols-3 mt-8 gap-3 md:gap-2 lg:gap-6 justify-between '>
              <div className="video-player-sec md:col-span-2 ">
                <div className=" relative showreel-menu px-5">
                  <div className="video-menu-item flex gap-5 justify-center items-center pb-6">
                    {showreelMenu.map((item, index) => ( 
                          <button 
                            className={refName === item.title ? 'relative text-2xl h-8 font-semibold duration-500' : 'relative font-light h-8 duration-500'} 
                            key={index}
                            ref={refName === item.title ? diamondRef : null}
                            onClick={() => switchRefMenu(item.title)}
                            >
                            {item.title}
                          </button>
                      ))}
                  </div>
                </div>

                <VideoPlayer  /> 
              </div>
              <div className="md:col-span-1 mt-[56px] hidden md:block">
                <div className="relative showreel-menu px-5">
                  <div className="video-menu-item grid grid-cols-2 md:gap-2 lg:gap-5 justify-center items-center pb-6">
                    <div className="showreel-item-img cursor-pointer">
                      <img src="https://via.placeholder.com/480x270" alt="" className='rounded-md'/>
                    </div>
                    <div className="showreel-item-img cursor-pointer">
                      <img src="https://via.placeholder.com/480x270" alt="" className='rounded-md'/>
                    </div>
                    <div className="showreel-item-img cursor-pointer">
                      <img src="https://via.placeholder.com/480x270" alt="" className='rounded-md'/>
                    </div>
                    <div className="showreel-item-img cursor-pointer">
                      <img src="https://via.placeholder.com/480x270" alt="" className='rounded-md'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel md:hidden carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/480x270" className="rounded-box w-[240px]" />
                </div> 
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/480x270" className="rounded-box w-[240px]" />
                </div> 
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/480x270" className="rounded-box w-[240px]" />
                </div> 
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/480x270" className="rounded-box w-[240px]" />
                </div> 
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/480x270" className="rounded-box w-[240px]" />
                </div> 
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/480x270" className="rounded-box w-[240px]" />
                </div> 
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/480x270" className="rounded-box w-[240px]" />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Showreel