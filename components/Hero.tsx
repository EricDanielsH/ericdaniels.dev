import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const Hero = () => {
  return (
    <section className="flex flex-1 items-center justify-center py-28">
      <div className="container mx-auto flex items-center justify-center px-4 md:px-16 flex-col md:flex-row gap-10 md:gap-16 text-center">
        <Image
          src="/assets/images/hero-pfp.jpeg"
          width={300}
          height={300}
          alt="hero"
          className="md:flex rounded-full border-[2px] border-black shadow-lg"
        />
        {/* RIGHT */}
        <div className="flex flex-col justify-between items-center  h-full">
          <div className="flex-col">
            <h1 className="text-6xl  font-bold">Eric Daniels</h1>
            <h2 className="text-2xl font-semibold">Software Developer</h2>
          </div>

          {/* ICONS */}
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://www.linkedin.com/in/EricDanielsH/"
              target="_blank"
              className="flex items-center gap-2 border-pink-300 border-[2px] rounded-md p-2 font-semibold hover:bg-pink-200 transition ease duration-300 cursor-pointer text-lg"
            >
              <FaLinkedin title="LinkedIn" size={30} />
              LinkedIn
            </Link>
            <Link
              href="https://drive.google.com/file/d/138ZZrslqwzySRxC0CfdhYctMS8CwOFx3/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 border-pink-300 border-[2px] rounded-md p-2 font-semibold hover:bg-pink-200 transition ease duration-300 cursor-pointer text-lg"
            >
              <IoIosDocument title="CV" size={30} />
              Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/EricDanielsH/"
              target="_blank"
              className="flex items-center gap-2 border-pink-300 border-[2px] rounded-md p-2 font-semibold hover:bg-pink-200 transition ease duration-300 cursor-pointer text-lg"
            >
              <FaGithub title="Github" size={30} />
              Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
