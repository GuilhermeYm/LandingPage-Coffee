"use client";

import { useState } from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function DisplayOfProducts() {
  const [theBestProducts, setTheBestProducts] = useState([
    {
      image: "/images/coffees/coffeeE.png",
      title: "Café Expresso",
      stars: 5,
    },
    {
      image: "/images/cappuccinos/Cappuccino.png",
      title: "Cappuccino c/ calda...",
      stars: 5,
    },
    {
      image: "/images/salgados/MistoQuente.png",
      title: "Misto Quente",
      stars: 5
    },
    {
      image: "/images/outros/MilkShake.png",
      title: "Milk Shake",
      stars: 5
    }
  ]);
  return (
    <div className="px-[42px]">
      {theBestProducts.map((p) => (
        <section
          className="bg-backgroundSection h-containerSectionHeight w-containerSectionWidth flex flex-col rounded-3xl"
          key={p.id}
        >
          {/*Imagem do produto */}
          <div className="my-[14px] mx-[26px] mb-[11px] flex">
            <Image src={p.image} alt={p.title} width={162} height={190} />
          </div>
          {/*Informações do jogador */}
          <div className="flex gap-1">
            <div className="flex">
              <p className="text-sm font-fontIrian text-white ml-[26px] tracking-wider w-[70px]">
                {p.title}
              </p>
            </div>
            <div className="flex items-end flex-1 gap-1 justify-end pr-3 ">
              <IoStar className="text-sm text-yellow-400" />
              <IoStar className="text-sm text-yellow-400" />
              <IoStar className="text-sm text-yellow-400" />
              <IoStar className="text-sm text-yellow-400" />
              <IoStar className="text-sm text-yellow-400" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
