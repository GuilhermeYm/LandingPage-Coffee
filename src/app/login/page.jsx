import { Inter } from "next/font/google";
import FormComponents from "../components/LoginComponents/FormComponents";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <>
      <main className=" bg-backgroundMain w-full h-HeightDefault flex items-center justify-center">
        <article className="bg-backgroundArticle w-96 rounded-xl">
          <div className="mb-3">
            <h1 className={`${inter.className} text-2xl mt-4 m-3`}>
              Formulário de Login
            </h1>
          </div>
          <FormComponents />
          <div className="text-red-500 italic my-5 mx-3 ">
            <span className="text-sm">
              Está página é disponibilizada apenas para administradores.
            </span>
          </div>
        </article>
      </main>
    </>
  );
}
