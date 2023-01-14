import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import icon from "../assets/menuIcon.png";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div
      style={{ backgroundColor: "#1E2772", height: "100%" }}
      className="menubar pb-52"
    >
      <div className="py-5">
        <img
          className="mx-auto "
          style={{ height: "80px" }}
          src={logo}
          alt=""
        />
      </div>
      <div className="flex lg:flex-col md:flex-col  flex-wrap justify-start   align-center sm:mx-3 lg:mx-10">
        <Link to="/">
          <div className="flex pb-3 menuItem sm:pl-2 align-center">
            <div>
              <img className=" menuicon" src={icon} alt="" />
            </div>
            <h1 className="menutext mx-3">Dashboard</h1>
          </div>
        </Link>
        <Link to="/attendance">
          <div className="flex pb-3 menuItem sm:pl-2  ">
            <div>
              <img className=" menuicon" src={icon} alt="" />
            </div>
            <h1 className="menutext mx-3">Attendance</h1>
          </div>
        </Link>
        <div className="flex pb-3 menuItem sm:pl-2  align-center">
          <div>
            <img className=" menuicon" src={icon} alt="" />
          </div>
          <h1 className="menutext mx-3">Employees</h1>
        </div>

        <div className="flex pb-3 menuItem sm:pl-2  align-center">
          <div>
            <img className=" menuicon" src={icon} alt="" />
          </div>
          <h1 className="menutext mx-3">Leaves</h1>
        </div>
        <div className="flex pb-3 menuItem sm:pl-2  align-center">
          <div>
            <img className=" menuicon" src={icon} alt="" />
          </div>
          <h1 className="menutext mx-3">Expense</h1>
        </div>
        <div className="flex pb-3 menuItem sm:pl-2  align-center">
          <div>
            <img className=" menuicon" src={icon} alt="" />
          </div>
          <h1 className="menutext mx-3">Notice </h1>
        </div>
        <div className="flex pb-3 menuItem sm:pl-2 ">
          <div>
            <img className=" menuicon" src={icon} alt="" />
          </div>
          <h1 className="menutext mx-3">Department</h1>
        </div>
        <div className="flex pb-3 menuItem sm:pl-2  align-center">
          <div>
            <img className=" menuicon" src={settings} alt="" />
          </div>
          <div className="dropdown">
            <label tabIndex={0} className=" menutext mx-3">
              Settings
            </label>
            <ul tabIndex={0} className="dropdown-content  rounded-box ">
              <ul>
                <li>
                  <p className="dropdowntext">Approval</p>
                </li>
                <li>
                  <p className="dropdowntext">Leave</p>
                </li>
                <li>
                  <p className="dropdowntext">Office Setting</p>
                </li>
                <li>
                  <p className="dropdowntext">My Subscriptions</p>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="flex pt-44  align-center">
          <div>
            <img className="  menuicon" src={logout} alt="" />
          </div>
          <h1 className="menutext mx-3">Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
