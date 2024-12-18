export default function HeaderComponentAdminPanel() {
  return (
    <header className="w-full flex h-16 justify-between px-6 py-4 bg-backgroundHeaderAdmin text-white">
      <h1 className="text-2xl w-">Painel de Administração</h1>
      <ul className="flex text-xl gap-10">
        <li>Home</li>
        <li>Editar</li>
        <li>Sair</li>
      </ul>
    </header>
  );
}
