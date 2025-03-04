import React from "react";
import ButtonComp from "../../../component/common/form/Button";
import FB from "../../../assets/facebook.svg";
import GG from "../../../assets/google.svg";
import APL from "../../../assets/apple.svg";
import Image from "../../../component/common/form/Image";

export const LoginWithProvider = () => {
  return (
    <div className="flex flex-row justify-around mt-4">
      <ButtonComp className="p-2 rounded-lg shadow px-8 " type="button">
        <Image src={GG} alt="Google" className="w-6 h-6" />
      </ButtonComp>
      <ButtonComp className="p-2 rounded-lg shadow px-8 " type="button">
        <Image src={FB} alt="Facebook" className="w-6 h-6" />
      </ButtonComp>
      <ButtonComp className="p-2 rounded-lg shadow px-8 " type="button">
        <Image src={APL} alt="Apple" className="w-6 h-6" />
      </ButtonComp>
    </div>
  );
};
