"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoIosDocument, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="sticky bg-white flex flex-1 items-center justify-center shadow-lg w-full top-0 left-0 right-0 px-10">
      <div className="bg-white container py-6 md:py-8 md:px-16 flex flex-1 items-center justify-between">
        <Link href="#">
          <Image
            src="/assets/images/eric-logo.png"
            height={10}
            width={200}
            alt="Logo"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="md:flex gap-10 text-xl font-semibold" hidden>
          <li>
            <Link
              href="#about"
              className="hover:text-pink-300 ease-linear duration-150"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-pink-300 ease-linear duration-150"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-pink-300 ease-linear duration-150"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE NAV */}
        <div className="md:hidden flex relative cursor-pointer">
          <div onClick={handleMenu} className="cursor-pointer ">
            {isOpen ? (
              <IoMdClose
                size={30}
                className="hover:text-pink-300 transition-all duration-150 ease-linear"
              />
            ) : (
              <IoMdMenu
                size={30}
                className="hover:text-pink-300 transition-all duration-150 ease-linear"
              />
            )}
          </div>
          {isOpen && (
            <div className="bg-white absolute right-0 top-full p-4 mt-3 flex-col min-w-[200px] rounded-lg shadow-md">
              <ul className="flex flex-col gap-2 w-full items-end justify-end font-semibold text-xl">
                <li>
                  <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-pink-300 ease-linear duration-150"
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-pink-300 ease-linear duration-150"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-pink-300 ease-linear duration-150"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col justify-center gap-4 mt-6">
                <Link
                  href="https://www.linkedin.com/in/EricDanielsH/"
                  target="_blank"
                  className="flex items-center justify-center gap-2 border-pink-300 border-[2px] rounded-md p-2 font-semibold hover:bg-pink-200 transition ease duration-300 cursor-pointer text-lg"
                >
                  <FaLinkedin title="LinkedIn" size={30} />
                  LinkedIn
                </Link>
                <Link
                  href="https://drive.google.com/file/d/138ZZrslqwzySRxC0CfdhYctMS8CwOFx3/view?usp=sharing"
                  target="_blank"
                  className="flex items-center justify-center gap-2 border-pink-300 border-[2px] rounded-md p-2 font-semibold hover:bg-pink-200 transition ease duration-300 cursor-pointer text-xl"
                >
                  <IoIosDocument title="CV" size={30} />
                  Resume
                </Link>
                <Link
                  href="https://www.linkedin.com/in/EricDanielsH/"
                  target="_blank"
                  className="flex items-center justify-center gap-2 border-pink-300 border-[2px] rounded-md p-2 font-semibold hover:bg-pink-200 transition ease duration-300 cursor-pointer text-lg"
                >
                  <FaGithub title="Github" size={30} />
                  Github
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
