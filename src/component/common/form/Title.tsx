import React from "react";
import clsx from "clsx";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h1 className={clsx("", className)}>{children}</h1>;
}
