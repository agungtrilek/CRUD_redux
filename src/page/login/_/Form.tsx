import React, { useEffect, useState } from "react";
import Input from "../../../component/common/form/Input";
import ButtonComp from "../../../component/common/form/Button";
import Anchor from "../../../component/common/form/Anchor";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/slices/authSlice";

export const FormLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, token, loading, error } = useSelector(
    (state: RootState) => state.auth
  );
  console.log(token, "token di halaman login");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("loading...", token);
      const result = await dispatch(loginUser({ username, password })).unwrap();
      console.log("oke berhasil", token);
      if (result.accessToken) {
        navigate("/dashboard");
        console.log("kedashboard");
      } else {
        console.error("Login gagal:", result.error?.message);
        alert("Login gagal, periksa kembali username dan password Anda.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat login:", error);
      alert("Terjadi kesalahan. Silakan coba lagi nanti.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-1.5">
      <Input
        placeholder="Masukkan Username"
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        classNameInput={"bg-gray-400 rounded p-1 focus:bg-white "}
      />
      <Input
        placeholder="Masukkan Kata Sandi"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        classNameInput={"bg-gray-400 rounded p-1 focus:bg-white"}
      />
      <Anchor to="#" className="text-end hover:text-blue-400">
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
