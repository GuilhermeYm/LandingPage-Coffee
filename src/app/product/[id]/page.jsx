import FirstPartSection from "@/app/components/ProductsInformations/FirstPartSection";
import SecondPartSection from "@/app/components/ProductsInformations/SecondPartSection";

export default async function Page({ params }) {
  const id = (await params).id;
  return (
    <>
      <main className="bg-backgroundMain h-HeightDefault text-white flex">
        <article className="my-16 mx-96 bg-backgroundArticle flex h-HeightArticleProduct w-productArticleWidth rounded-xl text-black flex-col">
          <h1 className="font-fontIrian text-5xl tracking-[12px] w-[632px] mx-6 my-8">
            Detalhes sobre o Café Expresso
          </h1>
          <section className="rounded-xl w-[1009px] h-4/5 bg-backgroundSection mx-4 text-white">
            <FirstPartSection id={id} />
            <SecondPartSection id={id} />
          </section>
        </article>
      </main>
    </>
  );
}
