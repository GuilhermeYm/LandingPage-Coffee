import ContainerComponentCharts from "./SellMainComponents/ContainerComponentCharts";

export default function MainComponentAdminPanel() {
  return (
    <>
      <main>
        <div className="my-5 text-center text-3xl">
          <h2>Bem-vindo ao painel de administração 👮</h2>
        </div>
        <div className="w-full">
          <ContainerComponentCharts />
          
        </div>
      </main>
    </>
  );
}
