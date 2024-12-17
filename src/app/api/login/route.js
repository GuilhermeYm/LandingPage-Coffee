import data from "../server.json";
const bcrypt = require("bcrypt");

export async function POST(request, response) {
  const formData = await request.json();
  const nameFormData = formData.name;
  const passwordFormData = formData.password;
  const verifyLoginName = data.logins.filter((l) => l.name === nameFormData);

  const isPasswordCorrect = await bcrypt.compare(
    passwordFormData,
    verifyLoginName[0].password
  );

  if ( isPasswordCorrect ) { 
    return Response.json({ 
      message: "Deu tudo certo"
    })
  } else { 
    return Response.json( { 
      message: "Deu algum erro, tente novament e tente contatar o suporte"
    })
  }
}
