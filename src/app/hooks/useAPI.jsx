export default function useAPI() { 
    
    const getServerJson = async () => { 
        const data = await fetch(`http://localhost:3000/api/products/1`);
        const dataObject = await data.json();
        const correctCoffe = dataObject.coffeWithId[0];
    }
    
    return { 
        getServerJson
    }
}