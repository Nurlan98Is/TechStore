import Header from "@/widgets/Header";
import HeroBanner from "@/widgets/Hero-Banner/ui/HeroBanner";
import Banner from "@/widgets/Banner/ui/Banner";
import Category from "@/widgets/Category/ui/Category";
import ProductShowCase from "@/widgets/productShowCase/ui/ProductShowCase";

export default function Home() {
  return (
    <div>
      <Header/>
        <HeroBanner/>
        <Banner/>
      <Category/>
        <ProductShowCase/>
    </div>
  );
}
