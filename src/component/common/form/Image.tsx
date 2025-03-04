import clsx from "clsx";
import React from "react";

export default function Image({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={clsx("", className)} />;
}
