"use client";

import FirstPartSection from "@/app/components/ProductsInformations/FirstPartSection";
import SecondPartSection from "@/app/components/ProductsInformations/SecondPartSection";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [coffe, setCoffe] = useState(null);
  // const idString = (await params).id;
  // const idNumber = Number(idString);

  useEffect(() => {
    const fecthData = async () => {
      const data = await fetch(`http://localhost:3000/api/products/1`);
      const dataObject = await data.json();
      const correctCoffe = dataObject.coffeWithId[0];
      console.log(correctCoffe)
      setCoffe(correctCoffe)
    };
    fecthData();
  }, []);

  if (!coffe) {
    return (
      <main className="bg-backgroundMain text-white flex">
        <p>Carregando os detalhes do produto...</p>
      </main>
    );
  }

  return (
    <>
      <main className="bg-backgroundMain text-white flex">
        <article className="my-16 mx-96 bg-backgroundArticle flex h-HeightArticleProduct w-productArticleWidth rounded-xl text-black flex-col">
          <h1 className="font-fontIrian text-5xl tracking-[12px] w-[632px] mx-6 my-8">
            Detalhes sobre o {coffe.name}
          </h1>
          <section className="rounded-xl w-[1009px] h-4/5 bg-backgroundSection mx-4 text-white">
            <FirstPartSection data={coffe} />
          </section>
        </article>
      </main>
    </>
  );
}
