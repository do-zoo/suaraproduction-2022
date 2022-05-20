import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPlayVideo,
  setDataShowreel,
  setDataShowreelByCategoryId,
} from "../../../config/Redux/actions";

function Showreel() {
  // const [isLoading, setIsLoading] = useState(true);
  const [menuId, setMenuId] = useState(null);
  // const [currentVideo, setCurrentVideo] = useState();

  const showreelData = useSelector((state) => state.HomeReducer.showreel);
  const showreelCurrent = useSelector(
    (state) => state.HomeReducer.showreelCurrent
  );
  const currentPlayVideo = useSelector(
    (state) => state.HomeReducer.currentPlayVideo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataShowreel());
  }, [dispatch]);

  useEffect(() => {
    if (showreelData.length > 0) {
      setMenuId(showreelData[0]._id);
    }
  }, [showreelData]);

  useEffect(() => {
    if (menuId) {
      dispatch(setDataShowreelByCategoryId(menuId));
    }
  }, [menuId, dispatch]);

  console.log(currentPlayVideo);
  const handleMenuId = (id) => {
    setMenuId(id);
  };

  return (
    <section className="relative bg-main-color batas-suci text-text-color">
      <div className="py-20">
        <div className="title lg:text-right text-center px-16">
          <h2 className="lg:text-3xl text-2xl font-bold uppercase mb-6">
            Showreel
          </h2>
          <p className="text-sm sm:text-base">Salah Satu Hasil Karya Kami</p>
        </div>
        <div className="grid md:grid-cols-3 mt-8 gap-3 md:gap-2 lg:gap-6 justify-between ">
          <div className="video-player-sec md:col-span-2 ">
            <div className=" relative showreel-menu px-5">
              <div className="video-menu-item flex gap-5 justify-center items-center pb-6">
                {showreelData?.map((item) => (
                  <button
                    className={
                      showreelCurrent?._id === item._id
                        ? "relative text-2xl h-8 font-semibold duration-500"
                        : "relative font-light h-8 duration-500"
                    }
                    key={item._id}
                    onClick={() => handleMenuId(item._id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="video-embed-cont overflow-hidden relative w-full after:pt-[56.25%] after:block rounded-2xl cursor-auto border-8">
                <div className="w-full h-full absolute top-0 left-0">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${currentPlayVideo}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 mt-[56px] hidden md:block">
            <div className="relative showreel-menu px-5 overflow-y-scroll h-full space-x-5 scrollbar">
              <div className="absolute left-0 top-0 video-menu-item grid grid-cols-2 grid-rows-4 overflow-hidden md:gap-2 lg:gap-5 justify-center items-center pb-6 pr-5">
                {showreelCurrent?.data?.map((item) => (
                  <div
                    className="relative rounded-md showreel-item-img cursor-pointer"
                    key={item._id}
                    onClick={() => {
                      console.log(item.video_id);
                      dispatch(setCurrentPlayVideo(item.video_id));
                    }}
                  >
                    <img
                      // src="https://via.placeholder.com/480x270"
                      src={`https://img.youtube.com/vi/${item.video_id}/mqdefault.jpg`}
                      alt={item.title}
                      className={` relative rounded-md showreel-item-img cursor-pointer ${
                        currentPlayVideo === item.video_id
                          ? "brightness-[20%]"
                          : "hover:brightness-100"
                      }`}
                    />
                    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                      {currentPlayVideo === item.video_id ? (
                        <p>Now Playing...</p>
                      ) : (
                        <p className="text-gray-500 hover:text-my-orange h-full w-full flex justify-center items-center duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 bg-white rounded-full"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="carousel md:hidden carousel-center w-full p-4 space-x-4 bg-neutral rounded-box scrollbar">
            {/* item here */}
            {showreelCurrent?.data?.map((item) => (
              <div className="carousel-item relative" key={item._id}>
                <img
                  src={`https://img.youtube.com/vi/${item.video_id}/mqdefault.jpg`}
                  alt={item.title}
                  // className=""
                  className={`rounded-box w-[240px] relative showreel-item-img cursor-pointer ${
                    currentPlayVideo === item.video_id
                      ? "brightness-[20%]"
                      : "hover:brightness-100"
                  }`}
                />
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                  {currentPlayVideo === item.video_id ? (
                    <p>Now Playing...</p>
                  ) : (
                    <p className="text-my-orange h-full w-full flex justify-center items-center duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 bg-white rounded-full"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showreel;
