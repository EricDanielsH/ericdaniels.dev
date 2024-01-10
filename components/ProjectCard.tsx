import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "react-icons/io5";
import {
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoGoogle,
} from "react-icons/io5";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiTypescript,
  SiGooglecloud,
} from "react-icons/si";

type Props = {
  id: number;
  title: string;
  description: string[];
  image: string;
  icons: string[];
  link: string;
};

const logos: Record<string, JSX.Element> = {
  html: <IoLogoHtml5 size={20} className="text-orange-400" title="HTML" />,
  tailwind: (
    <SiTailwindcss size={20} className="text-cyan-300" title="Tailwind" />
  ),
  js: (
    <IoLogoJavascript
      size={20}
      className="text-yellow-300"
      title="JavaScript"
    />
  ),
  ts: <SiTypescript size={20} className="text-blue-600" title="" />,
  react: <IoLogoReact size={20} className="text-cyan-400" title="React" />,
  native: (
    <IoLogoReact size={20} className="text-cyan-400" title="React Native" />
  ),
  nextjs: <SiNextdotjs size={20} className="text-white" title="Next.js" />,
  google: (
    <SiGooglecloud size={20} className="text-red-500" title="Google Cloud" />
  ),
  c: <SiC size={20} className="text-blue-500" title="C" />,
};

const ProjectCard = ({ id, title, description, image, icons, link }: Props) => {
  return (
    <article className="max-w-[500px] bg-purple-200 relative rounded-xl shadow-md">
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
        <IoLogoGithub size={30} />
      </Link>

      <div className="h-[150px] w-full flex flex-col justify-end items-start pt-12 p-4 ">
        <h4 className="text-lg font-semibold underline mb-2">{title}</h4>
        {description.map((desc, index) => (
          <p className="max-w-prose" key={index}>
            {desc}
          </p>
        ))}
      </div>
      {/* ICONS */}
      <div className="bg-purple-950 p-4 flex gap-2 rounded-b-xl">
        {icons.map(
          (icon, index) => logos[icon] && <div key={index}>{logos[icon]}</div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
