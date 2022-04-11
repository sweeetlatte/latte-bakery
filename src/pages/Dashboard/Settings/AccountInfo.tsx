import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../../app/api";

import Icons from "../../../components/Icons";
import Loader from "../../../components/Loader";

import { IUserData } from "./types";

export default function AccountInfo() {
  const [userData, setUserData] = useState<IUserData>();
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const responseData = await fetchUserData();

      if (responseData) {
        console.log(responseData);
        setUserData(responseData[0]);
      }
    })();
  }, []);

  return (
    userData ? (
      <>
        <div className="font-bold text-lg">Account information</div>
        <form className="settings-form pt-14">
          <label className="flex items-center mb-4" htmlFor="uname">
            <span className="w-[176px]">Name</span>
            <input
              className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
              type="text"
              id="uname"
              name="uname"
              value={userData.name}
            />
          </label>
          <label className="flex items-center mb-4" htmlFor="phone">
            <span className="w-[176px]">Phone number</span>
            <input
              className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
              type="text"
              id="phone"
              name="phone"
            />
          </label>
          <label className="flex items-center mb-4" htmlFor="email">
            <span className="w-[176px]">Email</span>
            <input
              className="w-full bg-dark-bg py-3.5 px-3 border border-primary rounded-lg focus:outline-none"
              type="email"
              id="email"
              name="email"
            />
          </label>
          <label className="flex items-center mb-4" htmlFor="uname">
            <span className="w-[176px]">Date of birth</span>
            <div className="w-full flex justify-between space-x-8">
              <div className="border w-full border-primary rounded-lg py-3.5 px-3.5">
                <div className="flex justify-between items-center">
                  <div>27</div>
                  <Icons.BiggerChevronDown stroke="white" />
                </div>
              </div>
              <div className="border w-full border-primary rounded-lg py-3.5 px-3.5">
                <div className="flex justify-between items-center">
                  <div>October</div>
                  <Icons.BiggerChevronDown stroke="white" />
                </div>
              </div>
              <div className="border w-full border-primary rounded-lg py-3.5 px-3.5">
                <div className="flex justify-between items-center">
                  <div>2000</div>
                  <Icons.BiggerChevronDown stroke="white" />
                </div>
              </div>
            </div>
          </label>
          <label className="flex items-center mb-4" htmlFor="uname">
            <span className="w-[176px]">Gender</span>
            <div className="setting-custom-radio flex w-full text-base space-x-9">
              <label className="setting-container">
                Male
                <input type="radio" name="radio" />
                <span className="setting-checkmark"></span>
              </label>
              <label className="setting-container">
                Female
                <input type="radio" name="radio" />
                <span className="setting-checkmark"></span>
              </label>
              <label className="setting-container">
                Other
                <input type="radio" name="radio" />
                <span className="setting-checkmark"></span>
              </label>
            </div>
          </label>
        </form>
        <button className="border w-full border-primary bg-primary px-5 py-2.5 mt-14 rounded-md">
          Edit account information
        </button>
      </>
    ) : <Loader />
  );
}
