import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTeamList } from "../../../config/Redux/actions/aboutUsAction";

function OurTeam() {
  const TeamList = useSelector((state) => state.AboutUsReducer.teamList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTeamList());
  }, [dispatch]);

  return (
    <div className="team py-24">
      <div className="team-title batas-suci">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-text-color text-center mb-16">
          Let's get to know each other.
        </h1>
      </div>
      <div className=" relative team-content">
        <div className="team flex  batas-suci mr-6 rounded-tr-2xl md:rounded-tr-3xl md:mr-12 lg:mr-24 text-main-color bg-white bg-opacity-70 py-9 md:py-32 overflow-hidden flex-wrap flex-none">
          {TeamList.map((item) => (
            <div
              className="p-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5"
              key={item._id}
            >
              <div className="relative my-card py-4 px-8 rounded-xl bg-light-violet flex flex-col items-center shadow-2xl shadow-main-bg">
                <div className="image h-36 w-36 rounded-full overflow-hidden mb-4 border-4 border-my-orange">
                  <img
                    src={item.avatar.url}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-name text-center w-36 mb-2">
                  <div className="text-name font-bold h-12 flex items-center mb-1">
                    <p className="line-clamp-2 w-full">
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </p>
                  </div>
                  <div className="text-pos text-sm h-10 flex items-center">
                    <p className="line-clamp-2 w-full">{item.job_position}</p>
                  </div>
                </div>
                <div className="action">
                  <a
                    // href={`https://www.instagram.com/${item.social_media}`}
                    href={`https://www.instagram.com/`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current text-[#c0007a] hover:fill-[#002296]"
                      viewBox="0 0 512 512"
                    >
                      {/* title nya jangan lupa */}
                      <title>Logo Instagram</title>

                      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
