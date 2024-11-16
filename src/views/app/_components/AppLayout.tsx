import React from "react";
import Navbar from "../../../components/navbar/Index";

const AppLayout: IAppLayout = ({ children }) => {
  return (
    <div className="h-dvh flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};
export default React.memo(AppLayout);
