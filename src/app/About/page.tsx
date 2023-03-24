'use client'
import React from "react";
import ZiaKhan from "../../../public/ZiaKhan.webp";
import logo1 from '../../../public/logo1.webp'
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

export default function page() {
  return (
    <div>
      <div className="rounded-b-[15%] bg-black w-full text-white mb-8 text-center border-l-red-600 border-l-8 border-r-red-600 border-r-8 h-96 py-40 md:py-80">
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <h1 className="text-5xl md:text-8xl">About us</h1>
        </RevealWrapper>
      </div>

      <div className="md:flex">
      <div className=" md:w-full px-2 md:px-40 py-0 md:py-32 rounded-3xl">
          <Image
            className="rounded-[100%]"
            src={ZiaKhan}
            alt="panaverse"
            height={450}
            width={380}
          ></Image>
        </div>
        <div className="px-5 md:px-28 py-0 md:py-28 md:w-full">
          <h1 className="font-bold text-3xl md:text-4xl border-l-red-500 border-l-4 p-3">
            Zia Khan
          </h1>
          <h1> CEO OF PANAVARSE DAO</h1>
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
          <p className="text-lg md:text-lg  py-3 md:py-5">
            CEO of Panacloud, the worlds first Integrated API Ownership
            Economy, Crowdfunding, and Development Platform. Volunteer COO of
            PIAIC, an initiative by the President of Pakistan for AI and
            computing mass education
          </p>

          <p className="text-lg md:text-lg  py-3 md:py-5">
            Mentor and software developer with 20+ years of expertise in cloud
            and serverless computing, software design, project management, and
            API and App development. Expert in concept, business modeling &
            strategy development for startups, specializing in DeFi and token
            economics. Mentored and trained hundreds of thousands of developers.
            Triple masters degrees in business administration, engineering, and
            finance from Arizona State University. Master in Economics from KU.
            Certified Public Accountant and Certified Management Accountant in
            USA.
          </p>
          </RevealWrapper>
         
        </div>
      </div>


      <div className="md:flex">
      <div className=" md:w-full px-2 md:px-40 py-0 md:py-32 rounded-3xl">
          <Image
            src={logo1}
            alt="panaverse"
            height={450}
            width={380}
          ></Image>
        </div>
        <div className="px-5 md:px-28 py-0 md:py-28 md:w-full">
          <h1 className="font-bold text-3xl md:text-4xl border-l-red-500 border-l-4 p-3">
            Panaverse
          </h1>
          <h1>PAKISTAN FIRST METAVERSE COMPANY</h1>
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>

          <p className="text-lg md:text-lg  py-3 md:py-5">
          The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.
          </p>

          <p className="text-lg md:text-lg  py-3 md:py-5">
          Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030..
          </p>
          </RevealWrapper>
         
        </div>
      </div>

    </div>
  );
}
