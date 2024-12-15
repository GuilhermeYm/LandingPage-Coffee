import FirstPartSection from "@/app/components/ProductsInformations/FirstPartSection";
import SecondPartSection from "@/app/components/ProductsInformations/SecondPartSection";

const fetchProduct = async (id) => {
  const response = await fetch(`http://localhost:3000/api/products/1`);
  const data = await response.json();
  console.log(data.coffeWithId[0].id)
  return data.coffeWithId[0];
}

export default async function Page({ params }) {
  const idString = (await params).id 
  const idNumber = Number(idString)

  const coffe = await fetchProduct(idNumber)

  return (
    <>
      <main className="bg-backgroundMain text-white flex">
        <article className="my-16 mx-96 bg-backgroundArticle flex h-HeightArticleProduct w-productArticleWidth rounded-xl text-black flex-col">
          <h1 className="font-fontIrian text-5xl tracking-[12px] w-[632px] mx-6 my-8">
            Detalhes sobre o {coffe.name}
          </h1>
          <section className="rounded-xl w-[1009px] h-4/5 bg-backgroundSection mx-4 text-white">
            <FirstPartSection data={coffe} />
            <SecondPartSection data={coffe} />
          </section>
        </article>
      </main>
    </>
  );
}
