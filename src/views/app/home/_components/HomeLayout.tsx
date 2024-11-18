import React from "react";
import HomeSidebar from "./HomeSidebar";
import AppLayout from "../../_components/AppLayout";

const HomeLayout: IAppLayout = ({ children }) => {
  return (
    <AppLayout>
      <main className="py-[2.5rem] grow mt-[8.375rem]">
        <div className="container h-full">
          <div className="h-full">
            {/* CALCULATE SIDEBAR HEIGHT */}
            <aside className="fixed w-[18.75rem] h-[calc(100%-10.875rem)] scrollbar">
              <HomeSidebar />
            </aside>
            <div className="ml-[22.75rem] h-full">{children}</div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};
export default React.memo(HomeLayout);
