import React from 'react'
import Image from "../../assets/31f937898a806eb5ce551cf70429c8b1.jpeg"
import Rectangle from "../../assets/Rectangle 19.png"

const QualityPolicy = () => {
  return (
    <section>

      <div className="laptop:px-16 bg-base-200">

        <div className="laptop:mt-[7rem] mt-[5rem] mx-4 ">
          {/* laptop:mx-[8rem] */}

          <div className="min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

              <div>
                {/* quality policy */}
                <span className='flex'>
                  <img src={Rectangle} alt='red-rectangle' className='mr-2 float-right' />
                  <h1 className="laptop:text-4xl text-3xl font-bold">Quality Policy</h1>
                </span>
                {/* end of quality policy */}

                <img src={Image} className="max-w-sm mt-8 rounded-lg laptop:w-[20%] laptop:h-[1%] w-full mx-auto shadow-2xl laptop:float-right" />

                <p className="pb-2 pt-6 mt-4 font-notbold laptop:max-w-[87%]">
                  Atlantic Marine & Oilfield Services Limited is a provider of Subsea Engineering, Diver Intervention, Subsea Construction, Maintenance and Repair services. She is committed to providing quality services that meet the requirements and expectations of its clients for customer satisfaction. Atlantic Marine considers outstanding quality performance an integral measure of overall business success. Management of Atlantic Marine & Oilfield Services shall ensure that all operations are carried out in line with the requirements of the Company’s Quality Management System. Management shall provide adequate
                </p>
                <p className="pt-2 pb-6 font-notbold laptop:max-w-[87%]">
                  resources and a suitable work environment for all employees of the company to deliver quality services. Management shall also ensure the establishment of measurable Quality objectives at relevant functions and levels within the Organization. The Management of Atlantic Marine & Oilfield Services shall take full responsibility for the Quality Management System, and shall ensure full compliance to this policy through the effective implementation and continual improvement of the Organization’s Quality Management System, in line with new developments in standards and best practices.
                </p>
              </div>

              {/* <img src={Image} className="max-w-sm rounded-lg laptop:w-[20%] w-full shadow-2xl" /> */}
              {/* <p className="pt-2 pb-6 font-notbold">
                resources and a suitable work environment for all employees of the company to deliver quality services. Management shall also ensure the establishment of measurable Quality objectives at relevant functions and levels within the Organization. The Management of Atlantic Marine & Oilfield Services shall take full responsibility for the Quality Management System, and shall ensure full compliance to this policy through the effective implementation and continual improvement of the Organization’s Quality Management System, in line with new developments in standards and best practices.
              </p> */}

            </div>
          </div>

        </div>

      </div>

    </section >
  )
}

export default QualityPolicy