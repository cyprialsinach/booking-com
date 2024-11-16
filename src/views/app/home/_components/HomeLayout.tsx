import React from "react";
import HomeSidebar from "./HomeSidebar";

const HomeLayout: IAppLayout = ({ children }) => {
  return (
    <main className="pt-[2.5rem] grow mt-[8.375rem]">
      <div className="container h-full">
        <div className="h-full">
          <aside className="fixed w-[18.75rem]">
            <HomeSidebar />
          </aside>
          <div className="ml-[22.75rem]">{children}</div>
        </div>
      </div>
    </main>
  );
};
export default React.memo(HomeLayout);
