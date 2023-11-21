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
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mb-4">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-2/12">
          <label
            className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="nama"
          >
            Gejala
          </label>
        </div>
        <div className="w-9/12">
          <input
            className="bg-gray-100 h-20 text-start appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
        <div className="md:w-2/12">
          <label
            className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="jenisGejalaID"
          >
            Jenis Gejala
          </label>
        </div>
        <div className="md:w-3/12">
          {/* <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="password"
                    name="password"
                    type="sele"
                    placeholder="enter your password"
                    onChange={updateData}
                  /> */}
          <select
            name="jenisGejalaID"
            id="jenisGejalaID"
            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="0" disabled>
              Pilih Gejala
            </option>
            <option value="1">Gejala Utama</option>
            <option value="2">Gejala Lainnya</option>
          </select>
        </div>
      </div>

      <div className="md:flex md:items-center justify-start">
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
