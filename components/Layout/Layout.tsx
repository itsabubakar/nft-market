
import React, { ReactNode } from "react"
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Footer from "../Footer/Footer";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>

            {children}
            <Footer />
        </>
    );
};
export default Layout;
