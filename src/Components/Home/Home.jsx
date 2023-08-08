import React from "react";
import HeroImage from "../../assets/hero-image.jpg"

const Home = () => {
  return (
    <section className="home">

      <div>
        {/* HeroSection */}
        <div className="hero min-h-screen bg-base-200 mt-[5rem]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={HeroImage} className="max-w-sm rounded-sm shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">ROV & Robotics</h1>
              <p className="py-6">
                Diver observation, diverless UWILD, and general inspection <br />
                of offshore platforms, pipelines, and FPSOs are all major <br />
                uses for our ROVs.
              </p>
              <button className="btn rounded-none hover:bg-[#204476] bg-[#305D96] text-slate-100">Get Started</button>
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