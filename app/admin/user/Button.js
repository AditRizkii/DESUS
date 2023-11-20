"use client";
import { useRouter } from "next/navigation";
import React from "react";

// const handleClick = ;

const Button = ({ deleteItem }) => {
  const router = useRouter();
  const deletePost = async (userID) => {
    try {
      // setLoading(true);
      await fetch("/api/user/delete", {
        method: "DELETE",
        body: JSON.stringify({
          id: userID,
        }),
        headers: { "Content-Type": "application/json" },
      });

      // setLoading(false);
      router.refresh();
    } catch (error) {
      console.log("error", error);
      // setLoading(false);
    }
  };
  return (
    <button
      type="submit"
      className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
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
