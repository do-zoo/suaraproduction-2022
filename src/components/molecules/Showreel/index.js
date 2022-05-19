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
              <div className="video-embed-cont overflow-hidden relative w-full after:pt-[56.25%] after:block rounded-2xl cursor-auto">
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
            <div className="relative showreel-menu px-5">
              <div className="video-menu-item grid grid-cols-2 md:gap-2 lg:gap-5 justify-center items-center pb-6">
                {showreelCurrent?.data?.map((item) => (
                  <div
                    className="showreel-item-img cursor-pointer"
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
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="carousel md:hidden carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
            {/* item here */}
            {showreelCurrent?.data?.map((item) => (
              <div className="carousel-item" key={item._id}>
                <img
                  src={`https://img.youtube.com/vi/${item.video_id}/mqdefault.jpg`}
                  alt={item.title}
                  className="rounded-box w-[240px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showreel;
