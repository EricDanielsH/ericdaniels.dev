import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container flex flex-1 items-center justify-center">
      <div className="flex px-4 md:px-16">
        <Image
          src="/assets/images/hero.png"
          width={100}
          height={100}
          alt="hero"
        />
        <div className="flex-col">
          <h1 className="text-6xl">Eric Daniels</h1>
          <h2 className="text-xl">Software Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
