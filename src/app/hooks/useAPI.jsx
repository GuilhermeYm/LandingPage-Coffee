export default function useAPI() {
  const loginAPI = async (data) => {
    const response = await fetch(`http://localhost:3000/api/login/`, {
      body: JSON.stringify(data),
      method: "POST",
    });

    if (response.status === 200) {
      console.log("If ");
      return true;
    } else if (response.status === 403) {
      console.log("Else If ");
      return false;
    }
  };

  return {
    loginAPI,
  };
}
