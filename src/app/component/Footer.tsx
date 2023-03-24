import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="md:flex bg-black p-10 align-middle gap-8">
      <div className="md:w-1/4 px-0 md:px-10 mb-5 md:mb-0">
        <h1 className="text-white font-bold text-xl mb-5 border-l-red-500 border-l-8 pl-2">
          About us
        </h1>
        <p className="text-white">
          The future of web is web3 metaverse and cloud computing. Panaverse Dao
          is inistituve of PIAIC for leading the Pakisatni students in thes
          field
        </p>
      </div>
      <div className="md:w-1/4 px-0 md:px-10 mb-5 md:mb-0">
        <h1 className="text-white font-bold text-xl mb-5 border-l-red-500 border-l-8 pl-2">
          Useful Link
        </h1>
        <ul className="text-white">
          <li className="hover:text-red-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/Explore"}>Explore</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/About"}>About</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="md:w-1/4 px-0 md:px-10 mb-5 md:mb-0">
        <h1 className="text-white font-bold text-xl mb-5 border-l-red-500 border-l-8 pl-2">
          Follow us
        </h1>
        <ul className="text-white">
          <li className="hover:text-red-500">
            <Link href={"/https://github.com/panaverse"}>Github</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/https://www.youtube.com/@panaverse"}>Youtube</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/https://www.facebook.com/groups/panaverse/"}>Facebook</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/https://www.linkedin.com/company/panaverse/"}>Linkdln</Link>
          </li>
        </ul>
      </div>
      <div className="md:w-1/4 px-0 md:px-10 mb-5 md:mb-0">
        <h1 className="text-white font-bold text-xl mb-5 border-l-red-500 border-l-8 pl-2">
          Contact us
        </h1>
        <ul className="text-white">
          <li>+92 331 1234567</li>
          <li>panaversedao@gmail.com</li>
          <li>Karachi Pakistan</li>
        </ul>
      </div>
    </div>
  );
}
