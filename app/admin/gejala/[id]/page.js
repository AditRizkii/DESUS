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

    await fetch(`/api/gejala/edit?id=${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gejalaId: id,
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
            <h3 className="px-4 py-3">Edit Gejala</h3>
            <EditForm
              handleSubmit={handleSubmit}
              updateData={updateData}
              gejalaId={id}
            />
          </div>
        </div>
      </div>
    </>
  );
}
