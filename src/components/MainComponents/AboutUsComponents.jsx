import Image from "next/image";

export default function AboutUsComponents() {
  return (
    <div className="w-full flex h-AboutUSHeight bg-backgroundAboutUs gap-[141px]">
      <section className=" justify-center items-center w-[584px] flex">
        <Image
          src="/images/AboutUs.png"
          alt={"Uma bonita xícara de café"}
          width={303}
          height={303}
          className="ml-[145px] flex-grow"
        />
      </section>
      <section className="w-[1336px]">
        <h2 className="text-center w-fit my-auto">Sobre Nós</h2>
        <div>
          <p>
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
    </div>
  );
}
