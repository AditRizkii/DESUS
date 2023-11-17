"use client";
import { fetchSingleGejala } from "@/app/utils/getSingleGejala";
import React, { useEffect, useState } from "react";

// const staticData = async (gejala_id) => {
//   const response = await fetch(
//     `http://localhost:3000/api/gejala/single?id=${gejala_id}`
//   );
//   return response;
// };

const EditForm = ({ handleSubmit, updateData, gejalaId }) => {
  const [staticdata, setStaticData] = useState([]);

  useEffect(() => {
    fetchSingleGejala(`/api/gejala/single?id=${gejalaId}`).then((data) => {
      setStaticData(data);
    });
  }, [gejalaId]);

  //   console.log(staticdata?.gejala);
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
            defaultValue={staticdata?.gejala?.nama}
            placeholder="New admin name"
            onChange={updateData}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="jenisGejalaID"
          >
            Jenis Gejala
          </label>
        </div>
        <div className="md:w-2/3">
          {/* <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="password"
                    name="password"
                    type="sele"
                    placeholder="enter your password"
                    onChange={updateData}
                  /> */}
          <select
            name="jenisGejalaID"
            id="jenisGejalaID"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="0" disabled>
              Pilih Gejala
            </option>
            <option value="1">Gejala Utama</option>
            <option value="2">Gejala Lainnya</option>
          </select>
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
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
