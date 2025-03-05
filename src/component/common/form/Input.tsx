import clsx from "clsx";
import React from "react";

export default function Input({
  children,
  classNameInput,
  classNameLabel,
  id,
  type,
  valueInput,
  onChange,
  placeholder,
}: {
  children?: React.ReactNode;
  classNameInput?: string;
  classNameLabel?: string;
  id?: string;
  type: string;
  valueInput?: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <>
      <div className={clsx("mb-2", classNameLabel)}>
        <label htmlFor={id}>{children}</label>
      </div>
      <input
        className={clsx("", classNameInput)}
        id={id}
        type={type}
        value={valueInput}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </>
  );
}
