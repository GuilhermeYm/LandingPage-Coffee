import Image from "next/image";
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ['latin'],
  display: "swap",
  weight: ["400"]
})

export default function AboutUsComponents() {
  return (
    <article className="w-full flex h-AboutUSHeight bg-backgroundAboutUs gap-[141px]">
      <section className=" justify-center items-center w-[584px] flex">
        <Image
          src="/images/AboutUs.png"
          alt={"Uma bonita xícara de café"}
          width={303}
          height={303}
          className="ml-[145px]"
        />
      </section>
      <section className="w-[1336px] flex gap-12 items-center ">
        <h2 className="text-center w-fit my-auto font-fontIsland text-8xl leading-[45px]">Sobre nós</h2>
        <div className="rounded-2xl border border-black py-4 px-6 mr-[140]">
          <p className={`${inter.className} 2xl:text-xl xl:text-lg `}>
            Bem-vindo à Bico's Coffee! Nossa paixão é criar um ambiente
            acolhedor onde amigos e familiares podem desfrutar de cafés
            especiais, bolos deliciosos e mais. Usamos grãos de alta qualidade e
            técnicas de torra que realçam sabores únicos. Nossos baristas são
            especialistas em preparar bebidas perfeitas, desde um expresso
            encorpado até um latte cremoso. Além dos cafés, oferecemos uma
            seleção de doces artesanais feitos diariamente, sanduíches e saladas
            frescas. Venha nos visitar e experimente a diferença da Bico's
            Coffee!
          </p>
        </div>
      </section>
    </article>
  );
}
