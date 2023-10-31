import React from "react";

const ProgressBar: React.FC<{
  value: string;
  maxValue: number;
  title: string;
}> = ({ value, maxValue, title }) => {
  const percentage = (parseInt(value.replace(/,/g, "")) / maxValue) * 100;

  return (
    <div className="progress__bar">
      <div className="progress__bar-title">{title}</div>
      <div className="progress__bar-wrapper">
        <div className="progress__bar-shell">
          <div
            className="progress__bar-fill"
            style={{ width: `${percentage * 0.8}%` }}
          ></div>
          <span className="progress__bar-value">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
