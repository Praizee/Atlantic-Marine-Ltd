import React from 'react'
import HeroImage from "../../assets/hero-image.jpg"
import Rectangle from "../../assets/Rectangle 19.png"

const Services = () => {
  return (
    <section>

      <div className="">
        <div className="laptop:px-16 bg-base-200">

          <div className="laptop:mt-[7rem] mt-[5rem] mx-4 ">
            {/* laptop:mx-[8rem] */}

            <div className="min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">

                <div>
                  <img src={HeroImage} className="hidden laptop:block max-w-sm mt-8 rounded-lg laptop:w-[50%] w-full mx-auto shadow-2xl laptop:float-right" />

                  <span className='flex'>
                    <img src={Rectangle} alt='red-rectangle' className='mr-2 float-right' />
                    <h1 className="laptop:text-4xl text-3xl font-bold">ROV & Robotics</h1>
                  </span>

                  <img src={HeroImage} className="laptop:hidden block max-w-sm mt-8 rounded-lg laptop:w-[40%] w-full mx-auto shadow-2xl laptop:float-right" />

                  <p className="pb-2 pt-6 mt-4 font-notbold laptop:max-w-[80%] laptop:pr-4 leading-[1.5rem]">
                    Atlantic Marine can display its complete ownership of a fleet of five (5nos) inspection class ROVs. From Subsea Tech mini Guardian ROV to the Turtuga ROV, SeaEye FALCON with its accompanying Zone 2 rated control van and the Sub Atlantic MOJAVE with a 10ft control van including the Inuktun MaggHD Crawler. All five ROVs can be used for a variety of offshore operations including diver observation, diverless UWILD and general inspection of offshore platforms, pipelines and FPSOs.
                  </p>

                  <p className="pt-2 pb-6 font-notbold laptop:max-w-[87%] leading-[2.5rem]">
                    <a href='../../assets/Docs/BrochureMiniROVGuardianEN.pdf' target='_blank' className='link hover:no-underline block text-blue-500 laptop:w-[35%] w-[85%]'>GUARDIAN mini ROV Specification</a>
                    <a href='../../assets/Docs/FalconROVSpecs.pdf' target='_blank' className='link hover:no-underline block text-blue-500 laptop:w-[21%] w-[60%]'>SeaEye FALCON ROV</a>
                    <a href='../../assets/Docs/AtlanticMarineSubAtlanticMojave2018.pdf' target='_blank' className='link hover:no-underline block text-blue-500 laptop:w-[27%] w-[63%]'>Sub Atlantic MOJAVE ROV</a>
                    <a href='../../assets/Docs/TORTUGA ROV BROCHURE.pdf' target='_blank' className='link hover:no-underline block text-blue-500 laptop:w-[13%] w-[35%]'>Turtuga ROV</a>
                    <a href='../../assets/Docs/MaggHD-Brochure.pdf' target='_blank' className='link hover:no-underline block text-blue-500 laptop:w-[22%] w-[55%]'>Inuktun MaggHD ROV</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Services