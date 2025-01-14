import React from "react";
import clsx from "clsx";

const PARTNERS = [
  { imageUrl: "secbit.png", name: "secbit" },
  { imageUrl: "zkpunk.png", name: "zkpunk" },
  { imageUrl: "worldcoin.png", name: "worldcoin" },
  { imageUrl: "hashkey.png", name: "hashkey" },
  { imageUrl: "qiming.svg", name: "qiming" },
  { imageUrl: "sevenx.png", name: "sevenx" },
  { imageUrl: "mantle.png", name: "mantle" },
  { imageUrl: "mirana.png", name: "mirana" },
  { imageUrl: "kakapot.png", name: "kakapot" },
  { imageUrl: "safe.png", name: "safe", className: "invert" },
  { imageUrl: "aztec.png", name: "aztec" },
  { name: "ezkl", title: "💭 EZKL", className: "text-6xl select-none" },
  { imageUrl: "taiko.png", name: "taiko" },
  { imageUrl: "scroll.png", name: "scroll" },
  { imageUrl: "sui.png", name: "sui" },
  { imageUrl: "giza.png", name: "giza" },
  { imageUrl: "biconomy.png", name: "biconomy", className: "invert" },
  { imageUrl: "ingonyama.png", name: "ingonyama" },
  { imageUrl: "pimlico.png", name: "pimlico", className: "invert" },
  { imageUrl: "qed.svg", name: "qed" },
  { imageUrl: "versa.png", name: "versa" },
  { imageUrl: "kucoin.png", name: "kucoin" },
  { imageUrl: "modulus_labs.png", name: "modulus labs" },
  { imageUrl: "argent.png", name: "argent", className: "invert" },
  { imageUrl: "hyper_oracle.png", name: "hyper" },
  // { imageUrl: "ofr.png", name: "ofr" },
  { imageUrl: "filecoin.png", name: "filecoin" },
  { imageUrl: "ipfs.png", name: "ipfs" },
  { imageUrl: "etherspot.png", name: "etherspot", className: "invert" },
  { imageUrl: "ocean.png", name: "ocean" },
  { imageUrl: "sin7y.png", name: "sin7y" },
  { imageUrl: "ola.svg", name: "ola", className: 'm-0 lg:m-0' },
];

export const Collaborations = () => {
  return (
    <section className="bg-web-tile pt-12 md:pt-20 lg:pt-32 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center gap-8 lg:gap-16">
          <h1 className="text-web-black text-3xl lg:text-6xl font-semibold relative inline-block max-w-xs md:max-w-max">
            Collaborate worldwide with
          </h1>

          <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-6">
            {PARTNERS.map((x) => (
              <div
                className={clsx(
                  x.className,
                  "scale-50 flex items-center justify-center -m-4 lg:-m-12"
                )}
                key={x.name}
              >
                {x.imageUrl ? (
                  <img
                    src={`/images/logo/${x.imageUrl}`}
                    alt={`Logo of ${x.name}`}
                    className=""
                  />
                ) : (
                  <p className="">{x.title}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
