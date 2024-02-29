import Image from "next/image"
import Link from "next/link"

type Props = {}
const Footer = (props: Props) => {
    return (
        <footer className=" px-5 max-w-[1390px]   mx-auto py-20">

            <div className="border grid lg:grid-cols-3 justify-between border-white-dark rounded-2xl">
                <div className="flex flex-col justify-between lg:border-r border-white-dark p-8">
                    <div className="flex items-center">
                        <Image src={'/img/footer/Sygnet.png'} width={34} height={34} alt="footer" />
                        <p className="font-semibold font-sora text-white">NFT Market</p>
                    </div>

                    <div className="flex gap-x-5 mt-5">
                        <p className="text-gray-white font-inter text-sm">Support</p>
                        <p className="text-gray-white font-inter text-sm">Term of service</p>
                        <p className="text-gray-white font-inter text-sm">License</p>
                    </div>

                </div>

                <div className="font-sora text-white lg:border-r border-white-dark">
                    <div className="p-8">
                        <p className="pb-2">Auctions</p>
                        <p className="pb-2">Roadmap</p>
                        <p className="pb-2">Discover</p>
                        <p className="pb-2">Community</p>

                        <div className="pt-10 pb-16">
                            <Link className=" px-4 py-3 rounded-md btn-gradient hover:bg-white hover:text-black transition-colors" href="/contact">
                                My account
                            </Link>
                        </div>
                        <div className="flex gap-x-6">
                            <Image src={'/img/footer/facebook.png'} width={20} height={20} alt="logo" />
                            <Image src={'/img/footer/linkedin.png'} width={20} height={20} alt="logo" />
                            <Image src={'/img/footer/github.png'} width={20} height={20} alt="logo" />
                            <Image src={'/img/footer/twitter.png'} width={20} height={20} alt="logo" />
                            <Image src={'/img/footer/ig.png'} width={20} height={20} alt="logo" />
                        </div>
                    </div>

                </div>

                <div className="p-8 grid justify-between">
                    <p className="text-gray-white font-inter">Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
                    <form action="" className="mt-5 lg:mt-auto flex bg-white px-5 py-2 rounded-2xl">
                        <input placeholder="Newsletter" className="w-4/5" type="text" />
                        <p className="font-sora font-semibold text-primary-purple w-fit">Sign in</p>
                    </form>
                </div>
            </div>
        </footer>
    )
}
export default Footer