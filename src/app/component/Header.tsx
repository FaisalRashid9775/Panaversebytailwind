import Image from "next/image";
import React ,{useState} from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import logo from "../../../public/Logo.webp";
import Link from "next/link";

export default function Header() {
 
  return (
    <>
      <div className="flex justify-between items-center px-8 ">
        <div>
          <Image src={logo} alt="panaverse" width={150} height={90}></Image>
        </div>
        <div>
          
          <ul className="flex-initial md:flex space-x-0 md:space-x-9 font-semibold text-xl">
            <li className="hover:text-red-500 m-2">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-red-500 m-2">
              <Link href={"/Explore"}>Explore </Link>
            </li>
            <li className="hover:text-red-500 m-2">
              <Link href={"/About"}>About</Link>
            </li>
            <li className="hover:text-red-500 m-2">
              <Link href={"/Contact"}>Contact</Link>
            </li>
          <div>
            <button className="bg-black text-white font-semibold text-xl px-6 py-2 rounded-xl hover:bg-red-500 hidden md:flex">
              <Link href={'https://portal.piaic.org/signup'}>Apply</Link>
            </button>
          </div>
          </ul>
        </div>
        




      </div>
    </>
  );
}
