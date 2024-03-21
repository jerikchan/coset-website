import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Hero = (props: React.ComponentProps<"div">) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center" {...props}>
        <StaticImage
          alt="Antalpha Suzhou event poster"
          src="./images/poster.jpg"
        />

        <div className="flex flex-col pt-14 pb-20 justify-center items-center text-center">
          <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
            Antalpha HackerHouse
          </h1>
          <p className="text-lg md:text-3xl leading-normal text-web-gray/70 mt-6">
            Apr 8th - Apr 21st
          </p>
          <p className="text-lg md:text-3xl leading-normal text-web-gray/70">At Suzhou</p>
          <a
            href="https://tally.so/r/w51oEo"
            target="_blank"
            rel="external"
            className="inline-flex py-4 px-10 uppercase text-xs font-semibold bg-web-black text-white rounded-sm border border-web-black mt-6 hover:opacity-80 transition-colors"
          >
            Apply to join
          </a>
        </div>
      </div>
    </>
  );
};
