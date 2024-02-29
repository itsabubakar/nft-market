import Image from "next/image"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LiveAuctionCard from "../Cards/LiveAuctionCard";

type Props = {}
const LatestLiveAuction = (props: Props) => {
    return (
        <section className="mt-52 relative z-10 text-white">
            <h4 className="text-white font-sora text-center">Latest live auctions</h4>
            {/* Auctions */}
            <div className="pt-[72px] ">
                {/* Cards */}
            </div>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={180}
                totalSlides={7}
                visibleSlides={3}
                infinite
            >
                <Slider className="">
                    <Slide index={0}><LiveAuctionCard src={'/img/Itemcard-img.png'} /></Slide>
                    <Slide index={1}><LiveAuctionCard src={'/img/slider/image.png'} /></Slide>
                    <Slide index={2}><LiveAuctionCard src="/img/slider/img2.png" /></Slide>
                    <Slide index={3}><LiveAuctionCard src={'/img/slider/img3.png'} /></Slide>
                    <Slide index={4}><LiveAuctionCard src="/img/slider/img4.png" /></Slide>
                    <Slide index={5}><LiveAuctionCard src={'/img/slider/img5.png'} /></Slide>
                    <Slide index={6}><LiveAuctionCard src={'/img/slider/img2.png'} /></Slide>
                </Slider>

                <div className="relative">
                    <div >
                        <ButtonBack className="absolute left-16 -top-[500px] bg-light-dark py-5 px-8 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        </ButtonBack>

                    </div>
                    <div >

                        <ButtonNext className="absolute right-16 -top-[500px] bg-light-dark py-5 px-8 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                        </ButtonNext>
                    </div>
                </div>
            </CarouselProvider>
        </section>
    )
}
export default LatestLiveAuction