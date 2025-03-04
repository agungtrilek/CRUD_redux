import clsx from "clsx";
import { Button } from "flowbite-react";
import React from "react";

export default function ButtonComp({
  onClick,
  size,
  color,
  children,
  className,
  type,
}: {
  onClick?: any;
  size?: string;
  color?: string;
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button" | "reset";
}) {
  return (
    <button
      onClick={onClick}
      color={color}
      className={clsx("", className)}
      type={type}
    >
      {children}
    </button>
  );
}
