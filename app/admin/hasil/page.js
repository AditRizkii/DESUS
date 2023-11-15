import getHasil from "@/app/api/hasil/get-hasil";
import Link from "next/link";
import React from "react";

const page = async () => {
  const hasil = await getHasil();
  const arr = Object.values(hasil);

  return (
    <div class="w-full px-6 py-6 mx-auto">
      <div class="flex flex-wrap gap-5 -mx-3 w-full">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Hasil{" "}
              <Link
                href="#"
                class="mt-1 mx-2 px-2 py-2 mb-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                Create
              </Link>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Diagnosa
                </th>
                <th scope="col" class="px-6 py-3">
                  Gejala
                </th>
                <th scope="col" class="px-6 py-3">
                  Tingkat
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
                        {e?.diagnosa_id}
                      </th>
                      <td class="px-6 py-4">{e?.gejala_id}</td>
                      <td class="px-6 py-4">{e?.tingkat_id}</td>
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
                <tr className="text-center w-full">No data</tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
