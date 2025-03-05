import React from "react";
import { Sidebar } from "../../component/layout/Sidebar";
import { Footer } from "../../component/layout/Footer";
import { Header } from "../../component/layout/Header";
import { ContentTable } from "./_/ContentTable";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

export default function Dashboard() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 h-screen">
      <Sidebar user={user!} />
      <Header />
      <ContentTable />
      <Footer />
    </div>
  );
}
