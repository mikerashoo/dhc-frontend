import React, {TextareaHTMLAttributes} from "react";
import styles from "./styles.module.scss"
import {ChangeHandler} from "react-hook-form";
import classNames from "classnames";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string,
  name?: string,
  rows?: number,
  defaultValue?: string
  minWidth?: number
  register?: {
    onChange: ChangeHandler,
    onBlur: ChangeHandler,
    ref: React.Ref<any>,
    name: string,
  },
}

const TextArea: React.FC<Props> = ({className, name, register, rows = 4, defaultValue, minWidth = 100,  ...props}) => {

  return (
    <div className={styles.inputGroup}>
      <textarea
        rows={rows}
        style={{minWidth: minWidth}}
        name={name || register?.name}
        ref={register?.ref}
        className={classNames(styles.textArea, className)}
        onChange={register?.onChange}
        onBlur={register?.onBlur}
        defaultValue={defaultValue}
        {...props}
      />
    </div>
  )
}

export default TextArea
