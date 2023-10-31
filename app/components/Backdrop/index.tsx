import React from "react";

type Props = {
  onClick: Function;
  transparent: boolean
};

const Backdrop: React.FC<Props> = ({ onClick, transparent = false }) => {
  return (
    <div
      className="backdrop"
      style={transparent ? { background: "transparent" } : {}}
      onClick={() => onClick()}
    ></div>
  );
};

export default Backdrop;
