export default function SecondPartSection({ id }) {
  return (
    <>
      <div className="h-1/2 min-w-full ">
        <h2 className="ml-8 font-fontIrian text-3xl tracking-widest">
          Café Expresso
        </h2>
        <div className="px-32 mt-5 min-w-full">
          <table className="border border-[#fff7e8] min-w-full bg-backgroundAboutUs">
            <thead>
              <tr>
                <th className="border-r border-[#]">Nome</th>
                <th className="border-r border-slate-600">Descrição</th>
                <th className="border-r border-slate-600">Origem</th>
                <th className="border-r border-slate-600">Preço</th>
                <th>Disponível</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
