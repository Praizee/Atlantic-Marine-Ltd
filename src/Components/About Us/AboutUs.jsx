import React from 'react'
import Rectangle from "../../assets/Rectangle 19.png"
import HeroImage from "../../assets/image 1.png"

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

                <p className="mb-4">
                  Atlantic Marine & Oilfield Services is a Subsea Engineering - Diving <br />
                  Company since 1999. She is an ISO 9001-2015. Atlantic Marine is also an <br />
                  ABS, Bureau Veritas, and Lloyds Class In–Water Survey Company.
                </p>
                {/* <p className="laptop:w-[60%] mb-4"> */}
                <p className="mb-4">
                  Atlantic Marine is fully equipped with Classed Air Dive Spread Equipment, <br />
                  Inspection Class ROV’s, Robot-aided Subsea Engineering Tooling and <br />
                  Equipment, Zone 2 Offshore Work Containers, Divers Launch and Recovery <br />
                  Spread and Subsea Inspection, Construction and Welding Equipment.
                </p>

                <p className="mb-4">
                  And with the recent purpose built LightDiveBoat (LDB) acquisution, MV. <br />
                  Eghenoflorence, Atlanticmarine can mobilise on very short notice for most <br />
                  dive operations.
                </p>

                <p className="mb-4">
                  Atlantic Marine has its head office in Lagos Nigeria, a Yard base in <br />
                  Portharcourt Nigeria and a satellite office in Accra Ghana.
                </p>
              </p>

            </div>

            <img src={HeroImage} className="laptop:max-w-sm laptop:flex laptop:float-right hidden rounded-sm shadow-2xl" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutUs