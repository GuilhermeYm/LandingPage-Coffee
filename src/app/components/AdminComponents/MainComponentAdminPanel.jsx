import ReportComponentAdmin from "./ReportComponentAdmin";
import ContainerComponentCharts from "./SellMainComponents/ContainerComponentCharts";

export default function MainComponentAdminPanel() {
  return (
    <>
      <main className="w-full">
        <h2 className="my-5 text-center text-3xl">
          Bem-vindo ao painel de administração 👮
        </h2>

        <section className="w-full flex">
          <div>
            <ContainerComponentCharts />
          </div>
          <div className="w-full pr-4">
            <ReportComponentAdmin />
          </div>
        </section>
      </main>
    </>
  );
}
