import AfluxInfo from "@/components/AfluxInfo/AfluxInfo";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto justify-center">
      <AfluxInfo />
      <Products />
    </main>
  );
}
