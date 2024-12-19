import EditPageComponent from "@/app/components/AdminComponents/EditPartComponent/EditPageMainComponent";
import HeaderComponentAdminPanel from "@/app/components/AdminComponents/HeaderComponentAdminPanel";

const fetchProduct = async () => {
  const response = await fetch(
    `http://localhost:3000/api/products/getAllProducts/`
  );
 console.log(response)
};

export default async function Page() {

  const dataServer = fetchProduct()

  return (
    <>
      <HeaderComponentAdminPanel />
      <EditPageComponent />
    </>
  );
}
