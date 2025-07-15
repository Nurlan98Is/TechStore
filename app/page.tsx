import Header from "@/widgets/Header";
import HeroBanner from "@/widgets/Hero-Banner/ui/HeroBanner";
import Banner from "@/widgets/Banner/ui/Banner";
import Category from "@/widgets/Category/ui/Category";
import ProductCase from "@/widgets/productShowCase/ui/ProductCase";
import ProductsCardRow from "@/widgets/ProductCardsRow/ui/ProductCardsRow";
import ProductDiscountCase from "@/widgets/productShowCase/ui/ProductDiscountCase";
import BannerPromotion from "@/widgets/Banner/ui/BannerPromotion";
import Footer from "@/widgets/Footer/ui/Footer";
import ModalWindowAuth from "@/entities/modalWindow/ModalWindowAuth/ui/ModalWindowAuth";
import AuthToolTip from "@/entities/user/auth/AuthToolTip";


export default async function Home() {
    const response = await fetch("https://fakestoreapi.in/api/products")
    const data = await response.json();
    console.log(data)
  return (
    <div>
      <Header/>
        <HeroBanner/>
        <Banner/>
        <AuthToolTip/>
      <Category/>
        <ProductCase data={data} />
        <ProductsCardRow/>
        <ProductDiscountCase/>
        <BannerPromotion/>
      <Footer/>
    </div>
  );
}
