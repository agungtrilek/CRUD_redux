import React from "react";
import { SIDEBAR_LINK } from "../../constants/sidebarLink";
import { CardAvatar } from "../common/card/CardAvatar";
import Anchor from "../common/form/Anchor";
import UserImg from "../../assets/User.png";
import Product from "../../assets/Product.png";
import Status from "../../assets/Status.png";
import History from "../../assets/history.svg";
import { User } from "../../types/User";

const ICONS = {
  UserImg,
  Product,
  Status,
  History,
};

interface UserProfileProps {
  user: User;
}

export const Sidebar = ({ user }: UserProfileProps) => {
  return (
    <div className="row-span-4 shadow">
      <CardAvatar user={user} />
      <ul className="ml-3.5 pt-8">
        {SIDEBAR_LINK.map((item, index) => (
          <li
            key={index}
            className="mb-4 flex flex-row p-1 rounded-lg hover:bg-blue-500"
          >
            <img src={ICONS[item.name]} alt="icon" className="h-7 w-7" />

            <Anchor to={item.name}>{item.name}</Anchor>
          </li>
        ))}
      </ul>
    </div>
  );
};
