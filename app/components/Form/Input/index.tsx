import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { ChangeHandler } from "react-hook-form";
import classNames from "classnames";
import styles from "./styles.module.scss";
import InputMask from "react-input-mask";


type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  type?: string;
  name?: string;
  defaultPhone?: string;
  register?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  onChange?: Function;
  onBlur?: ChangeHandler;
  ref?: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  icon?: React.ReactElement;
  iconBg?: boolean;
  code?: boolean;
  underline?: boolean;
  rounded?: boolean;
  checkbox?: boolean;
  changeType?: any;
};

const Input: React.FC<Props> = ({
  className,
  type,
  code = false,
  register,
  name,
  iconLeft,
  iconRight,
  onChange,
  ref,
  onBlur,
  icon,
  iconBg,
  defaultPhone,
  underline,
  rounded,
  checkbox,
  changeType,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.inputGroup, {
        [styles.inputGroupLeft]: iconLeft,
      })}
      style={checkbox ? { height: 20 } : {}}
    >
      {iconLeft && (
        <span className={iconBg ? styles.inputIconBg : ""}>{iconLeft}</span>
      )}
      {type !== "phone" && type !== "password" && code === false && (
        <input
          type={type || "text"}
          name={name || register?.name}
          className={`${
            underline
              ? classNames(styles.input_underline, styles.input, className, {
                  [styles.inputIcon]: iconLeft || iconRight,
                  [styles.inputIconLeft]: iconLeft,
                  [styles.inputIconRight]: iconRight,
                })
              : classNames(styles.input, className, {
                  [styles.inputIcon]: iconLeft || iconRight,
                  [styles.inputIconLeft]: iconLeft,
                  [styles.inputIconRight]: iconRight,
                })
          }
          ${
            rounded
              ? classNames(styles.input_rounded, styles.input, className, {
                  [styles.inputIcon]: iconLeft || iconRight,
                  [styles.inputIconLeft]: iconLeft,
                  [styles.inputIconRight]: iconRight,
                })
              : classNames(styles.input, className, {
                  [styles.inputIcon]: iconLeft || iconRight,
                  [styles.inputIconLeft]: iconLeft,
                  [styles.inputIconRight]: iconRight,
                })
          }
              ${checkbox ? classNames(styles.input_checkbox) : ""}`}
          ref={ref || register?.ref}
          onChange={onChange || register?.onChange}
          onBlur={onBlur || register?.onBlur}
          {...props}
        />
      )}
      {icon ? icon : null}

      {type === "password" && (
        <>
          <input
            type={type}
            name={name || register?.name}
            className={`${
              underline
                ? classNames(styles.input_underline, styles.input, className, {
                    [styles.inputIcon]: iconLeft || iconRight,
                    [styles.inputIconLeft]: iconLeft,
                    [styles.inputIconRight]: iconRight,
                  })
                : classNames(styles.input, className, {
                    [styles.inputIcon]: iconLeft || iconRight,
                    [styles.inputIconLeft]: iconLeft,
                    [styles.inputIconRight]: iconRight,
                  })
            }
            ${
              rounded
                ? classNames(styles.input_rounded, styles.input, className, {
                    [styles.inputIcon]: iconLeft || iconRight,
                    [styles.inputIconLeft]: iconLeft,
                    [styles.inputIconRight]: iconRight,
                  })
                : classNames(styles.input, className, {
                    [styles.inputIcon]: iconLeft || iconRight,
                    [styles.inputIconLeft]: iconLeft,
                    [styles.inputIconRight]: iconRight,
                  })
            }
                ${checkbox ? classNames(styles.input_checkbox) : ""}`}
            ref={ref || register?.ref}
            onChange={onChange || register?.onChange}
            onBlur={onBlur || register?.onBlur}
            {...props}
          />
          <div
            className={`${styles.iconRightPass} pointer"`}
            onClick={() => changeType("text")}
          >
            {/* <Eye /> */}
          </div>
        </>
      )}
      {iconRight ?? null}
      {changeType && type !== "password" ? (
        <div
          className={`${styles.iconRightPass} pointer input-icon`}
          onClick={() => changeType("password")}
        >
          {/* <EyeHide /> */}
        </div>
      ) : null}
      {type === "phone" && (
        <InputMask
          name={name || register?.name}
          onChange={register?.onChange}
          onBlur={register?.onBlur}
          mask="+7 (999) 999 99 99"
          alwaysShowMask
          className={`${
            underline
              ? classNames(styles.input_underline, styles.input, className, {
                  [styles.inputIcon]: icon,
                })
              : classNames(styles.input, className, {
                  [styles.inputIcon]: icon,
                })
          }
              ${checkbox ? classNames(styles.input_checkbox) : ""}`}
          ref={register?.ref}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
