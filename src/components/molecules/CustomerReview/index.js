import React from "react";

function CustomerReview() {
  //   const [pageNow, setPageNow] = useState(0);
  const review = [
    {
      name: "Александр Сергеевич",
      position: "CEO, Company",
      text: "SUARA PRODUCTION is a great company that has helped me to grow my business. I have been using SUARA PRODUCTION for a few years now and I am very happy with the results.",
    },
    {
      name: "Asep Surya",
      position: "CEO, Company",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Saepudin",
      position: "CEO, Company",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Sari",
      position: "CEO, Company",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
    },
    {
      name: "Александр Сергеевич",
      position: "CEO, Company",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    },
    {
      name: "Александр Сергеевич",
      position: "CEO, Company",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       pageNow === 5 ? setPageNow(0) : setPageNow(pageNow + 1);
  //     }, 3000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [pageNow]);

  //   const interval = setInterval(() => {
  //     pageNow === 5 ? setPageNow(0) : setPageNow(pageNow + 1);
  //   }, 3000);
  //   clearInterval(interval);

  return (
    <section>
      <div className="contain text-text-color py-24 relative batas-suci">
        <div className="title w-full h-full text-center py-24 batas-suci mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold md:max-w-xl lg:max-w-2xl mx-auto">
            The stunning results our customers have experienced
          </h2>
        </div>
        <div className="customer-review carousel slide carousel-center p-4 space-x-5 batas-suci ">
          {/* <div className="carousel-item w-1/2 md:1/6 lg:1/6 "></div> */}
          {review.map((item, index) => (
            <div
              className="carousel-item w-full md:w-1/2 lg:w-1/3"
              id={index}
              //   style={
              //     pageNow === index
              //       ? undefined
              //       : {
              //           display: "none",
              //         }
              //   }
              key={index}
            >
              <div className="customer-review-item p-16 border-2 rounded-3xl border-[rgba(97,_153,_237,_0.26)] grid justify-between gap-6">
                <div className="text-review text-center flex items-center">
                  <p>{item.text}</p>
                </div>
                <div className="customer-info flex flex-col items-center justify-end text-center">
                  <div className="relative photo pb-3">
                    <img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="h-16 mask mask-circle"
                    />
                  </div>
                  <div className="name">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm">{item.position}</p>
                  </div>
                </div>
                {/* <a href=""></a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReview;
