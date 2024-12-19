"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const reportSchema = z.object({
  title: z
    .string()
    .min(1, "O título deve ter polo menos um caracter")
    .max(32, "O título só pode ter trinta e dois caracteres."),
  description: z
    .string()
    .min(1, "O título deve ter polo menos um caracter")
    .max(1000, "O título só pode ter mil caracteres."),
  content: z
    .string()
    .min(1, "O conteúdo deve ter polo menos um caracter")
    .max(5000, "O conteúdo só pode ter cinco mil caracteres."),
});

export default function FormReportComponenAdmin() {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(reportSchema),
    mode: "onChange",
  });

  const sendReport = async () => {};

  return (
    <form
      onSubmit={handleSubmit(sendReport)}
      className="flex flex-col gap-5 bg-zinc-700 text-white py-5 px-5 rounded-xl w-full mb-5"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="title" className="text-xl font-bold">
          Escreva o título da reportagem
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Escreva um título para a reportagem"
          {...register("title")}
          className="py-3 px-2 outline-none rounded-xl border border-zinc-50 focus:border-zinc-700 transition-colors duration-300 bg-zinc-600"
        />
        {errors.title && (
          <span className="text-red-500 text-xs italic mt-2 ml-2">
            {errors.title.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="description" className="text-xl font-bold">
          Escreva uma descrição para a reportagem
        </label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Escreva uma breve descrição"
          {...register("description")}
          className="py-3 px-2 outline-none rounded-xl border border-zinc-50 focus:border-zinc-700 transition-colors duration-300 bg-zinc-600"
        />
        {errors.description && (
          <span className="text-red-500 text-xs italic mt-2 ml-2">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="content" className="text-xl font-bold">
          Escreva agora o conteúdo
        </label>
        <textarea
          name="content"
          id="content"
          {...register("content")}
          placeholder="Escreva o conteúdo da reportagem"
          className="py-3 px-2 outline-none rounded-xl border border-zinc-50 focus:border-zinc-700 transition-colors duration-300 bg-zinc-600 resize-none w-full h-48 overflow-y-auto"
        ></textarea>
        {errors.content && (
          <span className="text-red-500 text-xs italic mt-2 ml-2">
            {errors.content.message}
          </span>
        )}
      </div>
      <button type="submit" className="bg-zinc-600 text-white border border-white rounded-xl w-fit py-3 px-6">Enviar</button>
    </form>
  );
}
