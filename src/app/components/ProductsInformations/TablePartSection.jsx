export default async function TablePartSection({ data }) {
  return (
    <table className="border border-[#fff7e8] min-w-full bg-backgroundAboutUs mt-3 border-collapse">
      <thead>
        <tr>
          <th className="border-r">Nome</th>
          <th className="border-r">Preço</th>
          <th className="border-r">Disponível</th>
        </tr>
      </thead>
      <tbody>
        {data.vars.map((c, index) => (
          <tr key={index} className="border-t">
            <td className="border-r pl-3 py-2">{c.name}</td>
            <td className="border-r px-auto py-auto text-center">R${c.price}</td>
            <td className="border-r pl-3 py-2">
              {c.available ? " Disponível" : "Indisponível"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
