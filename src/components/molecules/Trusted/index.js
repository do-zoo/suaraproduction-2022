import React, { useEffect } from "react";

function Trusted() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://suara-pro-test.herokuapp.com/v1/client/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.clients);
      });
  }, []);

  return (
    <section className="relative bg-main-color batas-suci">
      <div className="mx-auto py-48">
        <div className="title text-center text-text-color px-16">
          <h2 className="lg:text-3xl text-2xl font-bold uppercase mb-6 duration-500">
            Trusted by
          </h2>
          <p className="text-sm sm:text-base duration-500">
            Beberapa Perusahaan dan Lembaga yang menggunakan jasa kami
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-16 lg:mt-32 gap-3 lg:gap-5 duration-500">
          <div className="section">
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[0]?.logo.url}
                alt={data[0]?.name}
                title={data[0]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
          </div>
          <div className="section flex sm:flex-col gap-3 lg:gap-5">
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[1]?.logo.url}
                alt={data[1]?.name}
                title={data[1]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[2]?.logo.url}
                alt={data[2]?.name}
                title={data[2]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
          </div>
          <div className="section flex sm:flex-col gap-3 lg:gap-5">
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[3]?.logo.url}
                alt={data[3]?.name}
                title={data[3]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[4]?.logo.url}
                alt={data[4]?.name}
                title={data[4]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[5]?.logo.url}
                alt={data[5]?.name}
                title={data[5]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
          </div>
          <div className="section flex sm:flex-col gap-3 lg:gap-5">
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[6]?.logo.url}
                alt={data[6]?.name}
                title={data[6]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[7]?.logo.url}
                alt={data[7]?.name}
                title={data[7]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
          </div>
          <div className="section">
            <div className="item w-24 lg:w-44 h-12 lg:h-24 flex justify-center items-center bg-text-color rounded-lg lg:rounded-2xl duration-500 ">
              <img
                src={data[8]?.logo.url}
                alt={data[8]?.name}
                title={data[8]?.name}
                className="max-w-full max-h-full duration-500 px-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
