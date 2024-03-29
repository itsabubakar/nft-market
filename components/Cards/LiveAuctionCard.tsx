import Image from "next/image"
import Link from "next/link"

type Props = {
    src: string
}
const LiveAuctionCard = ({ src }: Props) => {
    return (
        <div className="px-3">
            <Link href={'nft'} className="max-w-[448px] p-6 border-white-dark border rounded-2xl">
                <Image className="h-[520px]" src={src} width={400} height={520} alt="bidding card" />
                <div className="mt-6 flex justify-between">
                    <h6 className="font-sora max-w-[276px]">Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                    <p className="font-sora bg-primary-purple-transparent text-primary-purple w-fit px-2 py-3 h-fit">1.1ETH</p>
                </div>
                <div>
                    <p className="font-inter text-sm py-6 border-b border-white-dark ">22:59 min left</p>

                    <div className="flex items-center justify-between px-1 pt-5">
                        {/* Bidder img */}
                        <div className="flex">
                            <Image src={'/img/01img.png'} width={32} height={32} alt='bidders' />
                            <Image className="-ml-2" src={'/img/02img.png'} width={32} height={32} alt='bidders' />
                            <Image className="-ml-2" src={'/img/03img.png'} width={32} height={32} alt='bidders' />
                            <Image className="-ml-2" src={'/img/04img.png'} width={32} height={32} alt='bidders' />
                        </div>

                        <p className="text-gray-white font-inter text-sm">101 people are bidding</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-gray-white font-inter text-sm">570</p>
                        </div>
                        <div>
                            <Image src={'/img/red-heart.png'} width={20} height={20} alt="" />
                        </div>
                    </div>

                </div>
            </Link>
        </div>


    )
}
export default LiveAuctionCard