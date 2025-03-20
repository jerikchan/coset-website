import clsx from "clsx";
import React from "react";

const supportersData = [
  {
    title: "ZKSH",
    icon: "/images/logo/zksh.png",
  },
  {
    title: "Scroll",
    icon: "/images/logo/scroll.png",
  },
  {
    title: "Goldshell",
    icon: "/images/logo/goldshell.png",
  },
  {
    title: "ZJUBA",
    icon: "/images/logo/zjuba.png",
  },
  {
    title: "Boundless",
    icon: "/images/logo/boundless.png",
  },
  {
    title: "OpenBuild",
    icon: "/images/logo/openbuild.png",
  },
  {
    title: "登链社区",
    icon: "/images/logo/learnblockchain.png",
  },
  {
    title: "Rebase",
    icon: "/images/logo/rebase.png",
  },
  {
    title: "HACKQUEST",
    icon: "/images/logo/hackquest.png",
  },
  {
    title: "ETHPanda",
    icon: "/images/logo/ethpanda.png",
  },
  {
    title: "TinTin",
    icon: "/images/logo/tintinland.png",
  },
  {
    title: "EthStorage",
    icon: "/images/logo/ethstorage-dark.png",
  },
  {
    title: "HOH",
    icon: "/images/logo/hoh.png",
  },
  {
    title: "STARKNET中文社区",
    icon: "/images/logo/starknet-cn-dark.png",
  },
  {
    title: "PANTA RHEI",
    icon: "/images/logo/panta-rhei.png",
  },
  {
    title: "According Work",
    icon: "/images/logo/according-work.png",
  },
  {
    title: "Zookie",
    icon: "/images/logo/zookie.png",
  },
];

export const CommunitySupports = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className="py-16 md:py-48 flex flex-col space-y-12 justify-center items-center bg-web-paper"
      {...props}
    >
      <div className="relative">
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight capitalize text-web-gray text-center">
          Community Supports
        </h1>
        <div className="absolute md:right-4 right-24 -top-20 md:-top-12 translate-x-full">
          <svg
            width="99"
            height="100"
            viewBox="0 0 99 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.8715 60.8207C32.4038 61.0595 31.8629 60.8497 31.6145 60.387C29.6736 56.7705 27.2033 53.3652 25.4914 49.6749C25.2897 49.2401 25.4366 48.7297 25.8328 48.4599C32.8953 43.6486 51.8222 30.5194 60.2831 24.3898C61.1319 23.775 62.2919 24.7318 61.8587 25.6862C60.5406 28.5899 59.2737 31.513 58.0652 34.7396C57.8192 35.3965 58.3169 36.0892 59.0182 36.0755C62.7997 36.0019 66.8908 35.9696 70.6693 36.3194C71.6419 36.4094 71.8617 37.6947 71.0017 38.1577C60.3032 43.9177 38.6633 57.8635 32.8715 60.8207Z"
              fill="#FF495D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.0781 78.1844C35.5561 78.1483 35.1481 77.7198 35.1244 77.1971C34.9856 74.1271 34.4274 71.0526 33.8087 68.0401C33.6921 67.472 34.0754 66.9237 34.6509 66.8521C39.2293 66.2827 49.7817 65.2081 56.5901 64.5316C57.6201 64.4292 58.2053 65.9093 57.4494 66.6164C55.8216 68.1394 54.3055 69.8189 52.7307 71.3683C52.322 71.7704 52.3185 72.434 52.7591 72.801C53.9049 73.7556 55.1631 74.5784 56.2983 75.5517C57.006 76.1584 57.6494 76.8239 58.3166 77.4629C58.9771 78.0956 58.6504 79.2772 57.736 79.3006C51.7664 79.4536 40.5133 78.4912 36.0781 78.1844Z"
              fill="#FF495D"
            />
          </svg>
        </div>
      </div>

      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {supportersData.map((x) => (
          <div
            key={x.title}
            className="flex flex-col w-72 px-12 py-12 hover:opacity-75 transition justify-center items-center flex-1 rounded-2xl bg-white"
          >
            <img
              src={x.icon}
              alt={`Logo of ${x.title}`}
              className={clsx("w-full h-full object-contain")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
