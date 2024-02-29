import Image from "next/image"
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel"

type Props = {}
const SalesSection = (props: Props) => {
    return (
        <section className="py-40 flex flex-wrap lg:flex-nowrap gap-x-8 px-5">
            <div className="border rounded-2xl border-[#262840] p-5 h-[841px]">

                <p className="font-sora text-white text-3xl font-semibold pb-8">Check out the hottest Sale offers</p>

                <div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={270}
                        totalSlides={2}
                        visibleSlides={2}
                        infinite
                    >
                        <Slider className="">
                            <Slide index={0}><div className="max-w-[212px] ">
                                <Image className="h-[355px]" src={'/img/Itemcard-img.png'} width={212} height={355} alt="bidding card" />
                                <div className="mt-6 flex justify-between">
                                    <h6 className="font-sora text-base text-white ">Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                                    <p className="font-sora bg-primary-purple-transparent text-primary-purple w-fit px-1 text-sm py-1 h-fit">1.1ETH</p>
                                </div>
                                <div>
                                    <p className="font-inter text-white text-sm py-6 border-b border-white-dark ">22:59 min left</p>

                                    <div className="flex items-center justify-between px-1 pt-5">


                                        <p className="text-gray-white  font-inter text-sm">101 people are bidding</p>

                                        <div>
                                            <Image src={'/img/heart.png'} width={20} height={20} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div></Slide>
                            <Slide index={1}>
                                <div className="max-w-[212px] ">
                                    <Image className="h-[355px]" src={'/img/Itemcard-img.png'} width={212} height={355} alt="bidding card" />
                                    <div className="mt-6 flex justify-between">
                                        <h6 className="font-sora text-base text-white ">Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                                        <p className="font-sora bg-primary-purple-transparent text-primary-purple w-fit px-1 text-sm py-1 h-fit">1.1ETH</p>
                                    </div>
                                    <div>
                                        <p className="font-inter text-white text-sm py-6 border-b border-white-dark ">22:59 min left</p>

                                        <div className="flex items-center justify-between px-1 pt-5">


                                            <p className="text-gray-white  font-inter text-sm">101 people are bidding</p>

                                            <div>
                                                <Image src={'/img/heart.png'} width={20} height={20} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div></Slide>

                        </Slider>

                        <div className="relative">

                            <div >

                                <ButtonNext className="absolute right-16 -top-[300px] bg-light-dark py-5 px-8 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                                </ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>

                </div>

                <div className="flex justify-center py-8">
                    <button className=" w-full  border text-gray-white px-4 py-3 rounded-md border-white-dark hover:bg-white hover:text-black transition-colors">
                        Show me more
                    </button>
                </div>

            </div>
            <div className="h-[841px] p-5 border border-[#262840] rounded-2xl">
                <div >
                    <Image src={'/img/Image.png'} width={488} height={644} alt="" />
                </div>

                <div className="p-5 ">
                    <p className="text-2xl font-sora font-medium text-white pb-5">Get started creating & selling your NFTs</p>
                    <p className="text-sm font-inter font-medium text-gray-white">Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
                    <div className="flex justify-center pt-10">

                        <button className="flex justify-center w-fit btn-gradient text-white py-2 px-3 rounded-lg">Get started</button>
                    </div>
                </div>
            </div>

            <div className="border border-[#262840] rounded-2xl h-[841px]">
                <div className=" p-5">

                    <p className="font-sora text-white text-3xl font-semibold pb-8">Check out the hottest Sale offers</p>

                    <div>
                        <div className="gap-x-5 flex pb-10">
                            <div>

                                <Image className="h-[120px] w-[120px]" src={'/img/Itemcard-img.png'} width={120} height={120} alt="bidding card" />
                            </div>

                            <div>
                                <div className=" flex justify-between">
                                    <h6 className="font-sora text-base text-white ">Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="font-inter text-white text-sm py-2  ">22:59 min left</p>
                                        <p className="font-sora bg-primary-purple-transparent text-primary-purple w-fit px-1 text-sm py-1 h-fit">1.1ETH</p>

                                    </div>

                                    <div className="flex items-center justify-between px-1">


                                        <p className="text-gray-white  font-inter text-sm">101 people are bidding</p>

                                        <div>
                                            <Image src={'/img/heart.png'} width={20} height={20} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="gap-x-5 flex pb-10">
                            <div>

                                <Image className="h-[120px] w-[120px]" src={'/img/Itemcard-img.png'} width={120} height={120} alt="bidding card" />
                            </div>

                            <div>
                                <div className=" flex justify-between">
                                    <h6 className="font-sora text-base text-white ">Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="font-inter text-white text-sm py-2  ">22:59 min left</p>
                                        <p className="font-sora bg-primary-purple-transparent text-primary-purple w-fit px-1 text-sm py-1 h-fit">1.1ETH</p>

                                    </div>

                                    <div className="flex items-center justify-between px-1">


                                        <p className="text-gray-white  font-inter text-sm">101 people are bidding</p>

                                        <div>
                                            <Image src={'/img/red-heart.png'} width={20} height={20} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="gap-x-5 flex pb-10">
                            <div>

                                <Image className="h-[120px] w-[120px]" src={'/img/Itemcard-img.png'} width={120} height={120} alt="bidding card" />
                            </div>

                            <div>
                                <div className=" flex justify-between">
                                    <h6 className="font-sora text-base text-white ">Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="font-inter text-white text-sm py-2  ">22:59 min left</p>
                                        <p className="font-sora bg-primary-purple-transparent text-primary-purple w-fit px-1 text-sm py-1 h-fit">1.1ETH</p>

                                    </div>

                                    <div className="flex items-center justify-between px-1">


                                        <p className="text-gray-white  font-inter text-sm">101 people are bidding</p>

                                        <div>
                                            <Image src={'/img/heart.png'} width={20} height={20} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="gap-x-5 flex">
                            <div>

                                <Image className="h-[120px] w-[120px]" src={'/img/Itemcard-img.png'} width={120} height={120} alt="bidding card" />
                            </div>

                            <div>
                                <div className=" flex justify-between">
                                    <h6 className="font-sora text-base text-white ">Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="font-inter text-white text-sm py-2  ">22:59 min left</p>
                                        <p className="font-sora bg-primary-purple-transparent text-primary-purple w-fit px-1 text-sm py-1 h-fit">1.1ETH</p>

                                    </div>

                                    <div className="flex items-center justify-between px-1">


                                        <p className="text-gray-white  font-inter text-sm">101 people are bidding</p>

                                        <div>
                                            <Image src={'/img/red-heart.png'} width={20} height={20} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center py-8">
                        <button className=" w-full  border text-gray-white px-4 py-3 rounded-md border-white-dark hover:bg-white hover:text-black transition-colors">
                            Show me more
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default SalesSection