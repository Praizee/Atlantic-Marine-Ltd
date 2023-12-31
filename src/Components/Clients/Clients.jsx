import React from 'react'
import Header from "../../assets/clients-header.png"
import Logos from "../../assets/logos.png"
import "./Clients.css";


const Clients = () => {
  return (
    <section>
      <div className="laptop:mt-[7rem] mt-[5rem] mb-8 text-[#010037]">
        <img src={Header} className="w-full " />

        <img src={Logos} className="w-3/4 logos mx-auto pt-[2rem] pb-[.5rem] laptop:pb-[4rem]" />
      </div>

    </section>
  )
}

export default Clients