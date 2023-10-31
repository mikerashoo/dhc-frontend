import React, { useEffect, useState } from "react";

import { useAuthContext } from "../../app/context/auth";
import { useRouter } from "next/router";
import LoginPage from "@/app/pages/login/LoginPage";
const Login = () => {
  const [rendered, setRendered] = useState(false);
  const { userInfo, updateUserInfo } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo]);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return <LoginPage />;
  }
  return null;
};

export default Login;
