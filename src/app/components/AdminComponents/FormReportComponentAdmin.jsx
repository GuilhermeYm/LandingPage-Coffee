import { useForm } from "react-hook-form";
import { z } from "zod";

export default function FormReportComponenAdmin() {
  const {
    formState: { errors, isValid },
    register,
  } = useForm();

  return (
    <form>
      <div>
        <label htmlFor="title">Escreva o título da </label>
        <input type="text" name="title" id="title" {...register("title")} />
      </div>
    </form>
  );
}
