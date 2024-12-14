export default function useAPI() {
  const getProductWithID = async ({ id }) => {
    const data = await fetch(`http://localhost:3000/api/products/${id}`);
    const coffee = await data.json();

    console.log(coffee.coffeWithId[0].id);
  };

  return {
    getProductWithID,
  };
}
