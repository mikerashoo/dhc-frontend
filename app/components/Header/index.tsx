import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLoadingContext } from "../../context/loading";
import { LocalStorageHandler } from "../../utils/localStorageHandler";
import { useAuthContext } from "../../context/auth";
import Notification from "../../icons/Notification";
import UserIcon from "@/app/icons/UserIcon";
const Header = () => {
  const { isLoading, setIsLoading } = useLoadingContext();
  const router = useRouter();
  const [activeProfile, setActiveProfile] = React.useState(false);
  const { pathname, asPath, query } = router;

  // const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
  // 	if (localStorage.getItem(".AuthToken")) {
  // 		setIsAuth(true);
  // 	} else {
  // 		setIsAuth(false);
  // 	}
  // }, []);
  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <>
      <header className="header">
        <div className="header__left">Dashboard</div>
        <div style={{ position: "relative" }} className="header__right">
          <div style={{ display: "flex" }}>
            {" "}
            <div style={{ marginRight: "38px" }}>
              <Notification />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setActiveProfile(!activeProfile)}
            >
              <UserIcon />
            </div>
          </div>
          <div
            className={`header__profile ${
              activeProfile ? "header__profile-active" : ""
            }`}
          >
            <span onClick={() => logout()}>Log Out</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
