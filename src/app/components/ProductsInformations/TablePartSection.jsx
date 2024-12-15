export default async function TablePartSection({ id }) {
  return (
    <table className="border border-[#fff7e8] min-w-full bg-backgroundAboutUs mt-3">
      <thead>
        <tr>
          <th className="border-r border-[#]">Nome {id}</th>
          <th className="border-r border-slate-600">Preço</th>
          <th className="border-r border-slate-600">Disponível</th>
        </tr>
      </thead>
      <tbody>
        {/* {coffes.vars.map((c, index) => (
          <tr key={coffes.id}>
            <td>{c.name}</td>
            <td>{c.price}</td>
            <td>{c.available}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}
