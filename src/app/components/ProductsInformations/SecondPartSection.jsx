import DescriptionPartSection from "./DescriptionPartSection";
import TablePartSection from "./TablePartSection";

export default async function SecondPartSection({ data }) {
  return (
    <>
      <div className="h-1/2 min-w-full ">
        <h2 className="ml-8 font-fontIrian text-3xl tracking-widest">
          {data.name} 
        </h2>
        <div className="px-32 mt-5 min-w-full mb-3">
          <p className="text-sm text-white font-fontIrian">Tabela</p>
          <TablePartSection data={data}/>  
        </div>
        <div className="min-w-full ">
          <p className="text-sm text-white font-fontIrian ml-32">Descrição</p>
          <DescriptionPartSection description={data.description}/> 
        </div>  
      </div>
    </>
  );
}
