"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
export default function page() {
  return (
    <div className="my -10 md:my-20 mx-0 md:mx-32">
      <div className="px-5 md:px-20">
        <h1 className="text-3xl font-bold border-l-red-600 border-l-4 p-5">
          Course Syllabus
        </h1>
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <p className="text-lg">
            The first three quarters are shared by all specialties and are
            dedicated to studying Object-Oriented Programming and cutting-edge
            Full-Stack Web 2.0 development. It is going to be a
            fifteen-month-long hybrid program that includes both onsite and
            online classes and is divided into five quarters of 13 weeks each.
          </p>
        </RevealWrapper>
      </div>
      <div className="p-5 md:px-20">
        <h1 className="text-3xl font-bold border-l-red-600 border-l-4 p-5">
          Common in All
        </h1>
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <p className="text-lg">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
        </RevealWrapper>
      </div>

      <div className="grid md:flex mx-2 md:mx-32">
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/3 bg-gray-700 text-white text-center">
          <h1 className="text-xl font-bold text-center pb-3">Quarter 1</h1>
          <p>
            CS-101: Object-Oriented Programming using TypeScript and Typescript
            for React.
          </p>
        </div>
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/3 bg-gray-700 text-white text-center">
          <h1 className="text-xl font-bold text-center pb-3">Quarter 2</h1>
          <p>
            W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js
            13 and Cloud Development Kit (CDK) for Terraform.
          </p>
        </div>
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/3 bg-gray-900 text-white text-center">
          <h1 className="text-xl font-bold text-center pb-3">Quarter 3</h1>
          <p>
            -101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development. Specialized Course
          </p>
        </div>
      </div>

      <div className="p-5 md:px-20">
        <h1 className="text-3xl font-bold border-l-red-600 border-l-4 p-5">
          Specialized Course
        </h1>
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <p className="text-lg">
            After completing the first two quarters the participants will select
            one or more specializations consisting of two courses each:
          </p>
        </RevealWrapper>
      </div>

      {/* AI  */}
      <div className="p-5 md:px-20">
        <h1 className="text-3xl font-bold border-l-red-600 border-l-4 p-5">
          1- Artificial Intelligence (AI) and Deep Learning Specialization
        </h1>
      </div>
      <div className="grid md:flex mx-2 md:mx-32">
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-purple-800 text-white text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 4</h1>
            <p>AI-351: Developing Planet-Scale APIs and Python Programming</p>
          </RevealWrapper>
        </div>
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-purple-600 text-white text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 5</h1>
            <p>AI-361: Deep Learning and MLOps (Machine Learning Operations)</p>
          </RevealWrapper>
        </div>
      </div>

      {/* BCC */}

      <div className="p-5 md:px-20">
        <h1 className="text-3xl font-bold border-l-red-600 border-l-4 p-5">
          2- : BlockChain(Web3) and Metaverse Specialization
        </h1>
      </div>
      <div className="grid md:flex mx-2 md:mx-32">
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-yellow-300 text-black text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 4</h1>
            <p>
              MV-361: Developing Planet-Scale and Augmented Metaverse
              Experiences
            </p>
          </RevealWrapper>
        </div>
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-yellow-200 text-black text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 5</h1>
            <p>
              W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
            </p>
          </RevealWrapper>
        </div>
      </div>

      {/* CNC */}

      <div className="p-5 md:px-20">
        <h1 className="text-3xl font-bold border-l-red-600 border-l-4 p-5">
          3- Cloud-Native Computing Specialization
        </h1>
      </div>
      <div className="grid md:flex mx-2 md:mx-32">
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-pink-700 text-white text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 4</h1>
            <p>CN-351: Certified Kubernetes Application Developer (CKAD)</p>
          </RevealWrapper>
        </div>
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-pink-500 text-white text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 5</h1>
            <p>CN-361: Developing Multi-Cloud APIs using CDK for Terraform</p>
          </RevealWrapper>
        </div>
      </div>

      <div className="p-5 md:px-20">
        <h1 className="text-3xl font-bold border-l-red-600 border-l-4 p-5">
          4- Ambient Computing and IoT Specialization
        </h1>
      </div>
      <div className="grid md:flex mx-2 md:mx-32">
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-blue-700 text-white text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 4</h1>
            <p>
              AC-351: Ambient Computing with Voice Assistants and Matter Devices
            </p>
          </RevealWrapper>
        </div>
        <div className="shadow-2xl shad-grey-800 rounded-xl mx-4 my-10 p-5 md:w-1/2 bg-blue-500 text-white text-center">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <h1 className="text-xl font-bold text-center pb-3">Quarter 5</h1>
            <p>AC-361: Embedded Programming using C and Rust.</p>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
}
