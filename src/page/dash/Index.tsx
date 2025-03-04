import React from "react";
import { Sidebar } from "../../component/layout/Sidebar";
import { Footer } from "../../component/layout/Footer";
import { Header } from "../../component/layout/Header";
import { ContentTable } from "./_/ContentTable";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 h-screen">
      <Sidebar />
      <Header />
      <ContentTable />
      <Footer />
    </div>
  );
}
