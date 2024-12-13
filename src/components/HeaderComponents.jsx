"use client";

import { CiShoppingCart } from "react-icons/ci";

export default function HeaderComponents() {
  return (
    <header
      className="flex flex-col max-h-headerHeight
      h-headerHeight w-full bg-cover bg-center text-white"
      id="header"
    >
      <nav className="font-fontJeju flex justify-between h-[121px]">
        <h2 className="text-4xl w-[194px] tracking-widest my-3 mx-5 h-fit">
          Bico's Coffe
        </h2>
        <ul className="flex gap-7 h-full py-7 pr-5 items-center">
          <li className="text-center">Home</li>
          <li className="text-center">Contato</li>
          <li className="text-center">Login</li>
          <li className="text-center">
            <CiShoppingCart className="text-2xl" />
          </li>
        </ul>
      </nav>
      <div className=" flex grow h-full w-full items-center flex-col justify-center">
        <h1 className="text-6xl font-fontJeju font-normal tracking-spaceTitle">
          The Beste Coffee
        </h1>
        <p className="font-fontIrian my-2">Um bom café, transforma dias</p>
      </div>
    </header>
  );
}