import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function FirstPartSection({ data }) {
  return (
    <>
      <div className="min-h-1/2 flex">
        <div className="py-6 px-5">
          <Image
            src={data.image}
            alt={"Um bom café"}
            width={228}
            height={267}
            className="rounded-[32px] border border-zinc-900"
          />
        </div>
        <div className="px-20 py-24">
          <h2 className="text-3xl font-fontIrian tracking-[4px]">Variações</h2>
          <ul className="text-xl pl-10 leading-10 list-disc">
            {data.vars.map((c, index) => (
              <li className={`${inter.className}`} key={index}>
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
