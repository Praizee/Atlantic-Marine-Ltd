//<br className="hidden laptop:block" />
import React from 'react'
import Rectangle from "../../assets/Rectangle 19.png"
import HeroImage from "../../assets/about-us-flipped.jpeg"

const AboutUs = () => {
  return (
    <section>

      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse mt-[6rem]">

          <img src={HeroImage} className="laptop:max-w-sm laptop:hidden rounded-sm shadow-2xl" />

          <div className="flex">
            <div className="laptop:px-8 mt-4 laptop:mt-0">
              <span className='flex'>
                <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
                <h1 className="text-3xl font-bold">About Us</h1>
              </span>

              <p className="py-6 leading-8 laptop:leading-7 w-full">

                <p className="mb-4 laptop:mb-3">
                  Atlantic Marine & Oilfield Services is a Subsea Engineering - Diving <br className="hidden laptop:block" />
                  Company since 1999. She is an ISO 9001-2015. Atlantic Marine is also an <br className="hidden laptop:block" />
                  ABS, Bureau Veritas, and Lloyds Class In–Water Survey Company.
                </p>
                {/* <p className="laptop:w-[60%] mb-4"> */}
                <p className="mb-4 laptop:mb-3">
                  Atlantic Marine is fully equipped with Classed Air Dive Spread Equipment, <br className="hidden laptop:block" />
                  Inspection Class ROV’s, Robot-aided Subsea Engineering Tooling and <br className="hidden laptop:block" />
                  Equipment, Zone 2 Offshore Work Containers, Divers Launch and Recovery <br className="hidden laptop:block" />
                  Spread and Subsea Inspection, Construction and Welding Equipment.
                </p>
                <p className="mb-4 laptop:mb-3">
                  And with the recent purpose built LightDiveBoat (LDB) acquisution, MV. <br className="hidden laptop:block" />
                  Eghenoflorence, Atlanticmarine can mobilise on very short notice for most <br className="hidden laptop:block" />
                  dive operations.
                </p>

                <p className="mb-4 laptop:mb-3">
                  Atlantic Marine has its head office in Lagos Nigeria, a Yard base in <br className="hidden laptop:block" />
                  Portharcourt Nigeria and a satellite office in Accra Ghana.
                </p>
              </p>

            </div>

            <img src={HeroImage} className="laptop:max-w-[27rem] mt-[4rem] laptop:flex laptop:float-right hidden rounded-sm shadow-2xl" />
          </div>

          {/* MISSION AND VISION */}
          <div className="laptop:flex block py-8">

            <div className="laptop:mx-[8.7rem]">
              <span className='flex'>
                <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
                <h1 className="text-3xl font-bold">Our Mission</h1>
              </span>
              <p className="py-6 leading-8 w-full">
                To develop execptional values to our clients in the areas of subsea Engineering,
                Diver Intervention and ROV & Robotics
              </p>
            </div>

            <div className="laptop:mr-[3rem] laptop:w-[80%]">
              <span className='flex'>
                <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
                <h1 className="text-3xl font-bold">Our Vision</h1>
              </span>
              <p className="py-6 leading-8 w-full">
                To develop a dynamic and successful company that provides innivative and quality
                service delivery in engineering and procurement in the Nigeria Oil and Gas Industry.
              </p>
            </div>
          </div>
          {/* END OF MISSION AND VISION */}

        </div>
      </div>

    </section>
  )
}

export default AboutUs