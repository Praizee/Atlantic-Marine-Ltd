import React from 'react'
import Rectangle from "../../assets/Rectangle 19.png"
import Header from "../../assets/clients-header.png"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <section>

      <div className="text-[#010037]">

        <img src={Header} className="w-full mt-[5rem]" />

        <div className="mt-[3rem] laptop:mx-[8.7rem] mx-[2rem] laptop:flex">
          {/* hero-content flex-col lg:flex-row-reverse mt-[6rem] */}

          {/* FORM SECTION */}
          <div className="mb-3 laptop:mx-[2rem]">
            <span className='flex mb-6'>
              <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
              <h1 className="text-3xl font-bold">Contact Us</h1>
            </span>

            <h1 className="text-2xl font-bold">Send us a message</h1>

            <form onSubmit={handleSubmit} className="bg-[#BDBDBD] w-full">


              <button type='submit' className="btn capitalize font-notbold overflow-y-hidden laptop:py-1 ml-10 rounded-md border-none bg-[#305D96] hover:bg-[#204476] text-slate-100 hover:text-slate-100">
                Send
              </button>
            </form>
          </div>
          {/* END OF FORM SECTION */}

          {/* ADDRESS SECTION */}
          <div className="laptop:float-right laptop:mx-[2rem] mt-[3rem] laptop:mt-0">
            <div className="mb-2">
              <span className="uppercase font-bold">Contact(s)</span>
              <a className="block">+234 (0) 803 465 7847</a>
              <a className="link link-hover" href="mailto:info@atlanticmarineoil.com">info@atlanticmarineoil.com</a>
              <a className="block">Port-Harcourt Tel: +234 (0) 818 886 6115</a>
              <a className="block">Takoradi Tel: +233 24 221 5798</a>
            </div>

            <div className="mb-3">
              <span className="uppercase font-bold">Lagos office</span>
              <a className="block">YMCA House,</a>
              <a className="block">1st Floor, 77, Awolowo Road</a>
              <a className="block">Ikoyi, Lagos, Nigeria</a>
            </div>

            <div className="mb-3">
              <span className="uppercase font-bold">port harcourt office</span>
              <a className="block">Atlantic</a>
              <a className="block">Marine yard, 312 Port</a>
              <a className="block">Harcourt/Aba</a>
              <a className="block">Road.</a>
            </div>

            <div className="mb-3">
              <span className="uppercase font-bold">takoradi office</span>
              <a className="block">Navy Air-base, SOPC/</a>
              <a className="block">GNPC Shore Base,</a>
              <a className="block">Takoradi, Ghana</a>
            </div>
          </div>
          {/* END OF ADDRESS SECTION */}

        </div>
      </div>

    </section>
  )
}

export default Contact