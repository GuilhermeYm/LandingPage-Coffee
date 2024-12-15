import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default async function DescriptionPartSection({ description }) {
  return <p className={`pl-24 pt-3 ${inter.className}`}>{description}</p>;
}
