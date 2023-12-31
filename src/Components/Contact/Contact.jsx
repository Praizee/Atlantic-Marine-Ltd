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
          <div className="mb-3 laptop:mx-[2rem] w-full">
            <span className='flex mb-6'>
              <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
              <h1 className="text-3xl font-bold">Contact Us</h1>
            </span>

            <h1 className="text-2xl font-bold">Send us a message</h1>

            <div className="bg-[#f3eeee] laptop:w-[90%] overflow-hidden p-8 rounded-lg mt-5 laptop:mb-12">
              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 laptop:flex">
                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      First Name
                    </label> */}
                    <input className="laptop:appearance-none mb-12 laptop:mb-0 laptop:mr-8 block w-full laptop:w-1/2 bg-white border rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#3686FE80] text-[#010037]"
                      id="grid-last-name" type="text" placeholder="Name" />

                    <input className="laptop:appearance-none block w-full laptop:w-1/2 bg-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#3686FE80] text-[#010037]"
                      id="grid-last-name" type="email" placeholder="Email" />
                  </div>

                </div>
                <div className="w-full md:w-1/2 px-3 -mx-3 mb-6 md:mb-0 laptop:flex">
                  <input className="laptop:appearance-none mb-12 laptop:mb-10 laptop:mr-8 block laptop:w-1/2 bg-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#3686FE80] text-[#010037]"
                    id="grid-last-name" type="text" placeholder="Subject" />
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3">
                    <textarea className="laptop:appearance-none resize-y block w-full bg-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#3686FE80] text-[#010037]"
                      id="grid-password" type="text" placeholder="Type your message" />
                    {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                  </div>
                </div>

                {/* button */}
                <div>
                  <button type='submit' className="btn px-8 py-1 mt-0 capitalize font-notbold overflow-y-hidden rounded-md border-none bg-[#305D96] hover:bg-[#204476] text-slate-100 hover:text-slate-100">
                    Send
                  </button>
                </div>
              </form>
            </div>
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

    </section >
  )
}

export default Contact