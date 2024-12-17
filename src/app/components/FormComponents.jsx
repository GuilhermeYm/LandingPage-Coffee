import Form from "next/form";
import ButtonComponents from "./ButtonComponents";
import handleSubmit from "../login/action";

export default function FormComponents() {
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
          type="text"
          name="name"
          id="name"
          placeholder="Insira o seu nome de usuário"
          className="border border-black py-2 px-4 outline-none rounded-xl bg-whiteMain"
          // onChange={(e) => setName(e.target.value)}
        />
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
          // onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <ButtonComponents />
    </Form>
  );
}
