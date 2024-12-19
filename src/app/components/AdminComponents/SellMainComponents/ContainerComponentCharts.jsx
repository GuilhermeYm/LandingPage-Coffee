import SellChartBarLastYear from "./SellChartBarLastYear";
import SellChartCircleLastYear from "./SellChartCircleLastYear";

export default function ContainerComponentCharts() {
  return (
    <>
      <article className="flex flex-col gap-5 w-full pl-3">
        <h2 className="text-2xl ml-72">Gráfico de vendas</h2>

        <section className="flex gap-2 py-5 px-9">
          <SellChartBarLastYear />
          <SellChartCircleLastYear />
        </section>
      </article>
    </>
  );
}
