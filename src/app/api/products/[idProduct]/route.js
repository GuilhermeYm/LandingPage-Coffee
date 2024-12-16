import data from "../../server.json";

export async function GET(request, { params }) {
  const idString = (await params).idProduct;
  const idNumber = Number(idString);
  const coffeWithId = data.coffees.filter((c) => c.id === idNumber);
  return Response.json({ coffeWithId });
}
