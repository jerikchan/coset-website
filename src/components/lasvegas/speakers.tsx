import clsx from "clsx";
import React from "react";

type Speaker = {
  link?: string;
  name: string;
  image?: string;
  title: string;
  className?: string;
};

const SPEAKERS: Speaker[] = [
  {
    name: "Super Testnet",
    image: "/images/hackerhouse/lasvegas/super-testnet.jpg",
    title: "Independent software developer",
  },
  {
    name: "Liam Eagen",
    title: "Alpen Labs and ZFT",
  },
  // {
  //   name: "Kevin He",
  //   image: "/images/hackerhouse/lasvegas/kevin-he.jpg",
  //   title: "Bitlayer",
  // },
  {
    name: "Xiaohui Liu",
    image: "/images/hackerhouse/lasvegas/profile-xiaohui-liu.png",
    title: "sCrypt",
  },
  {
    name: "Weikeng",
    image: "/images/hackerhouse/lasvegas/weikeng.jpg",
    title: "L2 Iterative",
  },
  {
    name: "Carter",
    image: "/images/hackerhouse/lasvegas/carter.jpg",
    title: "QED",
  },
];

export const Speakers = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className="py-16 md:py-48 flex flex-col space-y-12 justify-center items-center bg-web-paper"
      {...props}
    >
      <div className="relative">
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight capitalize text-web-gray">
          Speakers
        </h1>
        <div className="absolute -left-12 -top-12">
          <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.1968 15.8632C38.5802 11.8848 27.428 15.809 21.1492 22.5737C10.3282 34.2327 14.2422 54.6271 26.1016 60.9649C39.1782 67.9525 52.555 61.6136 57.7744 53.317C64.539 42.5638 64.6162 27.9739 53.9744 20.1196"
              stroke="#FFD25F"
              stroke-width="3.49463"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.9928 34.6619C31.1429 35.977 31.4232 37.2957 31.7496 38.579"
              stroke="#FFD25F"
              stroke-width="3.49463"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.1524 31.1374C42.589 32.6538 43.1299 34.2128 43.4056 35.7727"
              stroke="#FFD25F"
              stroke-width="3.49463"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.0171 47.007C28.7922 48.3148 29.9827 49.315 31.2995 50.0426C37.7574 53.6117 46.7523 49.395 48.6564 42.3558"
              stroke="#FFD25F"
              stroke-width="3.49463"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SPEAKERS.map((x) => (
          <div key={x.name} className="flex flex-col w-72">
            {x.link ? (
              <a
                href={x.link}
                target={x.link ? "_blank" : "_parent"}
                rel="noopener noreferrer"
                className={clsx(
                  "w-72 h-72 px-12 py-12 border rounded-lg shadow-xl border-web-gray/30 hover:opacity-75 transition flex justify-center items-center flex-1 hover:underline",
                  x.className
                )}
              >
                <img
                  src={x.image}
                  alt={`Avatar of ${x.name}`}
                  className={clsx("w-full h-full object-contain")}
                />
              </a>
            ) : typeof x.image === "string" ? (
              <img
                src={x.image}
                alt={`Avatar of ${x.name}`}
                className="w-72 h-72 border rounded-lg shadow-xl border-web-gray/30 hover:opacity-75 transition flex justify-center items-center flex-1 object-contain"
              />
            ) : (
              <div className="object-contain w-72 h-72 px-12 py-12 border rounded-lg shadow-xl border-web-gray/30 hover:opacity-75 transition flex justify-center items-center flex-1">
                {x.title}
              </div>
            )}
            <h4 className="text-2xl text-center mt-2">{x.name}</h4>
            <p className="-mt-[1px] flex justify-center items-center py-1 text-web-black">
              {x.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
