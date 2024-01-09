import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "react-icons/io5"
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io5";

type Props = {
  id: number;
  title: string;
  description: string[];
  image: string;
  icons: string[];
  link: string;
};

const ProjectCard = ({ id, title, description, image, icons, link }: Props) => {
  return (
    <article className="max-w-[500px] bg-pink-100 relative rounded-xl shadow-md">
      <Image
        src={`/assets/images/${image}`}
        alt="Project-image"
        width={400}
        height={100}
        className="w-full rounded-t-xl"
      />
      <Link
        href={link}
        title="Check on Github!"
        target="_blank"
        className="absolute shadow-lg rounded-full top-0 right-0 m-3 cursor-pointer hover:text-pink-300 bg-white"
      >
        <IoLogoGithub  size={30}  />
      </Link>

      <div className="h-[150px] w-full flex flex-col justify-end items-start pt-12 p-4 ">
        <h4 className="text-lg font-semibold underline mb-2">{title}</h4>
        {description.map((desc, index) => (
          <p className="max-w-prose" key={index}>
            {desc}
          </p>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
