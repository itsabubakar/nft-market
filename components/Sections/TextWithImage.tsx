import Image from "next/image"
import Link from "next/link"

type Props = {}
const TextWithImage = (props: Props) => {
    return (
        <div className="max-w-[1392px] mx-auto px-5 py-[100px] lg:flex block">
            {/* Text */}
            <div className="w-full lg:w-1/2">
                <p className="font-inter text-[15px] text-gray-white uppercase pb-4">overline</p>
                <h2 className="pb-8 text-white">Sapien ipsum scelerisque convallis fusce</h2>
                <p className="font-inter pb-12 text-gray-white">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>

                <div className="flex gap-4 text-white">
                    <Link className=" px-4 py-3 rounded-md bg-blue-500 hover:bg-white hover:text-black transition-colors" href="/contact">
                        Get started
                    </Link>
                    <Link className="border text-gray-white px-4 py-3 rounded-md border-white-dark hover:bg-white hover:text-black transition-colors" href="/contact">
                        Learn more
                    </Link>

                </div>


            </div>

            {/* Images */}
            <div className="w-full lg:w-1/2 lg:ml-32 items-center flex flex-col lg:block">
                <Image className=" lg:ml-20 " src={"/img/imagesectio.png"} width={430} height={430} alt="section image" />
                <Image className=" lg:-ml-24 lg:-mt-40 " src={"/img/imagesectio-1.png"} width={386} height={386} alt="section image" />
            </div>
        </div>
    )
}
export default TextWithImage