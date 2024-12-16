import data from "../server.json";

export async function POST(
    request, 
    response
) {
    const { message } = await request.json() 
  const dataLogin = data.logins;
  const login = dataLogin.filter((d) => d.name)
  return Response.json({});
}
