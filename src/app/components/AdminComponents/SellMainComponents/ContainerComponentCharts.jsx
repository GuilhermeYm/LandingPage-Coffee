import SellChartBarLastYear from "./SellChartBarLastYear";
import SellChartCircleLastYear from "./SellChartCircleLastYear";

export default function ContainerComponentCharts() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full ml-3 shadow-md">
        <div className="ml-72">
          <h2 className="text-2xl">Gráfico de vendas</h2>
        </div>
        <article className="flex gap-2 py-5 px-9">
          <SellChartBarLastYear />
          <SellChartCircleLastYear />
        </article>
      </div>
      <div>
         
      </div>
    </>
  );
}
