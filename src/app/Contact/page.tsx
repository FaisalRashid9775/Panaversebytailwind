import React from "react";

export default function page() {
  return (
    <div className="my-10">
      <div className="rounded-b-[15%] bg-black w-full text-white mb-8 text-center border-l-red-600 border-l-8 border-r-red-600 border-r-8 h-96 py-40 md:py-80">
        <h1 className="text-5xl md:text-8xl">Contact us</h1>
      </div>

      <div className=" shadow-2xl shadow-red-200 mx-10 md:mx-auto rounded-2xl w-auto md:w-1/3 md:my-20">
        <div>
        <h1 className="text-2xl text-center font-bold py-4">Contact Us</h1>
        </div>
        <div>
          <div>
        <input placeholder="Enter Your Name" type="text" className="  shadow-red-200 shadow-lg text-xl mx-6 md:mx-16 my-3 w-auto md:w-96 border border-double border-black rounded-xl p-3" ></input>
          </div>
          <div>
        <input placeholder="Enter Your Email" type="text" className="  shadow-red-200 shadow-lg text-xl mx-6 md:mx-16 my-3 w-auto md:w-96 border border-double border-black rounded-xl p-3" ></input>
          </div>
        <div>
        <input placeholder="Enter Your Message" type="text" className="  shadow-red-200 shadow-lg h-28 text-xl mx-6 md:mx-16 my-3 max-96 md:w-96 border border-double border-black rounded-xl p-3" ></input>
        </div>
        <div>
        <button className="bg-black text-white px-5 py-3 mx-8 md:mx-16 w-3/4 text-xl rounded-2xl my-5 md:justify-center">Submit</button>
        </div>
        </div>
      </div>
    </div>
  );
}
