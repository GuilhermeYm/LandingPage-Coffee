import Link from "next/link";

export default function FooterComponents() {
  return (
    <footer className="w-full flex py-11 bg-backgroundFooter text-white">
      <div className="flex-1 border-r border-white p-3">
        <h2 className="font-fontIsland text-8xl">Endereço</h2>
        <address>
          <div>
            <p>Suporte ao cliente</p>
            <Link href={"/"}>Clique aqui para poder abrir um ticket</Link>
          </div>
          <div>
            Estamos presente em:
            <ul>
              <li>São Paulo</li>
              <li>Recife</li>
              <li>Salvador</li>
            </ul>
          </div>
        </address>
      </div>
      <div className="flex-1 p-3">
        <h2 className="text-8xl font-fontIsland text-end">Outros...</h2>
      </div>
    </footer>
  );
}
