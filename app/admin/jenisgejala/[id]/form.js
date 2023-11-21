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
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-4">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="nama"
          >
            Gejala
          </label>
        </div>
        <div className="w-full">
          <input
            className="bg-gray-200 h-20 text-start appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className={
              "shadow bg-purple-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none py-2 px-4 rounded"
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
