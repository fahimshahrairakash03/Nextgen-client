import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Menubar from "../components/Menubar";

const Main = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-4 ">
        <div>
          <Menubar></Menubar>
        </div>
        <div className="lg:col-span-4 sm:col-span-3 ">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
