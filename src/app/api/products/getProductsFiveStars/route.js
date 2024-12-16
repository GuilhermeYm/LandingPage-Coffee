import data from "../../server.json";

export function GET(request, response) {
  const coffeFiveStars = data.coffees.filter((c) => c.stars === 5);
  const salgadosFiveStars = data.salgados.filter((s) => s.stars === 5);

  const allProductsFiveStars = [...coffeFiveStars, ...salgadosFiveStars];

  return Response.json({
    allProductsFiveStars,
  });
}
