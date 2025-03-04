import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-200 w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
};
