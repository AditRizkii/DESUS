import getHasil from "@/app/api/hasil/get-hasil";
import React from "react";
import TabelHasil from "./TabelHasil";

const page = async () => {
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap gap-5 -mx-3 w-full">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <TabelHasil />
        </div>
      </div>
    </div>
  );
};

export default page;
