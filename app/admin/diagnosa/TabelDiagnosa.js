import React from "react";
import Link from "next/link";
import getDiagnosa from "@/app/api/diagnosa/get-diagnosa";

const TabelDiagnosa = async () => {
  const diagnosa = await getDiagnosa();
  const arr = Object.values(diagnosa);
  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption class="p-5 pb-3 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Diagnosa{" "}
      </caption>
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Diagnosa
          </th>
          <th scope="col" class="pr-5">
            <div class="flex justify-end mr-6">Actions</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {arr.length > 0 ? (
          arr.map((e, i) => {
            return (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={i}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                >
                  {e?.nama}
                </th>
                <td class=" py-4 text-right">
                  <div class="mx-2">
                    <Link
                      href="#"
                      class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >
                      Edit
                    </Link>
                    |
                    <form
                      method="POST"
                      class="inline-block"
                      action="#"
                      // onsubmit="return confirm('Apakah Anda Yakin?')"
                    >
                      <button
                        type="submit"
                        class="bg-red-800 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:text-red-300"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr className="text-right">No data</tr>
        )}
      </tbody>
    </table>
  );
};

export default TabelDiagnosa;
