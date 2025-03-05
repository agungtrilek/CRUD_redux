import React from "react";
import Avatar from "../../../assets/avatar.png";
import Title from "../form/Title";
import Text from "../form/Text";
import { User } from "../../../types/User";

interface UserProfileProps {
  user: User;
}

export const CardAvatar = ({ user }: UserProfileProps) => {
  return (
    <div className="flex flex-row w-full justify-baseline gap-5 m-4">
      <img
        src={Avatar}
        alt="Foto Profile"
        className="h-[20%] w-[20%] rounded-full"
      />
      <div>
        <Title className="font-medium text-lg">{user.username}</Title>
        <Text className="text-gray-400 text-sm">1234567</Text>
      </div>
    </div>
  );
};
