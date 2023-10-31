import React, { useState } from "react";

import { useForm } from "react-hook-form";
import FormControl from "../../components/Form/FormControl";
import Input from "../../components/Form/Input";
import { ILogin } from "../../constants/interfaces";
import { useLoadingContext } from "../../context/loading";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../../utils/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../constants/validation";
import FormErrorMessage from "../../components/Form/FormErrorMessage";
import { AuthService } from "../../services/AuthService";
import { useRouter } from "next/router";
import { useAuthContext } from "@/app/context/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "@/app/components/Preloader/Preloader";

const LoginPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const changeType = (type: string) => {
    setPasswordType(type);
  };
  const { formState, register, handleSubmit, control } = useForm<ILogin>({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });
  const { errors } = formState;
  const { isLoading, setIsLoading } = useLoadingContext();
  const router = useRouter();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    AuthService.signInUser(data)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("user", JSON.stringify(res.data.Details));

          displaySuccessMessage(res.data.message);
          router.push("/");
        } else {
          displayErrorMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        displayErrorMessage(err.message);
      })
      .finally(setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Preloader />}

      <div className="login">
        <div className="login__wrapper">
          <h1>Autorization</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input placeholder="E-mail" register={{ ...register("email") }} />
              <FormErrorMessage>
                {errors?.email?.message && errors?.email?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                type={passwordType}
                changeType={changeType}
                //   iconLeft={<Lock />}
                placeholder="Password"
                register={{ ...register("password") }}
              />
              <FormErrorMessage>
                {errors.password?.message && errors.password?.message}
              </FormErrorMessage>
            </FormControl>
            <button className="btn">Log in</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
