import ArrowLeft from "@/app/icons/ArrowLeft";
import React, { FC } from "react";
type Props = {
  currentStep: number;
};
const Progress: FC<Props> = ({ currentStep }) => {
  return (
    <div className="project__progress">

      <div
        className={`project__progress-item ${
          currentStep >= 1 ? "activeStep" : ""
        }`}
      >
        <span>1</span>
        <p>Developer Details</p>
      </div>

      <div
        className={`project__progress-item ${
          currentStep >= 2 ? "activeStep" : ""
        }`}
      >
        <span>2</span>
        <p>Project Details</p>
      </div>
      <div
        className={`project__progress-item ${
          currentStep >= 3 ? "activeStep" : ""
        }`}
      >
        <span>3</span>
        <p>Photos</p>
      </div>
      <div
        className={`project__progress-item ${
          currentStep >= 4 ? "activeStep" : ""
        }`}
      >
        <span>4</span>
        <p>Pricing & Floor Plan</p>
      </div>
    </div>
  );
};

export default Progress;
