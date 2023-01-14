import React from "react";
import "./Attendence.css";
import calendar1 from "../assets/calendar1.png";
import arrow from "../assets/arrow.png";
import checkin1 from "../assets/checkin1.png";
import checkin2 from "../assets/checkin2.png";
import checkout1 from "../assets/checkout1.png";
import checkout2 from "../assets/checkout2.png";
import remark from "../assets/remark.png";
import eye from "../assets/eye.png";

const Attendance = () => {
  return (
    <div className="px-10 py-5" style={{ backgroundColor: "#F4F4F4" }}>
      <h1 className="dashboardText">Attendence</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="attendanceBox flex justify-between p-5 ">
          <p>Jan 02, 2023</p>
          <img style={{ height: "20px" }} src={calendar1} alt="" />
        </div>
        <div className="attendanceBox flex justify-between p-5 ">
          <p>Department</p>
        </div>
        <div className="attendanceBox flex justify-between  p-5 ">
          <p>Attendance</p>
          <img style={{ height: "10px" }} className="mt-2" src={arrow} alt="" />
        </div>
        <div className="attendanceBox flex justify-between  p-5 ">
          <p>Present</p>
          <img style={{ height: "10px" }} className="mt-2" src={arrow} alt="" />
        </div>
        <div className="attendanceBox flex justify-between p-5 ">
          <p>Check In</p>
        </div>
        <div className="attendanceBox flex justify-between p-5 ">
          <p>Location</p>
        </div>
        <div className="attendanceBox flex justify-between  p-5 ">
          <p>Designation</p>
          <img style={{ height: "10px" }} className="mt-2" src={arrow} alt="" />
        </div>
        <div className="attendanceBox flex justify-between  p-5 ">
          <p>Department</p>
          <img style={{ height: "10px" }} className="mt-2" src={arrow} alt="" />
        </div>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Remarks</th>
              <th>Hour</th>
              <th>Overtime</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jahid Hasan</td>
              <td>HR & Admin</td>
              <td>
                <img src={checkin1} alt="" />
              </td>
              <td>
                <img src={checkout1} alt="" />
              </td>
              <td>
                <img src="" alt="" />
              </td>
              <td></td>
              <td></td>
              <td>
                <img src={eye} alt="" />
              </td>
            </tr>

            <tr className="hover">
              <td>Jahid Hasan</td>
              <td>HR & Admin</td>
              <td>
                <img src={checkin2} alt="" />
              </td>
              <td>
                <img src={checkout2} alt="" />
              </td>
              <td>
                <img src={remark} alt="" />
              </td>
              <td></td>
              <td></td>
              <td>
                <img src={eye} alt="" />
              </td>
            </tr>

            <tr>
              <td>Jahid Hasan</td>
              <td>HR & Admin</td>
              <td>
                <img src={checkin1} alt="" />
              </td>
              <td>
                <img src={checkout1} alt="" />
              </td>
              <td>
                <img src="" alt="" />
              </td>
              <td></td>
              <td></td>
              <td>
                <img src={eye} alt="" />
              </td>
            </tr>
            <tr>
              <td>Jahid Hasan</td>
              <td>HR & Admin</td>
              <td>
                <img src={checkin2} alt="" />
              </td>
              <td>
                <img src={checkout2} alt="" />
              </td>
              <td>
                <img src={remark} alt="" />
              </td>
              <td></td>
              <td></td>
              <td>
                <img src={eye} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
