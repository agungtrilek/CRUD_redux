import React from "react";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="col-span-4 row-span-3 col-start-2 row-start-2 shadow">
      {children}
    </div>
  );
};
