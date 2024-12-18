import { NextResponse } from "next/server";
import data from "../server.json";
const bcrypt = require("bcrypt");

export async function POST(request, response) {
  const dataRequest = await request.json();
  const filterUser = data.logins.filter((l) => l.name === dataRequest.name);

  const isCorrectPassword = await bcrypt.compare(
    dataRequest.password,
    filterUser[0].password
  );

  if (isCorrectPassword) {
    return NextResponse.json(
      {
        sucess: "Login feito com sucesso",
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      {
        error: " Senha errada ",
      },
      {
        status: 403,
      }
    );
  }
}
