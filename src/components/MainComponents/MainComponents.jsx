import DisplayOfProducts from "./DisplayOfProducts";

export default function MainComponents() {
  return (
    <main className="bg-backgroundMain w-full py-[47px] px-[61px] h-mainOneHeight overflow-hidden">
      <article className="2xl:w-containeritemsWidth bg-backgroundArticle h-[488px] xl:w-[1400px] rounded-xl flex flex-col">
        <p className="text-2xl mt-[40px] ml-[20px] mb-[80px] font-fontIrian tracking-wider">
          Com melhores avaliações
        </p>
        <DisplayOfProducts />
      </article>
    </main>
  );
}
