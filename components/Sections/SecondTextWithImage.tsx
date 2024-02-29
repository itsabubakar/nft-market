import Image from "next/image"
import Link from "next/link"

type Props = {}
const SecondTextWithImage = (props: Props) => {
    return (
        <div className="max-w-[1392px] mx-auto px-5 py-[100px] lg:flex items-center justify-between block gap-x-28">
            {/* Images */}
            <div className="w-full lg:w-1/2 lg:ml-32 flex lg:block">
                <Image className="" src={"/img/leftimage.png"} width={684} height={616} alt="section image" />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
                <p className="font-inter text-[15px] text-gray-white uppercase pb-4">overline</p>
                <h2 className="pb-8 text-white">Sapien ipsum scelerisque convallis fusce</h2>
                <p className="font-inter pb-12 text-gray-white">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>

                <div className="flex gap-4 text-white">
                    <Link className=" px-4 py-3 rounded-md btn-gradient hover:bg-white hover:text-black transition-colors" href="/contact">
                        Get started
                    </Link>
                    <Link className="border text-gray-white px-4 py-3 rounded-md border-white-dark hover:bg-white hover:text-black transition-colors" href="/contact">
                        Learn more
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default SecondTextWithImage