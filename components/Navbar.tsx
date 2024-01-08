"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white flex flex-1 items-center justify-center shadow-lg">
      <div className="bg-white container py-3 px-4 md:px-16 flex flex-1 items-center justify-between">
        <Image
          src="/assets/images/eric-logo.png"
          height={10}
          width={200}
          alt="Logo"
        />

        {/* DESKTOP NAV */}
        <ul className="md:flex gap-6" hidden>
          <li>
            <Link href="#"> Cositas</Link>
          </li>
          <li>
            <Link href="#"> Cositas</Link>
          </li>
          <li>
            <Link href="#"> Cositas</Link>
          </li>
        </ul>

        {/* MOBILE NAV */}
        <div className="md:hidden flex relative cursor-pointer">
          <Image
            src="/assets/icons/menu.svg"
            width={30}
            height={30}
            alt="menu-icon"
            onClick={handleMenu}
          />
          {isOpen && (
            <div className="bg-white absolute right-0 top-full p-4 mt-3 flex-col min-w-[200px] rounded-lg shadow-md" >
              <ul className="flex flex-col gap-2 w-full items-end justify-end">
                <li>
                  <Link href="#" onClick={() => setIsOpen(false)}>
                    Cositas
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => setIsOpen(false)}>
                    Cositas
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => setIsOpen(false)}>
                    Cositas
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
