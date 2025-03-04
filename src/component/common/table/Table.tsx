import React from "react";
import { TITLE_TABLE_USER } from "../../../constants/titleTable";

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            {TITLE_TABLE_USER.map((item, index) => (
              <th key={index} className="p-2 border">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
