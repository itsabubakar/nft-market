import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'

type Props = {};

const Navbar = ({ mode }: { mode?: string }) => {
    const router = useRouter();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
        <nav className="relative font-sora">

            {/*  Mobile Menu  */}
            <div className={`absolute z-50 w-full min-h-[650px] bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} `}>

                <div className="flex  justify-end">
                    <button onClick={toggleMenu} className="flex justify-center items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="25" y1="7" x2="7" y2="25"></line>
                            <line x1="7" y1="7" x2="25" y2="25"></line>
                        </svg>
                    </button>
                </div>


                <ul className="flex h-full flex-col font-sora text-[40px] text-center justify-center gap-y-2">
                    <li className={` hover:text-gray-400 ${router.pathname === '/' ? ' text-gray-400' : ''}`}>
                        <Link href={'/'}>Home</Link>
                    </li>

                    <li className={` hover:text-gray-400 ${router.pathname === '/arc' ? ' text-gray-400' : ''}`}><Link href={'/arc'}>Auctions</Link></li>
                    <li className={` hover:text-gray-400 ${router.pathname === '/roadmaps' ? ' text-gray-400' : ''}`}><Link href={'/roadmaps'}>Roadmaps</Link></li>
                    <li className={` hover:text-gray-400 ${router.pathname === '/discover' ? ' text-gray-400' : ''}`}><Link href={'/discover'}>Discover</Link></li>
                    <li className={` hover:text-gray-400 ${router.pathname === '/community' ? ' text-gray-400' : ''}`}><Link href={'/community'}
                    >Community</Link></li>
                </ul>


            </div>

            {/* Large screen menu */}
            <div className="relative items-center max-w-6xl mx-auto py-6  px-6 xl:px-0 hidden lg:flex justify-between text-gray-white">
                <Link href={'/'} className="">
                    <Image src={'/img/nft-logo.png'} alt="logo" width={34} height={34} />
                </Link>

                {/* Centered Navigation Links */}
                <div className="flex justify-center items-center font-medium">
                    <ul className={`flex `}>
                        <li className={`hover:underline decoration px-8 `}>
                            <Link href="/">Auctions</Link>
                        </li>
                        <li className={`hover:underline decoration px-8 `}>
                            <Link href="/roadmaps">Roadmaps</Link>
                        </li>

                        <li className={`hover:underline decoration px-8 `}>
                            <Link href="/discover">Discover</Link>
                        </li>

                        <li className={`hover:underline decoration px-8 `}>
                            <Link href="/community">Community</Link>
                        </li>

                    </ul>
                </div>

                {/* Other Links */}
                <div className="text-center text-white">
                    <Link className="border text-gray-white px-4 py-3 rounded-md border-white-dark hover:bg-white hover:text-black transition-colors" href="/contact">
                        Contact
                    </Link>
                    <Link className="ml-8 px-4 py-3 rounded-md btn-gradient hover:bg-white hover:text-black transition-colors" href="/contact">
                        My account
                    </Link>
                </div>
            </div>
            {/* 
            background: linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%);
 */}

            <div className="flex justify-between p-6 lg:hidden">
                <div className="">
                    <Image src={'/img/nft-logo.png'} alt="logo" width={35} height={55} />
                </div>
                <button onClick={toggleMenu} className="p-2 text-gray-600 text-xl rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={'white'} className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-8.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;