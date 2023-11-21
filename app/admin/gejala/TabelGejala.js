import React from "react";
import Link from "next/link";
import getGejala from "@/app/api/gejala/get-gejala";
import Button from "./Button";

const TabelGejala = async () => {
  const gejala = await getGejala();
  const arr = Object.values(gejala);

  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Gejala{" "}
        <Link
          href="/admin/gejala/create"
          class="mt-1 mx-2 px-2 py-2 mb-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 rounded dark:bg-blue-900 dark:text-blue-300"
        >
          Create
        </Link>
      </caption>
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Nama
          </th>
          <th scope="col" class="text-center py-3">
            Jenis
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
                <td class="text-center py-4">{e?.jenisGejala_id}</td>
                <td class=" py-4 text-right">
                  <div class="mx-2">
                    <Link
                      href={`/admin/gejala/${e?.id}`}
                      class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >
                      Edit
                    </Link>
                    |
                    <Button deleteItem={e?.id} />
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr className=" text-right text-slate-600">No data</tr>
        )}
      </tbody>
    </table>
  );
};

export default TabelGejala;
