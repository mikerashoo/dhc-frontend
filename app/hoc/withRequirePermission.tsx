import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Preloader from "../components/Preloader/Preloader";
import { useAuthContext } from "../context/auth";
import { useLoadingContext } from "../context/loading";

const withRequirePermission: any = (Component: any, permission: string) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const { userInfo, updateUserInfo } = useAuthContext();
    const { isLoading, setIsLoading } = useLoadingContext();
    
    useEffect(() => {
      if(userInfo){
        if (
          !isLoading &&
          !userInfo?.role?.permissions.some((e: any) => e.slug === permission)
        )
          router.push("/login");
      }
    }, [userInfo, isLoading]);

    return userInfo ? (
      <Component />
    ) : (
      // <Wrapper>
      <Preloader />
      // </Wrapper>
    );
    // return <Component />
  };

  return AuthenticatedComponent;
};

export default withRequirePermission;
