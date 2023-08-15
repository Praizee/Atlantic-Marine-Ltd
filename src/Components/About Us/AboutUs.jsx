import React from 'react'
import Rectangle from "../../assets/Rectangle 19.png"
import HeroImage from "../../assets/hero-image.jpg"

const AboutUs = () => {
  return (
    <section>

      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse mt-[6rem]">

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
        </div>
      </div>

    </section>
  )
}

export default AboutUs