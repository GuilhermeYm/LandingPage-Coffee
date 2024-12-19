export default function useAPI() {
  const saveAtLocalStorage = (name) => {
    const newObject = { 
      name: name,
      isLogined: true
    }

    const saveItem = localStorage.setItem('data', JSON.stringify(newObject))

    if ( saveItem ) { 
      return true
    } else { 
      return false
    }
  };

  const loginAPI = async (data) => {
    const response = await fetch(`http://localhost:3000/api/login/`, {
      body: JSON.stringify(data),
      method: "POST",
    });

    if (response.status === 200) {
      saveAtLocalStorage(data.name);
      if ( saveAtLocalStorage ) { 
        return true;
      } else { 
        return "Erro na hora de salvar"
      }
    } else if (response.status === 403) {
      return false;
    }
  };

  const editProduct = async (idProduct) => { 
    
  } 

  return {
    loginAPI,
  };
}
