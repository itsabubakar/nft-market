import Image from "next/image"

type Props = {}
const Stats = (props: Props) => {
    return (
        <section className="flex flex-col lg:flex-row gap-y-12 justify-center gap-x-6 pb-40">
            <div className=" flex flex-col items-center">
                <Image className="pb-4" src={'/img/User.png'} alt="icon" width={32} height={32} />
                <h2 className="font-sora text-white">300k</h2>
                <p className="font-inter text-base text-gray-white">Users Active</p>
            </div>
            <div className=" flex flex-col items-center">
                <Image className="pb-4" src={'/img/Artworks.png'} alt="icon" width={32} height={32} />
                <h2 className="font-sora text-white">52,5k</h2>
                <p className="font-inter text-base text-gray-white">Artworks</p>
            </div>
            <div className=" flex flex-col items-center">
                <Image className="pb-4" src={'/img/Artists.png'} alt="icon" width={32} height={32} />
                <h2 className="font-sora text-white">17,5k</h2>
                <p className="font-inter text-base text-gray-white">Artists</p>
            </div>
            <div className=" flex flex-col items-center">
                <Image className="pb-4" src={'/img/Wallet.png'} alt="icon" width={32} height={32} />
                <h2 className="font-sora text-white">35.58</h2>
                <p className="font-inter text-base text-gray-white">ETH Spent</p>
            </div>
        </section>
    )
}
export default Stats