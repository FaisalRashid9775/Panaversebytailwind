'use client'
import Image from "next/image";
import React from "react";
import image from "../../../public/Image2.webp";
import images from "../../../public/Image3.webp";
import RevealWrapper from "next-reveal/dist/esm/components/RevealWrapper";

export default function Bnner() {
  return (
    <div>
      <div className="rounded-b-[15%] bg-black w-full text-white mb-8 text-center border-l-red-600 border-l-8 border-r-red-600 border-r-8 h-96 py-40 md:py-80">
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <h1 className="text-5xl md:text-8xl">Panaverse Dao</h1>
        </RevealWrapper>
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <h2 className="text-2xl md:text-5xl">Earn while you learn</h2>
        </RevealWrapper>
      </div>

      <div className="md:flex">
        <div className="px-5 md:px-28 py-0 md:py-28 md:w-full">
          <h1 className="font-bold text-3xl md:text-4xl border-l-red-500 border-l-4 p-3">
            Getting Ready for the Next Generation and Future of the Internet
          </h1>
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>

          <p className="text-lg md:text-xl  py-3 md:py-5">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technologies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </p>
          <p className="text-lg md:text-xl ">
            Admission Open in Islamabad, Lahore, Karachi, Peshawar
          </p>
          <button className="bg-black text-white hover:bg-red-500 text-xl p-3 rounded-2xl my-5 ">
            See more{" "}
          </button>
          </RevealWrapper>
        </div>
        <div className=" md:w-full px-2 md:px-40 py-0 md:py-32 rounded-3xl">
          <Image
            className="rounded-[100%]"
            src={image}
            alt="panaverse"
            height={450}
            width={380}
          ></Image>
        </div>
      </div>

      <div className="md:flex py-5">
        
        <div className="px-5 md:px-28 pb-0 md:pb-28 md:w-full">
          <h1 className="font-bold text-3xl md:text-4xl border-l-red-500 border-l-4 p-3">
            Program of studies
          </h1>
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
          <p className="text-lg md:text-xl  py-3 md:py-5">
            The first two quarters are shared by all specialities and are
            dedicated to studying Object-Oriented Programming and cutting-edge
            Full-Stack Web 2.0 development. It is going to be a year-long hybrid
            programme that includes both onsite and online classes and is
            divided into four quarters of 13 weeks each.
          </p>
          <button className="bg-black text-white hover:bg-red-500 text-xl p-3 rounded-2xl my-3 ">
            See more{" "}
          </button>
          </RevealWrapper>
        </div>

        <div className=" md:w-full px-2 md:px-40 pb-0 md:pb-32 rounded-3xl">
          <Image
            className="rounded-[100%]"
            src={images}
            alt="panaverse"
            height={450}
            width={380}
          ></Image>
        </div>
      </div>
      <div className="mb-10 md:px-28">

          <h1 className="font-bold text-3xl md:text-4xl border-l-red-500 border-l-4 p-3">Program in a Nutshell</h1>
      </div>

      <div>
        <div className="shadow-2xl shadow-gray-500 rounded-2xl m-4 md:mx-96 p-5 md:p-12">
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
          <h1 className="text-2xl font-bold text-red-500 pb-1 border-l-red-500 border-l-4 pl-3">Earn while you learn</h1>
          <p className="text-lg pb-3">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the programs beginning. It resembles a cross
            between a corporate venture and an educational project.
          </p>
          </RevealWrapper>
        </div>
      </div>


      
        <div className="my-10 md:px-28">
          <h1 className="font-bold text-3xl md:text-4xl border-l-red-500 border-l-4 p-3">Our top courses</h1>
          <div className="text-center w-full md:flex md:pt-8">
            <div className="shadow-2xl shadow-grey-600 p-5 rounded-2xl md:w-[30%] mx-10 my-8 text-white bg-purple-900"> 
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>

              <h1 className="text-xl font-bold ">Artifical Intelligence</h1>
              <p className="text-lg pt-4">We offera one year Cloud Computing program for Pakistan Student. This contain four Quarter</p>
            </RevealWrapper>
            </div>
            <div className="shadow-2xl shadow-grey-600 p-5 rounded-2xl md:w-[30%] mx-10 my-8 text-white bg-sky-900"> 
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>

              <h1 className="text-xl font-bold ">Metaverse</h1>
              <p className="text-lg pt-4">We offera one year MetaVerse program for Pakistan Student. This contain four Quarter</p>
              </RevealWrapper>
            </div>
            <div className="shadow-2xl shadow-grey-600 p-5 rounded-2xl md:w-[30%] mx-10 my-8 text-black bg-yellow-400"> 
             <RevealWrapper>

              <h1 className="text-xl font-bold">Blockchain</h1>
              <p className="text-lg pt-4">We offera one year Blockchain program for Pakistan Student. This contain four Quarter</p>
             </RevealWrapper>
            </div>
          </div> 
          

        </div>
    </div>
  );
}
