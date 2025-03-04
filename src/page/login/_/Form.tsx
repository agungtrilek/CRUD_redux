import React from "react";
import Input from "../../../component/common/form/Input";
import ButtonComp from "../../../component/common/form/Button";
import Anchor from "../../../component/common/form/Anchor";

export const FormLogin = () => {
  return (
    <form className="flex flex-col gap-y-1.5">
      <Input
        placeholder="Masukkan Email"
        type="email"
        classNameInput={"bg-gray-400 rounded p-1 focus:bg-white "}
      />
      <Input
        placeholder="Masukkan Kata Sandi"
        type="password"
        classNameInput={"bg-gray-400 rounded p-1 focus:bg-white"}
      />
      <Anchor link="" className="text-end hover:text-blue-400">
        Lupa Kata Sandi?
      </Anchor>
      <ButtonComp
        type="submit"
        className="border bg-gray-900 text-white rounded-xl mt-3 py-1.5 "
      >
        Login
      </ButtonComp>
    </form>
  );
};
