import Image from "next/image"


type Props = {}
const Hero = (props: Props) => {
    return (
        <>
            <section className="mt-44 z-10 relative px-5 lg:px-0">

                <div className="text-center max-w-[837px] mx-auto text-white">
                    <p className="text-gray-white font-inter text-[15px] uppercase ">Non Fungible Tokens</p>
                    <div className="flex items-center justify-center -ml-10">
                        <h1>A new NFT</h1>

                        <div className="mt-6">
                            <Image src={'/img/hero-img/Frame-1.png'} width={40} height={91} alt="" />
                        </div>
                    </div>

                    <div className="flex items-center ml-36">
                        <div className="mt-8">
                            <Image src={'/img/hero-img/Frame.png'} width={62} height={62} alt="" />
                        </div>
                        <h1>Experience</h1>

                    </div>

                    <p className="pt-10 text-gray-white font-inter text-[24px] uppercase ">Discover, collect and sell</p>
                </div>

                <div className="font-inter mt-14 py-5 px-7 bg-white max-w-[643px] mx-auto rounded flex justify-between">
                    <form action="" className="w-full">

                        <input placeholder="Items, collections and creators" type="text" className="w-full  border-r" />
                    </form>
                    <div className="flex gap-3 items-center">

                        <p className="px-2 text-gray-white">Categories</p>
                        <div className="w-[10px]">
                            <Image className=" " src={'/img/hero-img/arrow.png'} width={20} height={20} alt="" />
                        </div>

                    </div>

                    <div className="pl-8 flex items-center">
                        <Image src={'/img/hero-img/search.png'} width={24} height={24} alt="" />

                    </div>

                </div>
                <div className="flex flex-wrap lg:block justify-between ">
                    <Image className="lg:absolute top-20 left-[5%]" src={'/img/hero-img/two.png'} width={89} height={89} alt="" />
                    <Image className="lg:absolute top-[80%] left-[10%]" src={'/img/hero-img/four.png'} width={89} height={89} alt="" />
                    <Image className="absolute w-[70px] h-[89px] top-[100%] left-[0%]" src={'/img/hero-img/six.png'} width={89} height={89} alt="" />

                    <Image className="lg:absolute top-20 right-[5%]" src={'/img/hero-img/one.png'} width={89} height={89} alt="" />
                    <Image className="lg:absolute top-[80%] right-[10%]" src={'/img/hero-img/five.png'} width={89} height={89} alt="" />
                    <Image className="lg:absolute  h-[89px] top-[100%] right-[0%]" src={'/img/hero-img/two.png'} width={89} height={89} alt="" />
                </div>
            </section >

            {/* Logo section */}
            <section className="relative z-10 pt-56 px-5 lg:px-0" >
                <div className="flex justify-between max-w-[670px] mx-auto ">
                    <Image alt="logo" src={'/img/ritter.png'} width={85} height={45} />
                    <Image alt="logo" src={'/img/nike.png'} width={85} height={45} />
                    <Image alt="logo" src={'/img/adidas.png'} width={85} height={45} />
                    <Image alt="logo" src={'/img/holland.png'} width={85} height={45} />

                </div>
            </section >
        </>
    )
}
export default Hero