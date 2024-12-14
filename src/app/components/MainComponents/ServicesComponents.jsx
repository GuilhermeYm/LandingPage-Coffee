import Image from "next/image";
import { Holtwood_One_SC } from "next/font/google";

const fontService = Holtwood_One_SC({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function ServicesComponents() {
  return (
    <article className="bg-backgroundServices w-full flex flex-col h-[494px]">
      <h2 className="font-fontIrian text-4xl mt-7 ml-4">Nossos serviços</h2>
      <div className="h-96 mt-16 pb-28 xl:px-60 gap-20 flex w-full 2xl:px-96">
        <section className="bg-backgroundServicesItems w-[299px] h-ServiceItemHeight rounded-3xl">
          <Image
            src={"/images/Serviços-1.png"}
            alt="Imagem de um ambiente confortável, com uma alta relação com café"
            width={299}
            height={141}
          />
          <div className="mt-7">
            <h2 className={`${fontService.className} text-white pl-3`}>
              Serviço 1
            </h2>
            <p className="text-white text-sm p-3">
              Ofereça variedades de café gourmet e bebidas especiais, como chai
              lattes e matcha. Personalize bebidas conforme as preferências dos
              clientes.
            </p>
          </div>
        </section>
        <section className="bg-backgroundServicesItems w-[299px] h-ServiceItemHeight rounded-3xl">
          <Image
            src={"/images/Serviços-1.png"}
            alt="Imagem de um ambiente confortável, com uma alta relação com café"
            width={299}
            height={141}
          />
          <div className="mt-7">
            <h2 className={`${fontService.className} text-white pl-3`}>
              Serviço 1
            </h2>
            <p className="text-sm text-white p-3">
              Ofereça bolos, tortas, muffins e biscoitos artesanais. Inclua
              opções sazonais e produtos sem glúten ou sem açúcar.
            </p>
          </div>
        </section>
        <section className="bg-backgroundServicesItems w-[299px] h-ServiceItemHeight rounded-3xl">
          <Image
            src={"/images/Serviços-1.png"}
            alt="Imagem de um ambiente confortável, com uma alta relação com café"
            width={299}
            height={141}
          />
          <div className="mt-7">
            <h2 className={`${fontService.className} text-white pl-3`}>
              Serviço 1
            </h2>
            <p className="text-sm text-white p-3">
              Sirva café da manhã e brunch, incluindo sanduíches, croissants,
              saladas e panquecas. Crie uma experiência completa e satisfatória
              para os clientes.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
