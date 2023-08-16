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

            <div className="bg-[#BDBDBD] p-8 rounded">
              <form onSubmit={handleSubmit} class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Password
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                      City
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                      State
                    </label>
                    <div class="relative">
                      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                      Zip
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                  </div>

                  <button type='submit' className="btn capitalize font-notbold overflow-y-hidden laptop:py-1 ml-10 rounded-md border-none bg-[#305D96] hover:bg-[#204476] text-slate-100 hover:text-slate-100">
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