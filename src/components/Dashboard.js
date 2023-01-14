import React from "react";
import "./Dashboard.css";
import people from "../assets/people.png";
import users from "../assets/users.png";
import graph from "../assets/graph.png";
import summary from "../assets/summary.png";

const Dashboard = () => {
  const Employees = [
    {
      title: "Total Employee",
      employee: "450",
      img1: people,
      img2: users,
    },
    {
      title: "Attend Today",
      employee: "420",
      img1: people,
      img2: users,
    },
    {
      title: "Employees On Leave",
      employee: "15",
      img1: people,
      img2: users,
    },
    {
      title: "New Expense Request",
      employee: "5",
      img1: people,
      img2: users,
    },
  ];
  return (
    <div className="px-10 py-5" style={{ backgroundColor: "#F4F4F4" }}>
      <h1 className="dashboardText">Dashboard</h1>

      <p className="mt-5 font-bold">Company Status</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
        {Employees.map((employee) => (
          <div
            className="sm:mt-24 lg:mt-3"
            style={{ height: "100px", width: "120px" }}
          >
            <div className="card  w-64 bg-base-100 shadow-xl">
              <div className="card-body ">
                <div className="flex align-center">
                  <img
                    className="mt-1 mr-2"
                    style={{ height: "14px" }}
                    src={employee.img1}
                    alt=""
                  />
                  <p style={{ color: "#A5A5A5" }} className="font-semibold">
                    {employee.title}
                  </p>
                </div>

                <div className="flex justify-between align-center my-5">
                  <h2 className="card-title text-2xl font-bold">
                    {employee.employee}
                  </h2>{" "}
                  <button
                    style={{ background: "#1E2772" }}
                    className="btn btn-sm  "
                  >
                    View All
                  </button>
                </div>
                <hr />
                <img
                  style={{ width: "50%" }}
                  className="mt-3"
                  src={users}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="mt-52 mb-10 font-bold">Company Status</p>
        <div className="lg:flex">
          <img className="mr-5 " src={graph} alt="" />
          <img className="sm:my-5" src={summary} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
