"use client";
import React, { useState } from "react";
import LoadingDots from "@/app/_components/auth/loading-dots";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import EditForm from "./form";
// import createUser from "@/app/api/user/createUser";
// import createUser from "@/app/api/user/createUser";

export default function page({ params }) {
  //   const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState(null);
  const id = params.id;

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
    console.log(arr);

    // console.log(dataUpdate);
    // arr.map((e) => console.log(e));
    // console.log(arr === undefined ? "semua" : "engga");
    // console.log(role.value);
    await fetch("/api/user/edit", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: id,
        name: nama.value,
        email: email.value,
        password: password.value,
        role: role.value,
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
            <h3 className="px-4 py-3">Edit User Gejala</h3>
            <EditForm
              handleSubmit={handleSubmit}
              updateData={updateData}
              userID={id}
            />
          </div>
        </div>
      </div>
    </>
  );
}
