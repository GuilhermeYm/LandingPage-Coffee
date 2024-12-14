import AboutUsComponents from "./AboutUsComponents";
import DisplayOfProducts from "./DisplayOfProducts";
import FooterComponents from "./FooterComponents";
import ServicesComponents from "./ServicesComponents";

export default function MainComponents() {
  return (
    <>
      <main className="bg-backgroundMain w-full py-[47px] px-[61px] h-mainOneHeight overflow-hidden">
        <article className="2xl:w-containeritemsWidth bg-backgroundArticle h-[488px] xl:w-[1400px] rounded-xl flex flex-col shadow-lg shadow-black">
          <p className="text-2xl mt-[40px] ml-[20px] mb-[80px] font-fontIrian tracking-wider">
            Com melhores avaliações
          </p>
          <DisplayOfProducts />
        </article>
      </main>
      <AboutUsComponents />
      <ServicesComponents />
      <FooterComponents />
    </>
  );
}
