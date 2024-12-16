"use server";

export default async function handleSubmit(data) {
  const formData = Object.fromEntries(data.entries());
  const response = await fetch(`localhost:3000/api/login/`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  if (result) {
  } else {
  }
}
