import React from "react";
import ContentLoader from "react-content-loader";


type Props = {
  height?:number;
}
const DataTable:React.FC<Props> = ({height}) => (
  <ContentLoader 
    speed={2}
    width={"100%"}
    height={height || 100}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect rx="10" ry="10" width="100%" height="100%" /> 
    {/* <rect x="78" y="11" rx="10" ry="10" width="118" height="130" /> 
    <rect x="207" y="11" rx="10" ry="10" width="20%" height="130" /> 
    <rect x="557" y="11" rx="10" ry="10" width="76" height="130" />
    <rect x="790" y="11" rx="10" ry="10" width="241" height="130" />
    <rect x="7770" y="11" rx="10" ry="10" width="141" height="130" />
    <rect x="9350" y="11" rx="10" ry="10" width="117" height="130" />
    <rect x="10350" y="11" rx="10" ry="10" width="94" height="130" /> */}
  </ContentLoader>
);

export default DataTable;