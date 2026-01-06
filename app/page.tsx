import Hero from "@/components/Hero";
import MemberGrid from "@/components/MemberGrid";
import Footer from "@/components/Footer";
import members from "@/data/members.json";
import { Member } from "@/lib/types";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MemberGrid members={members as Member[]} />
      <Footer />
    </main>
  );
}
