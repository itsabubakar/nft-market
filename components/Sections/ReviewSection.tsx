import Image from "next/image"
import Link from "next/link"

type Props = {}
const ReviewSection = (props: Props) => {
    return (
        <section className="pb-40 px-5">
            <Image src={'/img/Pleat.png'} width={370} height={42} alt="" />
            <div className="review-bg max-w-[1392px] mx-auto px-5 py-[100px] lg:flex items-center justify-between block gap-x-28 border-x border-b rounded-r-2xl border-gray-white rounded-b-2xl">

                {/* Text */}
                <div className="w-full lg:w-1/2">
                    <p className="font-inter text-[15px] text-gray-white uppercase pb-4">overline</p>
                    <h2 className="pb-8 text-white">Cursus vitae sollicitudin donec nascetur. Join now</h2>
                    <p className="font-inter pb-12 text-gray-white">Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>

                    <div className="flex gap-4 text-white">
                        <Link className=" px-4 py-3 rounded-md btn-gradient hover:bg-white hover:text-black transition-colors" href="/contact">
                            Get started
                        </Link>
                        <Link className="border text-gray-white px-4 py-3 rounded-md border-white-dark hover:bg-white hover:text-black transition-colors" href="/contact">
                            Learn more
                        </Link>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:ml-32 flex lg:block">
                    <Image className="" src={"/img/Users.png"} width={684} height={616} alt="section image" />
                </div>
            </div>
        </section>
    )
}
export default ReviewSection