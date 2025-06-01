import Link from "next/link";

export default function NavLinkMenu() {
    return (
        <div className='w-[351px] flex justify-between'>
            <Link href='/home'>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact-us'}>Contact Us</Link>
            <Link href={'/blog'}>Blog</Link>
        </div>
    )
}