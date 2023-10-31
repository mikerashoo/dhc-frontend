import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import Backdrop from "../Backdrop";

type Props = {
  isShow: boolean;
  handleClose: Function;
  children: React.ReactNode;
  minWidth?: number | string;
  minHeight?: number | string;
  overflow?: string;
  reset?: Function;
};

const Modal: React.FC<Props> = ({
  isShow,
  handleClose,
  minWidth,
  minHeight,
  children,
  overflow="visible",
  reset,
}) => {
  const [isRenderedOnServerSide, setIsRenderedOnServerSide] =
    useState<boolean>(false);
  useEffect(() => {
    setIsRenderedOnServerSide(true);
  }, []);

  const style = () => {
    const stylesData = {
      minWidth: minWidth ?? "",
      minHeight: minHeight ?? "",
      overflow: overflow ?? "",
    };
    return stylesData;
  };
  useLayoutEffect(() => {
    // Для того чтобы удалять автосохраненные данные с react-hook form
    if (isShow && typeof reset === "function") reset();
  }, [isShow]);

  if (!isRenderedOnServerSide) return null;
  return createPortal(
    <>
      {isShow ? (
        <div className={classNames(styles.modal, { "d-none": !isShow })}>
          <div style={style()} className={styles.modalContainer}>
            <div className={styles.modalTop}>
              <div
                className={styles.modalControls}
                onClick={() => handleClose()}
              />
            </div>
            <div className={styles.modalMain}>{children}</div>
          </div>
          <Backdrop onClick={handleClose} transparent={false} />
        </div>
      ) : (
        <></>
      )}
    </>,
    document.getElementById("modal-root")!!
  );
};

export default Modal;
