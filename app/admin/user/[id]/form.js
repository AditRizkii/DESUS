"use client";
import { fetchSingleGejala } from "@/app/utils/getSingleGejala";
import React, { useEffect, useState } from "react";
// import { getRole } from "@/app/utils/getRole";
import { Role } from "@prisma/client";

const EditForm = ({ handleSubmit, updateData, userID }) => {
  const [staticdata, setStaticData] = useState([]);
  // const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchSingleGejala(`api/user/single?id=${userID}`).then((data) => {
      setStaticData(data);
    });
  }, [userID]);

  // if (staticdata?.user?.role === "ADMIN") {
  //   setIsAdmin(true);
  // } else {
  //   setIsAdmin(false);
  // }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-4">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="nama"
          >
            Nama
          </label>
        </div>
        <div className="w-full">
          <input
            className="bg-gray-100 text-start appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="nama"
            name="nama"
            type="text"
            defaultValue={staticdata?.user?.name}
            placeholder="New name"
            onChange={updateData}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="w-full">
          <input
            className="bg-gray-100 text-start appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            name="email"
            type="email"
            defaultValue={staticdata?.user?.email}
            placeholder="New email"
            onChange={updateData}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <div className="w-full">
          <input
            className="bg-gray-100 text-start appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            name="password"
            type="password"
            placeholder="New password"
            onChange={updateData}
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-3/12">
          <label
            className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="role"
          >
            Jenis Gejala
          </label>
        </div>
        <div className="md:w-2/3">
          {/* <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="password"
                    name="password"
                    type="sele"
                    placeholder="enter your password"
                    onChange={updateData}
                  /> */}
          <select
            name="role"
            id="role"
            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="0" disabled>
              Pilih Role
            </option>
            {staticdata?.user?.role === "ADMIN" ? (
              <option value={Role.ADMIN} selected>
                {Role.ADMIN}
              </option>
            ) : (
              <option value={Role.ADMIN}>{Role.ADMIN}</option>
            )}
            {staticdata?.user?.role === "ADMIN" ? (
              <option value={Role.GUEST}>{Role.GUEST}</option>
            ) : (
              <option value={Role.GUEST} selected>
                {Role.GUEST}
              </option>
            )}
          </select>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="ml-[170px]">
          <button
            className={
              "shadow border-merah border-2 hover:bg-merah focus:shadow-outline focus:outline-none py-2 px-6 rounded font-semibold text-merahtua hover:text-white"
            }
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
