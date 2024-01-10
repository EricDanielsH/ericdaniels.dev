import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const birthdayMonth: number = 2;
  const birthdayDay: number = 10;
  const today: Date = new Date();

  const options: any = {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
  };

  const ukTime = new Date().toLocaleTimeString("en-GB", options);
  let birthday = new Date(today.getFullYear(), birthdayMonth - 1, birthdayDay);

  // Check if birthday has passed this year, if so, set it for next year
  if (today > birthday) {
    birthday = new Date(
      today.getFullYear() + 1,
      birthdayMonth - 1,
      birthdayDay
    );
  }

  // Calculate the difference in milliseconds and convert to days
  const diff = birthday.getTime() - today.getTime();
  const daysUntilBirthday: number = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return (
    <section className="py-28 bg-purple-100 px-4 md:px-16 flex flex-col justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        <article className="flex-col flex space-y-4 w-full items-center justify-center">
          <div className="w-full max-w-[700px]">
            <h3 className="text-xl font-semibold text-left">/ About me</h3>
          </div>

          {/* BENTO 3x3*/}
          <div className="grid w-full grid-rows-6 grid-cols-6 gap-4 max-w-[700px] h-[600px]">
            {/*  ROW 1*/}
            <div className="border-black border-2 rounded-xl text-center col-span-3 row-span-2 p-2  md:p-8 flex justify-center items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-white font-semibold">
              <div>
                <span className="font-bold text-3xl">{ukTime}</span>
                <br />
                in the UK
              </div>
            </div>
            <div
              className="border-black border-2 rounded-xl text-center col-span-3 row-span-2 flex justify-center items-center text-lg text-balance text-white font-semibold p-2"
              style={{
                backgroundImage: `url("/assets/images/lights.gif")`,
                backgroundSize: "cover",
              }}
            >
              <div>
                <span className="font-bold text-3xl">{daysUntilBirthday}</span>{" "}
                days <br /> until birthday
              </div>
            </div>

            {/*  ROW 2*/}
            <div className="border-black border-2 rounded-xl text-center col-span-4 row-span-1 flex justify-center items-center text-lg font-semibold bg-[url('/assets/images/volley.gif')] bg-center bg-transparent">
              <div
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                className="w-full h-full flex items-center justify-center text-white"
              >
                Volleyball 🏐
              </div>
            </div>

            <Link
              href="https://www.buymeacoffee.com/ericdanielsh"
              target="_blank"
              className="border-black border-2 rounded-xl text-center col-span-2 row-span-2 flex items-center justify-center bg-[url('/assets/images/eric-about.JPG')] bg-cover bg-no-repeat bg-center "
            ></Link>

            <div className="border-black border-2 rounded-xl text-center col-span-4 row-span-1 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 flex items-center justify-center text-lg font-semibold text-white">
              Brazilian jiu-jitsu 🤼🏽
            </div>

            {/* ROW 3 */}
            <div className="border-black border-2 rounded-xl text-center col-span-full row-span-2 md:p-8 flex justify-center items-center bg-[url('/assets/images/coding-gif.gif')] bg-cover bg-no-repeat bg-center md:bg-bottom"></div>
          </div>

          {/* END BENTO */}
          <div id="projects"></div>
        </article>
      </div>
    </section>
  );
};

export default About;
