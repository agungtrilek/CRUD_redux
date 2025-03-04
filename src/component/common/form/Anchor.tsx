import clsx from "clsx";
import React from "react";
import { Link } from "react-router";

export default function Anchor({
  children,
  className,
  to,
}: {
  children: React.ReactNode;
  className?: string;
  to: string;
}) {
  return (
    <Link className={clsx("", className)} to={to}>
      {children}
    </Link>
  );
}
