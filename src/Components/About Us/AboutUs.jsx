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
                <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
                <h1 className="text-3xl font-bold">About Us</h1>
              </span>

              <p className="py-6 leading-8 w-full">
                Atlantic Marine & Oilfield Services is a Subsea Engineering - Diving Company since 1999. She is an ISO 9001-2015. Atlantic Marine is also an ABS, Bureau Veritas, and Lloyds Class In–Water Survey Company.

                Atlantic Marine is fully equipped with Classed Air Dive Spread Equipment, Inspection Class ROV’s, Robot-aided Subsea Engineering Tooling and Equipment, Zone 2 Offshore Work Containers, Divers Launch and Recovery Spread and Subsea Inspection, Construction and Welding Equipment.

                And with the recent purpose built LightDiveBoat (LDB) acquisution, MV. Eghenoflorence, Atlanticmarine can mobilise on very short notice for most dive operations.

                Atlantic Marine has its head office in Lagos Nigeria, a Yard base in Portharcourt Nigeria and a satellite office in Accra Ghana.

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