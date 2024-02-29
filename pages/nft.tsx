import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import MoreFromAuthor from "@/components/Sections/MoreFromAuthor"
import Preview from "@/components/Sections/Preview"
import { useState } from "react"

type Props = {}
const nft = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {
                !isMenuOpen && <>
                    <Preview />
                    <MoreFromAuthor />
                    <Footer />
                </>
            }


        </div>
    )
}
export default nft