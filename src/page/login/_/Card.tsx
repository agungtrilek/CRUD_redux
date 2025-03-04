import React from "react";
import Title from "../../../component/common/form/Title";
import Text from "../../../component/common/form/Text";
import Image from "../../../component/common/form/Image";
import IconLogin from "../../../assets/enter_black.png";
import { FormLogin } from "./Form";
import { LoginWithProvider } from "./LoginWithProvider";

export const Card = () => {
  return (
    <div className="w-[370px] shadow-lg rounded-2xl mx-auto text-center p-10 bg-gradient-to-b from-blue-300 to-white ">
      <div className=" h-14 w-14 bg-white mx-auto flex items-center justify-center rounded-2xl shadow-xl">
        <Image src={IconLogin} className="w-8 h-8 " />
      </div>
      <Title className="text-xl font-bold mt-5">Login dengan Email</Title>
      <Text className="text-gray-600 text-sm ">
        Latihan Auth, crud, search dan sort menggunakan React
      </Text>

      <FormLogin />
      <Text className="text-sm text-gray-400 mt-4">
        - - - - - -Atau masuk dengan - - - - - -
      </Text>
      <LoginWithProvider />
    </div>
  );
};
