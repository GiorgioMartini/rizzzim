import Image from "next/image";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Menu />
      <Hero />
    </main>
  );
}
