import { Inria_Serif } from "next/font/google";
import Image from "next/image";
import DisplayOfProducts from "./DisplayOfProducts";

const InriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function MainComponents() {
  return (
    <main className="bg-backgroundMain w-full py-[47px] px-[61px] h-mainOneHeight">
      <article className="w-containeritemsWidth bg-backgroundArticle h-[350px] rounded-xl flex flex-col">
        <p className={`${InriaSerif.className} text-2xl mt-[26px] ml-[20px]`}>
          Com melhores avaliações
        </p>
        <DisplayOfProducts />
      </article>
    </main>
  );
}
