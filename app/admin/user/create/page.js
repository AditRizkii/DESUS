"use client";
import React, { useState } from "react";
import LoadingDots from "@/app/_components/auth/loading-dots";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import createUser from "@/app/api/user/createUser";
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

    // await createUser(arr);

    // const a = arr[0][1];
    // console.log(arr[1][1]);
    // console.log(arr[2][1]);

    // const nama = e.currentTarget.value;
    // const data = { }

    // const body = {};
    await fetch(`/api/user/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: arr[0][1],
        email: arr[2][1],
        password: arr[1][1],
      }),
    });
    // createUser(arr);

    router.push("/admin/user");
    router.refresh();
  };

  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        {/* <!-- row 1 --> */}
        <div className="flex flex-wrap -mx-3 w-full">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <h3 className="px-4 py-3">Create a new Admin Account</h3>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mb-4">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="nama"
                  >
                    Full Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="nama"
                    name="nama"
                    type="text"
                    placeholder="New admin name"
                    onChange={updateData}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="enter your password"
                    onChange={updateData}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="enter your email"
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
