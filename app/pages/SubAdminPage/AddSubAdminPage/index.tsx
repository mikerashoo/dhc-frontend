import FormControl from "@/app/components/Form/FormControl";
import FormErrorMessage from "@/app/components/Form/FormErrorMessage";
import Input from "@/app/components/Form/Input";
import { IAddSub } from "@/app/constants/interfaces";
import { AddSubAdminSchema } from "@/app/constants/validation";
import { useLoadingContext } from "@/app/context/loading";
import ArrowLeft from "@/app/icons/ArrowLeft";
import Copy from "@/app/icons/Copy";
import Tick from "@/app/icons/Tick";
import { SubAdminService } from "@/app/services/SubAdminService";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@/app/utils/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import copy from "copy-to-clipboard"; // Импортируем библиотеку для копирования

const types = ["Listings", "Leads", "Sales", "Blogs"];
const AddSubAdminPage = () => {
  const [products, setProducts] = React.useState<string[]>([]);
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoadingContext();

  const { formState, register, handleSubmit, control, setValue, watch } =
    useForm<IAddSub>({
      mode: "onBlur",
      resolver: yupResolver(AddSubAdminSchema),
    });
  const { errors } = formState;
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Если чекбокс был отмечен, добавьте значение в массив
      setProducts([...products, type]);
    } else {
      // Если чекбокс был снят, удалите значение из массива
      setProducts(products.filter((item) => item !== type));
    }
  };
  const onSubmit = (data: any) => {
    setIsLoading(true);
    delete data.repeat_password;
    data.access = products;
    if (data.access.length === 0) {
      setIsLoading(false);
      displayErrorMessage("Select acces");
      return;
    }
    SubAdminService.createSubAdmin(data)
      .then((res) => {
        if (res.data.status) {
          displaySuccessMessage(res.data.message);
          router.push("/subadmin");
        } else {
          displayErrorMessage(res.data.message);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  const password = watch("password");
  const handleCopyClick = () => {
    if (password) {
      copy(password);
    }
  };
  return (
    <section className="section">
      <div className="section__header">
        <div className="section__header-left">
          <h2>Sub Admins</h2>
          <span
            className="section__header-back"
            onClick={() => router.push("/subadmin")}
          >
            <ArrowLeft />
          </span>
        </div>
      </div>
      <div className="section__content">
        <div className="subadmin">
          <div className="subadmin__header">
            <div className="subadmin__title">
              Invite people to <span>DHC New Homes</span>
            </div>
            <span className="subadmin__subtitle">
              Invite sub admins to collaborate and use products in your
              organization
            </span>
          </div>
          <form className="subadmin__form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input placeholder="Name" register={{ ...register("name") }} />
              <FormErrorMessage>
                {errors?.name?.message && errors?.name?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Enter Email ID"
                register={{ ...register("email") }}
              />
              <div className="subadmin__label">
                Enter email of those whom you want to join as a sub admin
              </div>
              <FormErrorMessage>
                {errors?.email?.message && errors?.email?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Enter Phone Number"
                register={{ ...register("phone") }}
              />
              <div className="subadmin__label">
                Enter number of those whom you want to join as a sub admin
              </div>
              <FormErrorMessage>
                {errors?.phone?.message && errors?.phone?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <div className="subadmin__products">
                <div className="subadmin__products-header">
                  <div>Products</div>
                  <div>Acces</div>
                </div>
                <div className="subadmin__products-checks">
                  <div className="custom-checkbox-wrapper subadmin__products-checboxes">
                    {types.map((el: any) => (
                      <label className="custom-checkbox subadmin__products-checkbox">
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e, el)}
                          checked={products.includes(el)}
                        />
                        <span className="checkmark">
                          <Tick />
                        </span>
                        {el}
                      </label>
                    ))}
                  </div>
                  <FormErrorMessage>
                    {products.length === 0 && "Select at least one"}
                  </FormErrorMessage>
                </div>
              </div>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Create password"
                register={{ ...register("password") }}
              />
              <FormErrorMessage>
                {errors?.password?.message && errors?.password?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Confirm Password"
                register={{ ...register("repeat_password") }}
              />
              <FormErrorMessage>
                {errors?.repeat_password?.message &&
                  errors?.repeat_password?.message}
              </FormErrorMessage>
            </FormControl>
            <span onClick={() => handleCopyClick()} className="subadmin__copy">
              <Copy />
              Copy Password
            </span>
            <button className="btn">Confirm</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddSubAdminPage;
