import React from "react";
import { Content } from "../../../component/layout/Content";
import { Table } from "../../../component/common/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { logout } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const ContentTable = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  console.log(user);
  return (
    <>
      <div>
        <h1>Welcome, {user?.username} </h1>
        <p>Email: </p>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <Content>
        <Table>
          <tr className="border-b">
            <td className="p-2 border">1</td>
            <td className="p-2 border">Agung</td>
            <td className="p-2 border">IMG.jpg</td>
            <td className="p-2 border text-center">12 Jan 2025</td>
            <td className="p-2 border text-center">
              <button className="px-3 py-1 bg-blue-500 text-white rounded">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded ml-2">
                Delete
              </button>
            </td>
          </tr>
        </Table>
      </Content>
    </>
  );
};
