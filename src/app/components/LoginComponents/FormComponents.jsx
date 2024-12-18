"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAPI from "@/app/hooks/useAPI";
import { redirect } from "next/navigation";

const loginSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  password: z
    .string()
    .min(6, "A senha precisa no mínimo 6 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
    .regex(
      /[@$!%*?&]/,
      "A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &)."
    ),
});

export default function FormComponents() {
  const { loginAPI } = useAPI();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const handleLogin = async (data) => {
    const getLogin = await loginAPI(data);

    if (getLogin) {
      window.alert("Login bem-sucessido");
      redirect("/adminPanel");
    } else {
      window.alert("Deu erro");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="text-black py-4 px-3 border-b border-black flex flex-col gap-3"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-xl">
          Nome
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insira o seu nome de usuário"
          className="border border-black py-2 px-4 outline-none rounded-xl bg-whiteMain"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-500 text-xs italic mt-2 ml-2">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-xl">
          Senha
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Insira a sua senha"
          className="border border-black py-2 px-4 outline-none rounded-xl bg-whiteMain"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-500 text-xs italic mt-2 ml-2">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="text-white bg-backgroundMain w-fit rounded-2xl border border-white transition-all duration-300 px-6 py-2 hover:bg-backgroundArticle hover:text-black hover:border-black"
      >
        Entrar
      </button>
    </form>
  );
}
