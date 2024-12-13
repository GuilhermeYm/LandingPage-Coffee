export default async function Page({ params }) {
  const id = await params.id;
  return (
    <>
      <p>Id do produto: {id}</p>
    </>
  );
}
