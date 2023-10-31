import { Rating } from "@mui/material";
import React from "react";
import { ChangeHandler, Controller } from "react-hook-form";

type Props = {
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  control: any;
  name?: string;
  size?: "small" | "medium" | "large" | undefined;
};
const RatingStars: React.FC<Props> = ({ name, control, register, size = 'medium' }) => {
  return (
    <Controller
      name={name || register?.name}
      control={control}
      render={({ field: { value, onChange, onBlur, ref } }) => {
        return (
          <Rating
            name="text-feedback"
            value={value}
            size={size}
            onChange={onChange}
            // emptyIcon={<Star />}
            // icon={<StarFill />}
          />
        );
      }}
    />
  );
};

export default RatingStars;
