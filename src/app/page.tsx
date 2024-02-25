import AfluxInfo from "@/components/AfluxInfo/AfluxInfo";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import Products from "@/components/Products/Products";
import WhereToBuy from "@/components/WhereToBuy/WhereToBuy";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto justify-center">
      <AfluxInfo />
      <Products />
      <WhereToBuy />
      <Gallery />
      <Contact />
    </main>
  );
}
