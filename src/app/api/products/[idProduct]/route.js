import data from "../../server.json";

export async function GET(request, { params }) {
  const id = 1;
  const coffeWithId = data.coffees.filter((c) => c.id === id);
  console.log(coffeWithId[0].id)
  return Response.json({ coffeWithId});
}
