"use client";
import React, { useState } from "react";
import LoadingDots from "@/app/_components/auth/loading-dots";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import createUser from "@/app/api/user/createUser";
// import createUser from "@/app/api/user/createUser";

export default function Modal() {
  //   const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState(null);

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // send a request to the server.
    const arr = Object.entries(data);
    // console.log(arr);
    // console.log(jenisGejalaID.value);

    // await createUser(arr);

    // const a = arr[0][1];
    // console.log(arr[1][1]);
    // console.log(arr[2][1]);

    // const nama = e.currentTarget.value;
    // const data = { }

    // const body = {};
    await fetch(`/api/gejala/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: arr[0][1],
        jenisGejalaID: jenisGejalaID.value,
      }),
    });
    // createUser(arr);

    router.push("/admin/gejala");
    router.refresh();
  };

  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        {/* <!-- row 1 --> */}
        <div className="flex flex-wrap -mx-3 w-full">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <h3 className="px-4 py-3">Create a new Gejala</h3>
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
                <div className="md:w-9/12">
                  <input
                    className="bg-gray-100 h-20 text-start appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-slate-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="nama"
                    name="nama"
                    type="text"
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
                    <option defaultValue="0" disabled selected>
                      Pilih Gejala
                    </option>
                    <option defaultValue="1">Gejala Utama</option>
                    <option defaultValue="2">Gejala Lainnya</option>
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
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
