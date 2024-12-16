import Image from "next/image";
import { IoStar } from "react-icons/io5";

const fetchProduct = async () => {
  const response = await fetch(
    `http://localhost:3000/api/products/getProductsFiveStars/`
  );
  const data = await response.json();
  return data.allProductsFiveStars;
};

export default async function DisplayOfProducts() {
  const products = await fetchProduct();

  return (
    <div className="px-[42px] flex gap-6">
      {products.map((p, index) => (
        <section
          className="bg-backgroundSection h-containerSectionHeight w-containerSectionWidth flex flex-col rounded-3xl"
          key={index}
        >
          {/*Imagem do produto */}
          <div className="my-[14px] mx-[26px] mb-[11px] flex">
            {p.image ? (
              <Image src={p.image} alt={p.name} width={162} height={190} />
            ) : (
              <div className="flex items-center h-full w-full justify-center">
                <p className="text-white text-lg">
                  Não temos imagem para este produto
                </p>
              </div>
            )}
          </div>
          {/*Informações do jogador */}
          <div className="flex gap-1 items-end">
            <div className="flex">
              <p className="text-sm font-fontIrian text-white ml-[26px] tracking-wider w-[70px]">
                {p.name}
              </p>
            </div>
            <div className="flex items-end flex-1 gap-1 justify-end pr-3 ">
              {Array.from({ length: p.stars }).map((_, starIndex) => (
                <IoStar key={starIndex} className="text-sm text-yellow-400" />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
