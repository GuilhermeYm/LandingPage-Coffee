"use client"

import Form from "next/form";

export default function FormComponents() {
  const handleSubmit = () => {
    console.log("teste");
  };
  return (
    <Form
      action={handleSubmit}
      className="text-black py-4 px-3 border-b border-black flex flex-col gap-3"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-xl">
          Nome
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Insira o seu nome de usuário"
          className="border border-black py-2 px-4 outline-none rounded-xl bg-whiteMain"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-xl">
          Senha
        </label>
        <input
          type="password"
          name="name"
          id="name"
          placeholder="Insira a sua senha"
          className="border border-black py-2 px-4 outline-none rounded-xl bg-whiteMain"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-backgroundMain w-fit rounded-2xl border border-white transition-all duration-300 px-6 py-2 hover:bg-backgroundArticle hover:text-black hover:border-black"
      >
        Entrar
      </button>
    </Form>
  );
}
