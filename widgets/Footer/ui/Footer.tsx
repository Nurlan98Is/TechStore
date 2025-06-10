import TwitterSvg from '../../../public/svg/LogoSvg/twitter.svg';
import FacebookSvg from '../../../public/svg/LogoSvg/facebook.svg';
import TiktokSvg from '../../../public/svg/LogoSvg/tiktok.svg';
import InstagramSvg from '../../../public/svg/LogoSvg/instagram.svg';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className='h-[818px] md:h-[504px] w-[100%] bg-black'>
            <div className='px-[48px] py-[32px] md:px-[160px] md:py-[104px] flex flex-col items-center md:block  text-white'>
                <div className='h-[663px] md:h-[256px] w-[100%] flex flex-col md:flex-row'>
                    <div className='w-[311px] md:w-[384px]'>
                        <p className='font-bold text-[32px] text-center md:text-left'>TechStore</p>
                        <p className='mt-[20px] text-center md:text-left'>
                            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                        </p>
                    </div>
                    <div className='w-[100%] h-[full] flex flex-col items-center md:items-stretch md:flex-row justify-around text-[#CFCFCF]'>
                        <div className='flex flex-col justify-around items-center md:items-start'>
                            <p className='font-bold text-white'>Service</p>
                            <p>Bonus program</p>
                            <p>Gift card</p>
                            <p>Credit and payment</p>
                            <p>Service contacts</p>
                            <p>Non-cash account</p>
                            <p>Payment</p>
                        </div>
                        <div className='flex flex-col justify-around items-center md:items-start'>
                            <p className='font-bold text-white'>Assistance to the buyer</p>
                            <p>Find an order</p>
                            <p>Terms of delivery</p>
                            <p>Exchange and returns of goods</p>
                            <p>Guarantee</p>
                            <p>Frequently asking question</p>
                            <p>Terms of use of the site</p>
                        </div>
                    </div>
                </div>
                <div className='w-[172px] flex justify-between'>
                    <Link href={'/'}>
                        <Image src={TwitterSvg} alt={'Twitter'} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={FacebookSvg} alt={'facebook'} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={TiktokSvg} alt={'tiktok'} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={InstagramSvg} alt={'instagram'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}