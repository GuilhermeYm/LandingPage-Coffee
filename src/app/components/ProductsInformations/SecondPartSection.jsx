import DescriptionPartSection from "./DescriptionPartSection";
import TablePartSection from "./TablePartSection";

export default async function SecondPartSection({ id }) {
  const data = await fetch(`http://localhost:3000/api/products/${id}`);
  const dataObject = await data.json();
  const coffes = dataObject.coffeWithId[0];

  return (
    <>
      <div className="h-1/2 min-w-full ">
        <h2 className="ml-8 font-fontIrian text-3xl tracking-widest">
          {coffes.name} 
        </h2>
        <div className="px-32 mt-5 min-w-full mb-3">
          <p className="text-sm text-white font-fontIrian">Tabela</p>
          <TablePartSection id={id}/> 
        </div>
        <div className="min-w-full ">
          <p className="text-sm text-white font-fontIrian ml-32">Descrição</p>
          <DescriptionPartSection description={coffes.description}/> 
        </div>  
      </div>
    </>
  );
}
