// https://www.figma.com/file/1l07Xqt7zmHbcrqLh1iO6J/Untitled?type=design&node-id=0%3A1&mode=design&t=2ynPJUP9BovlwWy3-1
// https://atlantic-marine-ltd.netlify.app/
import React from "react";
import HeroImage from "../../assets/hero-image.jpg"
import Rectangle from "../../assets/Rectangle 19.png"

const Home = () => {
  return (
    <section className="">
      <div>

        {/* HERO SECTION */}
        <div className="hero min-h-screen bg-base-200 mt-[5rem]">
          <div className="hero-content flex-col lg:flex-row-reverse">

            <img src={HeroImage} className="laptop:max-w-sm laptop:hidden rounded-sm shadow-2xl" />

            <div className="flex">
              <div className="laptop:px-8 mt-4 laptop:mt-0">
                <span className='flex'>
                  <img src={Rectangle} alt='red-rectangle' className='mr-2' />
                  <h1 className="text-4xl font-bold">ROV & Robotics</h1>
                </span>

                <p className="py-6 leading-8 w-full">
                  Diver observation, diverless UWILD, and general inspection <br />
                  of offshore platforms, pipelines, and FPSOs are all major <br />
                  uses for our ROVs.
                </p>
                <button className="btn rounded-none hover:bg-[#204476] bg-[#305D96] text-slate-100">
                  View Details
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="white" />
                  </svg>
                </button>
              </div>

              <img src={HeroImage} className="laptop:max-w-sm laptop:flex laptop:float-right hidden rounded-sm shadow-2xl" />
            </div>
            {/* END OF HERO SECTION */}

            {/* OUR SERVICES SECTION */}
            <div className="my-4 laptop:px-[13.5rem] w-full">
              <div className="laptop:w-[55%]">
                <span className='flex'>
                  <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
                  <h1 className="text-2xl font-bold">Our Services</h1>
                </span>

                <p className="py-6 leading-8 justify-start">
                  Our companies' challenge is to provide excellent service, and this is our core strength. We provide all-round services with; Inspection, Marine support, tank & vessel Maintenance, Overhaul, Installment, Surface Protection (Corrosion control), Technical manpower supply, Marine survey & diving.

                </p>
              </div>

            </div>
            {/* END OF SERVICES SECTION */}

          </div>
        </div>

      </div>

    </section>
  );
};

export default Home;


//  <h1 className="text-5xl font-bold">ROV & Robotics</h1>
// <p className="py-6">
//     Diver observation, diverless UWILD, and general inspection <br />
//     of offshore platforms, pipelines, and FPSOs are all major <br />
//     uses for our ROVs.
// </p>

// <img src={HeroImage} className="max-w-sm rounded-sm shadow-2xl" />

// <button className="btn rounded-none hover:bg-[#204476] bg-[#305D96] text-slate-100">Get Started</button>