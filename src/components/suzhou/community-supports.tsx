import clsx from "clsx";
import React from "react";

const partnersData = [
  {
    title: "aleo",
    link: "https://aleo.org/",
    icon: (
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjE2IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNzMuNDI2IDBWOC45MzgyNEg4MS42ODQyVjc4Ljg5NjFIOTAuNjA0NVYwSDczLjQyNloiIGZpbGw9IiNGNUY1RjUiLz4KPHBhdGggZD0iTTE1NC4xNDUgNTEuNDIxNkMxNTQuMTQ1IDMyLjU1MTggMTQzLjY4MyAyMS4yOTcgMTI3LjYwNCAyMS4yOTdDMTExLjUyNiAyMS4yOTcgMTAwLjk1NCAzMi4wMDA3IDEwMC45NTQgNTAuODY4N0MxMDAuOTU0IDY5LjczNjcgMTExLjQxNSA4MCAxMjcuNjA0IDgwQzE0MC4zNzggODAgMTQ5Ljk2IDcyLjYwNjEgMTUyLjYwMyA2Mi4zNDQ3SDE0Mi42OTJDMTQwLjQ4OCA2Ny4wOTAyIDEzNS45NzUgNzEuMjgyOSAxMjcuNjA0IDcxLjI4MjlDMTE2LjgxMiA3MS4yODI5IDExMS4zMDcgNjQuNDQxOSAxMTAuMjA1IDU0LjYyMDlIMTU0LjE0NVY1MS40MjE2Wk0xMTAuMzE2IDQ2LjEyNUMxMTEuNjM2IDM2LjYzNTcgMTE3LjM2NCAyOS45MDM1IDEyNy42MDQgMjkuOTAzNUMxMzcuODQ1IDI5LjkwMzUgMTQzLjI0MiAzNi41MjUxIDE0NC41NjQgNDYuMTI1SDExMC4zMTZaIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xODkuMjcyIDIxLjI5N0MxNzMuMDgzIDIxLjI5NyAxNjIuNjIyIDMyLjAwMDcgMTYyLjYyMiA1MC44Njg3QzE2Mi42MjIgNjkuNzM2NyAxNzMuMDgzIDgwIDE4OS4yNzIgODBDMjA1LjQ2MSA4MCAyMTUuODEyIDcwLjA2ODQgMjE1LjgxMiA1MC44Njg3QzIxNS44MTIgMzEuNjY5IDIwNS4zNTEgMjEuMjk3IDE4OS4yNzIgMjEuMjk3Wk0xODkuMjcyIDcxLjUwNDFDMTc3LjcwOSA3MS41MDQxIDE3MS40MzIgNjIuNDU1MyAxNzEuNDMyIDUwLjc2QzE3MS40MzIgMzkuMDY0NyAxNzcuNzA5IDI5LjY4NDIgMTg5LjI3MiAyOS42ODQyQzIwMC44MzYgMjkuNjg0MiAyMDcuMDAzIDM4Ljg0MzYgMjA3LjAwMyA1MC43NkMyMDcuMDAzIDYyLjY3NjQgMjAwLjk0NiA3MS41MDQxIDE4OS4yNzIgNzEuNTA0MVoiIGZpbGw9IiNGNUY1RjUiLz4KPHBhdGggZD0iTTQ2LjU1NjUgMEgyOC4zODQ5TDEyLjYxMzQgNDYuMTI1SDIyLjIxNzlMMzQuOTkzMyA4LjQ5NTkzSDM5LjYxODlMNTIuMzkyNSA0Ni4xMjVIMjIuMjE3OUwxOS4yNDU3IDU0LjYyMDlINTUuMjU2MUw2My41MTQzIDc4Ljg5NjFINzMuNDI2TDQ2LjU1NjUgMFoiIGZpbGw9IiNGNUY1RjUiLz4KPHBhdGggZD0iTTEuNDA1MDggNzguODk2MUgxMC45ODU3TDE5LjI0NTcgNTQuNjIwOUw5LjcwNzQgNTQuNjIwOUwxLjQwNTA4IDc4Ljg5NjFaIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0zLjA5MzUgNDYuMTI1TDAuMTg3NSA1NC42MjA5SDkuNzA3NEwxMi42MTM0IDQ2LjEyNUgzLjA5MzVaIiBmaWxsPSIjRjVGNUY1Ii8+Cjwvc3ZnPgo="
        alt="Aleo"
      />
    ),
    tag: "Community Support",
    className: "bg-black",
  },
  {
    title: "Plancker",
    link: "https://plancker.org/",
    icon: "/images/logo/plancker.png",
    tag: "Community Support",
    className: "bg-black",
  },
  {
    title: "DelphinusLab",
    link: "https://delphinuslab.com/",
    icon: "/images/logo/delphinuslab.png",
    tag: "Community Support",
    className: "bg-black",
    imageClassName: "transform rotate-[-12.2deg]",
  },
  {
    title: "Manta Network",
    link: "https://manta.network/",
    icon: "https://manta.network/assets/img/logo.svg",
    tag: "Community Support",
  },
  {
    title: "Starknet Astro",
    link: "https://twitter.com/StarkNetAstro",
    icon: "/images/logo/starknetastro.png",
    tag: "Community Support",
    className: "bg-black",
  },
  {
    title: "Openbuild",
    link: "https://openbuild.xyz/",
    icon: "https://openbuild.xyz/_next/static/media/logo-black.41be43e7.svg",
    tag: "Community Support",
  },
  {
    title: "Openbuild",
    link: "https://openbuild.xyz/",
    icon: "/images/hackerhouse/chiangmai/support/ethstorage.png",
    tag: "Community Support",
    className: "bg-black",
  },
  {
    title: "Scroll",
    link: "https://scroll.io/",
    icon: "/images/logo/scroll.png",
    tag: "Community Support",
  },
  {
    title: "Starknet CN",
    link: "https://twitter.com/starknet_zh",
    icon: "/images/logo/starknet-cn.png",
    tag: "Community Support",
    className: "bg-black",
    imageClassName: "transform rotate-[-8.57deg]",
  },
  {
    title: "Rebase",
    link: "https://rebase.network",
    icon: "/images/hackerhouse/chiangmai/support/rebase.png",
    tag: "Community Support",
    className: "bg-black",
  },
  {
    title: "LX Dao",
    link: "https://lxdao.io/",
    icon: "https://lxdao.io/icons/lxdao-logo.svg",
    tag: "Community Support",
  },
  {
    title: "ScaleBit",
    link: "https://www.scalebit.xyz/",
    icon: "https://www.scalebit.xyz/images/newlogo.png",
    tag: "Community Support",
  },
  {
    title: "Salus",
    link: "https://salusec.io/",
    icon: "https://salusec.io/_nuxt/img/logo.5bf81c7.webp",
    tag: "Community Support",
    className: "bg-black",
  },
];

export const CommunitySupports = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className="py-16 md:py-48 flex flex-col space-y-12 justify-center items-center bg-web-tile"
    {...props}
    >
      <div className="relative">
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight capitalize text-web-gray text-center">
          Community Supports
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

      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-8">
        {partnersData.map((x) => (
          <div
            key={x.title ?? x.link}
            className={clsx("flex flex-col h-[338px] w-72", x.className)}
          >
            <a
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs h-40 px-12 py-12 border border-web-gray/30 hover:opacity-75 transition flex justify-center items-center flex-1 hover:underline"
            >
              {typeof x.icon === "string" ? (
                <img
                  src={x.icon}
                  alt={`Logo of ${x.title}`}
                  className={clsx(
                    "w-full h-full object-contain",
                    x.imageClassName
                  )}
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
