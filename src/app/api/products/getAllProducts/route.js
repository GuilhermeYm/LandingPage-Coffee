import { NextResponse } from "next/server";
import data from "../../server.json";

export default function GET() {
  try {
    const getCoffees = data.coffees;
    const getSalgados = data.salgados;
    const getMikShake = data.milkShakes;

    const ObjectWithoutLogins = {
      ...getCoffees,
      ...getSalgados,
      ...getMikShake,
    };

    console.log(ObjectWithoutLogins)

    return NextResponse.json(
      {
        message: "Deu tudo certo",
        data: ObjectWithoutLogins,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Erro na hora de pegar os dados",
        data: err
      },
      {
        status: 403,
      }
    );
  }
}
