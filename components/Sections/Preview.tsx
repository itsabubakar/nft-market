import Image from "next/image"

type Props = {}
const Preview = (props: Props) => {
    return (
        <section className="border border-[#262840] px-5 mt-24 p-5 flex gap-x-10 mx-16 rounded-2xl relative">
            <div className="absolute top-4 z-10 -right-8">
                <Image src={'/img/inner/frame49.png'} width={56} height={56} alt="" />
                <Image src={'/img/inner/frame51.png'} width={56} height={56} alt="" />
                <Image src={'/img/inner/share.png'} width={56} height={56} alt="" />
            </div>
            <div className="relative">
                <Image src={'/img/inner/nft.png'} width={684} height={885} alt="" />
                <Image className="absolute bottom-4 top-[40%]  lg:top-[80%] left-[50%]" src={'/img/inner/slide.png'} width={80} height={80} alt="" />
            </div>
            <div>
                <h3 className="font-inter font-600 text-[40px] text-white pb-6">Dui accumsan leo vestibulum ornare</h3>
                <p className="text-gray-white pb-10">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>

                <div className="flex">
                    <Image src={'/img/inner/profile1.png'} width={175} height={51} alt="" />
                    <Image src={'/img/inner/profile3.png'} width={175} height={51} alt="" />

                </div>

                <div className="bid  rounded-2xl p-5 max-w-[495px]">
                    <div className="flex gap-x-2 justify-between">
                        <div className="w-1/2">
                            <p className="text-[#7780A1] pb-1 text-sm">Current price</p>
                            <h2 className="text-white font-600 font-sora text-[34px]">5.25 ETH</h2>
                        </div>
                        <div className="w-1/2">
                            <p className="text-[#7780A1] pb-1 text-sm">Time left</p>
                            <h2 className="text-white font-600 font-sora text-base">22:59 min</h2>
                            <p className="text-[#7780A1] pb-1 text-sm">(01.01.2022 - 01:40:47)</p>
                        </div>
                    </div>

                    <button className="btn-gradient mt-4 text-white w-full text-center rounded-lg py-2">Place a bid</button>
                </div>

                <div className="pt-6">
                    <p className="text-[#7780A1] pb-1 text-sm">History of bids (12 people are bidding)</p>
                    <Image src={'/img/inner/frame50.png'} width={495} height={185} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Preview