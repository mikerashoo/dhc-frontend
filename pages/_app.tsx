import "../app/styles/main.scss";
import "../css/globals.css";
import type { AppProps } from "next/app";
import { GetServerSideProps } from "next";
import { LoadingContext, useLoading } from "../app/context/loading";
import { useEffect, useState } from "react";
import router, { useRouter } from "next/router";

import { LocalStorageHandler } from "../app/utils/localStorageHandler";
import { AuthService } from "../app/services/AuthService";
import { AuthContext } from "@/app/context/auth";

function MyApp({ Component, pageProps }: AppProps) {
    const { isLoading, setIsLoading } = useLoading();
    const { locale } = useRouter();
    const [isAuth, setIsAuth] = useState(false);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setIsAuth(true);
        } else {
            router.push("/login");
            setIsAuth(false);
        }
    }, []);

    //   useEffect(() => {
    //     setIsLoading(false);
    //     // const Token = LocalStorageHandler.getUserToken();
    //     // if (Token) {
    //     //   AuthService.getCurrentUser()
    //     //     .then((res) => {})
    //     //     .catch((err) => {
    //     //       LocalStorageHandler.clearUserToken();
    //     //       router.push("/login");
    //     //     });
    //     // }
    //     // if (router.pathname == "/login") {
    //     //   setIsAuth(false);
    //     //   router.push("/login");
    //     // }
    //   }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <AuthContext.Provider
                value={{
                    userInfo,
                    isAuth,
                    setIsAuth,
                }}
            >
                <Component {...pageProps} />
            </AuthContext.Provider>
        </LoadingContext.Provider>
    );
}
export default MyApp;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            cookies: context.req.cookies ?? "",
        },
    };
};
