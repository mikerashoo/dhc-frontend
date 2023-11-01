import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IBreadscrumb } from "../../constants/interfaces";
import { useLoadingContext } from "../../context/loading";
import Preloader from "../Preloader/Preloader";
import Header from "../Header";
import SideMenu from "../SideMenu/SideMenu";
import { Montserrat } from "next/font/google";
import SideBar from "../SideMenu";
import MobileSideBar from "../SideMenu/MobileSideMenu";
import useSideBar from "@/app/context/sidebar";
import { MenuOpenOutlined } from "@mui/icons-material";

const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext"],
    display: "auto",
});
type Props = {
    children: React.ReactNode;
    title?: string;
    isContacts?: boolean;
    user?: string;
    breadscrumbs?: IBreadscrumb;
};

const Wrapper: React.FC<Props> = ({ children, title, user, breadscrumbs }) => {
    const router = useRouter();
    const { isLoading, setIsLoading } = useLoadingContext();
    const { isOpen, setIsOpen } = useSideBar();

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title key="title">{title ? title : "DHC"}</title>
            </Head>
            {isLoading && <Preloader />}

            <div className="flex w-full h-full">
                <SideBar />
                <div className="w-full">
                    <Header />
                    <div className="">
                        <div
                            className={` ${
                                router.pathname === "/" ? "nopadding" : ""
                            }`}
                        >
                            <div>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <main className={montserrat.className}>
                <div className="main__wrapper">
                    <SideBar />
                    <div className="main__container">
                        <Header />
                        <div className="container">
                            <div
                                className={`main__content ${
                                    router.pathname === "/" ? "nopadding" : ""
                                }`}
                            >
                                <div>{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> */}
            <ToastContainer />
        </>
    );
};

export default Wrapper;
