"use client";
import { fetchSingleGejala } from "@/app/utils/getSingleGejala";
import React, { useEffect, useState } from "react";

const EditForm = ({ handleSubmit, updateData, gejalaId }) => {
  const [staticdata, setStaticData] = useState([]);

  useEffect(() => {
    fetchSingleGejala(`api/JenisGejala/single?id=${gejalaId}`).then((data) => {
      setStaticData(data);
    });
  }, [gejalaId]);

  // console.log(staticdata);
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-4">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="nama"
          >
            Jenis Gejala
          </label>
        </div>
        <div className="w-2/3">
          <input
            className="bg-gray-100 text-start appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="nama"
            name="nama"
            type="text"
            defaultValue={staticdata?.jenisgejala?.nama}
            placeholder="New Jenis Gejala name"
            onChange={updateData}
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-2/3 ml-[150px]">
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
