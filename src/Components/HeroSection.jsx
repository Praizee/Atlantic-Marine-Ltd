import React from 'react'
import "./HeroSection.css";
import HeroImage from "../assets/hero-image.jpg";

export const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">ROV & Robotics</h1>
                        <p className="py-6">
                            Diver observation, diverless UWILD, and general inspection <br />
                            of offshore platforms, pipelines, and FPSOs are all major <br />
                            uses for our ROVs.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
