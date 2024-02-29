import Navbar from "@/components/Navbar/Navbar"
import MoreFromAuthor from "@/components/Sections/MoreFromAuthor"
import Preview from "@/components/Sections/Preview"

type Props = {}
const nft = (props: Props) => {
    return (
        <div>
            <Navbar />
            <Preview />
            <MoreFromAuthor />
        </div>
    )
}
export default nft