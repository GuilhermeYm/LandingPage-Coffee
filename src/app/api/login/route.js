import data from "../server.json";

export async function POST(
    request, 
    response
) {

  const formData = await request.formData()
  const name = formData.get('name')
  const password = formData.get('password')
  console.log(name, password)
  return Response.json(
    {
      name
    }
  )
}
