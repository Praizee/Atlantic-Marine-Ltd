// https://www.figma.com/file/1l07Xqt7zmHbcrqLh1iO6J/Untitled?type=design&node-id=0-1&mode=design&t=3BYjamhuRMkihdNz-0
// https://www.figma.com/file/1l07Xqt7zmHbcrqLh1iO6J/Untitled?type=design&node-id=0%3A1&mode=design&t=2ynPJUP9BovlwWy3-1
// https://atlantic-marine-ltd.netlify.app/
import React from "react";
import HeroImage from "../../assets/hero-image.jpg"
import Rectangle from "../../assets/Rectangle 19.png"

const Home = () => {
  return (
    <section className="home">

      <div>
        {/* HeroSection */}
        <div className="hero min-h-screen bg-base-200 mt-[5rem]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={HeroImage} className="laptop:max-w-sm rounded-sm shadow-2xl float-right" />

            <div className="block">
              <span className='flex'>
                <img src={Rectangle} alt='red-rectangle' className='mr-2' />
                <h1 className="text-5xl font-bold">ROV & Robotics</h1>
              </span>

              <p className="py-6">
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

          </div>
        </div>

        {/* end of HeroSection */}

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