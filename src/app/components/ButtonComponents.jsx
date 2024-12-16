"use client"

import { useFormStatus } from "react-dom";

export default function ButtonComponents() {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="text-white bg-backgroundMain w-fit rounded-2xl border border-white transition-all duration-300 px-6 py-2 hover:bg-backgroundArticle hover:text-black hover:border-black"
    >
      {status.pending ? "Carregando..." : "Entrar"}
    </button>
  );
}
