"use client";
import React from "react";

// const handleClick = ;

const Button = ({ deleteItem }) => {
  const deletePost = async (gejalaID) => {
    try {
      // setLoading(true);
      await fetch("/api/gejala/delete?id=" + gejalaID, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      // setLoading(false);
      await router.push("/admin/gejala");
    } catch (error) {
      console.log("error", error);
      // setLoading(false);
    }
  };
  return (
    <button
      type="submit"
      class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
      onClick={() => {
        deletePost(deleteItem);
      }}
    >
      {/* {loading ? "Loading" : "Delete"} */}
      Delete
    </button>
  );
};

export default Button;
