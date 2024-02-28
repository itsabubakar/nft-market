import Link from "next/link"

type Props = {}
const Footer = (props: Props) => {
    return (
        <footer className=" px-5 max-w-[1390px]  mx-auto">

            <div className="border grid grid-cols-3 justify-between border-gray-white rounded-2xl">
                <div>
                    <p>NFT Market</p>
                    <p>Support</p>
                    <p>Support</p>
                    <p>Support</p>
                </div>
                <div>
                    <p>auctions</p>
                    <p>auctions</p>
                    <p>auctions</p>
                    <p>auctions</p>
                    <div>
                        <Link href={'/'}>my account</Link>
                    </div>
                    <div>
                        facebook
                    </div>
                </div>
                <div>
                    <p>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
                    <form action="">
                        <input type="text" />
                        <p>sign in</p>
                    </form>
                </div>
            </div>
        </footer>
    )
}
export default Footer