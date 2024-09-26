import Image from "next/image";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";
// import { createClient } from "../lib/server";
import prisma from "@/prisma/client";

export default async function Home() {
  // const [data, setData] = useState(null);

  // const supabase = createClient();
  // const { data: notes } = await supabase.from("notes").select();

  // const user = prisma.user.findMany({
  //   where: {
  //     email: "test@test.com",
  //   },
  // });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Menu />
      <Hero />
      {/* {JSON.stringify(user)} */}
    </main>
  );
}
