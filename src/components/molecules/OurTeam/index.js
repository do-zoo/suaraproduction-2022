import React from "react";
const review = [
  {
    name: "Александр Сергеевич",
    position: "CEO, Company",
  },
  {
    name: "Asep Surya",
    position: "CEO, Company",
  },
  {
    name: "Saepudin",
    position: "CEO, Company",
  },
  {
    name: "Sari",
    position: "CEO, Company",
  },
  {
    name: "Александр Сергеевич",
    position: "CEO, Company",
  },
  {
    name: "Александр Сергеевич",
    position: "CEO, Company",
  },
];

function OurTeam() {
  return (
    <div className="team py-24">
      <div className="team-title batas-suci">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-text-color text-center mb-16">
          Let's get to know each other.
        </h1>
      </div>
      <div className=" relative team-content">
        <div className="team flex justify-between batas-suci mr-6 rounded-tr-2xl md:rounded-tr-3xl md:mr-12 lg:mr-24 text-main-color bg-white bg-opacity-70 py-9 md:py-32 overflow-hidden flex-wrap flex-none">
          {review.map((item, index) => (
            <div
              className="team-item sm:w-1/2 md:w-1/3 lg:w-1/4 pl-6 pr-6 pb-6"
              key={index}
            >
              <div className="relative profile-Image w-full mx-auto overflow-hidden z-10 p-4">
                <img
                  src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
                  alt="profile"
                  className="object-cover rounded-full"
                />
              </div>
              <div className="w-full">
                <div className="p-9 w-full pt-24 -translate-y-24 duration-500 bg-light-violet rounded-2xl text-center">
                  <div className="name font-bold text-xl">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="position">
                    <p>{item.position}</p>
                  </div>
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
