import React from "react";
import calendar from "../assets/date.png";
import notification from "../assets/notification.png";

const Header = () => {
  return (
    <div>
      <div className="bg-base-100 shadow p-2">
        <div className="flex justify-between ">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-4/3 ml-20"
            />
          </div>
          <div className="flex justify-center align-center">
            <div className="my-3 mx-3 ">
              <img src={calendar} alt="" />
            </div>
            <div className="my-3 mx-3">
              <img src={notification} alt="" />
            </div>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
