"use server";

export default async function handleSubmit(data) {
  const newObject = {...data}
  const stateSymbol = Object.getOwnPropertySymbols(newObject)[0];
  const stateData = newObject[stateSymbol];
  const name = stateData[1].value
  const password = stateData[2].value
  const formDataObject = { 
    name: name,
    password: password
  } 
  const response = await fetch(`http://localhost:3000/api/login/`, {
    method: "POST",
    body: JSON.stringify(formDataObject)
  });
}
