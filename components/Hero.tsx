import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const Hero = () => {
  return (
    <section className="flex flex-1 items-center justify-center py-28">
      <div className="container mx-auto flex items-center justify-center px-4 md:px-16 flex-col md:flex-row gap-10 md:gap-36 text-center">
        <Image
          src="/assets/images/hero-pfp.jpeg"
          width={300}
          height={300}
          alt="hero"
          className="md:flex rounded-full max-w-[250px] border-[2px] border-black shadow-lg"
        />
        {/* RIGHT */}
        <div className="flex flex-col justify-between items-center w-[30%] h-full">
          <div className="flex-col">
            <h1 className="text-4xl md:text-6xl w-full pr-1 font-bold animate-typing">Eric Daniels</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-nowrap">
              Software Developer
            </h2>
          </div>

          {/* ICONS */}
          <div className="flex justify-center w-[200px] flex-col md:flex-row gap-4 mt-6">
            <Link
              href="https://www.linkedin.com/in/EricDanielsH/"
              target="_blank"
              className="flex justify-center items-center gap-2 border-purple-400 border-[2px] rounded-md p-2 font-semibold hover:bg-purple-200 transition ease duration-300 cursor-pointer text-base  shadow-md"
            >
              <FaLinkedin title="LinkedIn" size={30} />
              LinkedIn
            </Link>
            <Link
              href="https://drive.google.com/file/d/138ZZrslqwzySRxC0CfdhYctMS8CwOFx3/view?usp=sharing"
              target="_blank"
              className="flex justify-center items-center gap-2 border-purple-400 border-[2px] rounded-md p-2 font-semibold hover:bg-purple-200 transition ease duration-300 cursor-pointer text-base  shadow-md"
            >
              <IoIosDocument title="CV" size={30} />
              Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/EricDanielsH/"
              target="_blank"
              className="flex justify-center items-center gap-2 border-purple-400 border-[2px] rounded-md p-2 font-semibold hover:bg-purple-200 transition ease duration-300 cursor-pointer text-base shadow-md"
            >
              <FaGithub title="Github" size={30} />
              Github
            </Link>
          </div>
          <div id='about'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
