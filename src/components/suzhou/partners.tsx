import clsx from "clsx";
import React from "react";

const partnersData = [
  {
    link: "https://sin7y.org/",
    title: "Sin7y Labs",
    icon: "/images/logo/sin7y.jpg",
    tag: "Co-Host",
    className: "bg-black !p-0",
  },
  {
    link: "https://sin7y.org/",
    title: "Ola",
    icon: (
      <svg viewBox="0 0 189 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M184.131 57.6928L175.42 39.0827H142.708L133.775 57.6928H118.63L146.453 0.0707094H161.6L188.599 57.6928H184.131ZM159.099 4.70456L144.806 34.7264H173.346L159.099 4.70456ZM112.308 57.6928H65.6033L83.325 0.0707094H88.9022L75.9657 43.2873H119.398L112.308 57.6928ZM0.030511 28.5268C0.207372 23.7215 1.58181 19.0365 4.02899 14.8972C6.71667 10.3434 10.4201 6.72198 15.1392 4.03305C19.8583 1.34412 25.0986 -0.000226065 30.8601 2.85136e-08H33.9869C39.6929 2.85136e-08 44.892 1.34435 49.584 4.03305C54.1811 6.62951 58.0136 10.3907 60.6959 14.9383C63.1525 19.0608 64.5403 23.7317 64.7334 28.5268H0.030511ZM58.8442 22.1811C56.3193 19.7942 52.9172 17.9013 48.6378 16.5022C44.3584 15.1032 39.6946 14.4041 34.6465 14.405H30.2021C25.1523 14.405 20.4744 15.1046 16.1685 16.5037C11.8597 17.9028 8.44401 19.7958 5.92137 22.1826C4.50885 23.5176 3.49313 24.9172 2.8742 26.3815L3.14551 25.7557H11.1696L12.8195 26.3815H39.9049L42.3484 24.0898L45.7093 27.2981H46.0162L48.7649 24.5482H51.3628L54.2658 27.4509H54.7236L57.3214 25.7704H61.6065C60.8993 24.424 59.9647 23.21 58.8442 22.1818V22.1811ZM2.14167 30.1994H64.7656C64.7266 35.5931 63.37 40.5473 60.6959 45.0619C58.0144 49.6102 54.1817 53.3717 49.584 55.9676C44.8937 58.657 39.6946 60.0011 33.9869 60H30.8601C25.0981 60 19.8578 58.6559 15.1392 55.9676C10.4206 53.2794 6.71724 49.6446 4.02899 45.0632C1.37861 40.5496 0.0356097 35.5955 0 30.2008H2.14167V30.1994ZM5.92137 37.819C8.44458 40.2059 11.8603 42.0989 16.1685 43.4981C20.4767 44.8973 25.1546 45.5969 30.2021 45.5969H34.6465C39.693 45.5969 44.3567 44.8973 48.6378 43.4981C52.9188 42.0989 56.321 40.2059 58.8442 37.819C59.9801 36.777 60.9227 35.5422 61.6285 34.1718H3.13705C3.8416 35.5432 4.78437 36.7784 5.92137 37.8197V37.819Z"
          fill="#1EF028"
        ></path>
      </svg>
    ),
    tag: "Co-Host",
  },
  {
    title: "secbit",
    link: "https://secbit.io/",
    icon: "/images/logo/secbit.png",
    tag: "Tech Support",
  },
];

export const Partners = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className="py-16 md:py-48 flex flex-col space-y-12 justify-center items-center bg-web-paper"
      {...props}
    >
      <div className="relative">
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight capitalize text-web-gray">
          Partners
        </h1>
        <div className="absolute right-4 -top-12 translate-x-full">
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

      <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {partnersData.map((x) => (
          <div key={x.title ?? x.link} className="flex flex-col h-[338px] w-72">
            <a
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "w-72 h-72 px-12 py-12 border border-web-gray/30 hover:opacity-75 transition flex justify-center items-center flex-1 hover:underline",
                x.className
              )}
            >
              {typeof x.icon === "string" ? (
                <img
                  src={x.icon}
                  alt={`Logo of ${x.title}`}
                  className={clsx("w-full h-full object-contain")}
                />
              ) : React.isValidElement(x.icon) ? (
                x.icon
              ) : (
                <p className="text-4xl">{x.title}</p>
              )}
            </a>
            <div className="bg-web-tile border border-web-gray/30 -mt-[1px] flex justify-center items-center py-3 text-web-black">
              {x.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
