import AfluxInfo from "@/components/AfluxInfo/AfluxInfo";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import Products from "@/components/Products/Products";
import Opinions from "@/components/Opinions/Opinions";
import TextSection from "@/components/TextSection/TextSection";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center">
      <AfluxInfo />
      <Products />
      <TextSection />
      <Opinions />
      <Gallery />
      <Contact />
    </div>
  );
}
