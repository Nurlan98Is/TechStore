import Header from "@/widgets/Header";
import HeroBanner from "@/widgets/Hero-Banner/ui/HeroBanner";
import Banner from "@/widgets/Banner/ui/Banner";
import Category from "@/widgets/Category/ui/Category";
import ProductCase from "@/widgets/productShowCase/ui/ProductCase";
import ProductsCardRow from "@/widgets/ProductCardsRow/ui/ProductCardsRow";
import ProductDiscountCase from "@/widgets/productShowCase/ui/ProductDiscountCase";
import BannerPromotion from "@/widgets/Banner/ui/BannerPromotion";

export default function Home() {
  return (
    <div>
      <Header/>
        <HeroBanner/>
        <Banner/>
      <Category/>
        <ProductCase/>
        <ProductsCardRow/>
        <ProductDiscountCase/>
        <BannerPromotion/>
    </div>
  );
}
