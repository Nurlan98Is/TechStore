import Link from "next/link";

export default function NavLinkMenu() {
    return (
        <div className='w-[100%] md:w-[351px] flex flex-col items-center md:flex-row md:justify-between'>
            <Link href='/' className='text-[20px]'>Home</Link>
            <Link href={'/about'} className='text-[20px]'>About</Link>
            <Link href={'/contact-us'} className='text-[20px]'>Contact Us</Link>
            <Link href={'/blog'} className='text-[20px]'>Blog</Link>
        </div>
    )
}