import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default async function FirstPartSection({ id }) {

  const data = await fetch(`http://localhost:3000/api/products/${id}`)
  const dataObject = await data.json();
  const coffes = dataObject.coffeWithId[0]

  return (
    <>
      <div className="min-h-1/2 flex">
        <div className="py-6 px-5">
          <Image
            src={"/images/coffees/CoffeeE.png"}
            alt={"Um bom café"}
            width={228}
            height={267}
            className="rounded-[32px] border border-zinc-900"
          />
        </div>
        <div className="px-20 py-24">
          <h2 className="text-3xl font-fontIrian tracking-[4px]">Variações</h2>
          <ul className="text-xl pl-10 leading-10 list-disc">
            <li className={`${inter.className}`}>dasl~dsadsa</li>
            <li className={`${inter.className}`}>daskjdslajdsalkjd</li>
            <li className={`${inter.className}`}>lsdhakldhaskjhdas</li>
          </ul>
        </div>
      </div>
    </>
  );
}
