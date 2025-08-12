
import HeroBanner from "@/widgets/Hero-Banner/ui/HeroBanner";
import Banner from "@/widgets/Banner/ui/Banner";
import Category from "@/widgets/Category/ui/Category";
import ProductCase from "@/widgets/productShowCase/ui/ProductCase";
import ProductsCardRow from "@/widgets/ProductCardsRow/ui/ProductCardsRow";
import ProductDiscountCase from "@/widgets/productShowCase/ui/ProductDiscountCase";
import BannerPromotion from "@/widgets/Banner/ui/BannerPromotion";



export default async function Home() {
    // const response = await fetch("https://real-time-amazon-data.p.rapidapi.com/search?query=electronics",
    //     {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': '2e83a760e6mshc8b0118fda7b6d9p11d135jsnc11f2b31ad94',
    //             'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    //         }
    //     })
    // const dataResponse = await response.json();
    // const {data} = dataResponse
    // const {products} = data
    // console.log('proudcts in app', data)
  return (
    <div>
        <HeroBanner/>
        <Banner/>
      <Category/>
        <ProductCase  />
        <ProductsCardRow/>
        <ProductDiscountCase/>
        <BannerPromotion/>
    </div>
  );
}
