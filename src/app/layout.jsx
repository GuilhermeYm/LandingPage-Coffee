import "./globals.css";

export const metadata = {
  title: "Bico's Coffe",
  description: "Lugar para comprar um café, um bolo, entre outras coisas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
