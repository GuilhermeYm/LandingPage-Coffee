import HeaderComponents from "@/app/components/HeaderComponents";
import MainComponents from "@/app/components/MainComponents/MainComponents";
export default function Home() {
  return (
    <>
      <div className="bg-zinc-700 w-full">
        <HeaderComponents />
      </div>
      <MainComponents />
    </>
  );
}
