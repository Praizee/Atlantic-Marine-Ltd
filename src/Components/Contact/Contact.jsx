import React from 'react'
import Rectangle from "../../assets/Rectangle 19.png"

const Contact = () => {
  return (
    <section>

      <div className="text-[#010037]">
        <div className="hero-content flex-col lg:flex-row-reverse mt-[6rem]">

          <span className='flex mb-6'>
            <img src={Rectangle} alt='red-rectangle' className='mr-2 w-[0.3rem]' />
            <h1 className="text-3xl font-bold">About Us</h1>
          </span>

          <h1 className="text-2xl font-bold">Send us a message</h1>

          <button className="btn capitalize font-notbold overflow-y-hidden laptop:py-1 ml-10 rounded-md bg-[#305D96] hover:bg-[#204476] text-slate-100 hover:text-slate-100">
            Send
          </button>

        </div>
      </div>

    </section>
  )
}

export default Contact