import React from "react";
import getJenisGejala from "@/app/api/JenisGejala/getJenisGejala";
import Link from "next/link";

const TabelJenisGejala = async () => {
  const jenisGejala = await getJenisGejala();
  const arrJenisGejala = Object.values(jenisGejala);
  // const arrJenisGejala = await jenisGejala.json();
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Jenis Gejala{" "}
        <Link
          href="#"
          className="mt-1 mx-2 px-2 py-2 mb-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 rounded dark:bg-blue-900 dark:text-blue-300"
        >
          Create
        </Link>
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nama
          </th>
          <th scope="col" className="pr-5">
            <div className="flex justify-end mr-6">Actions</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {arrJenisGejala.length > 0 ? (
          arrJenisGejala.map((e, i) => {
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={i}
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
              >
                {e?.nama}
              </td>
              <td className=" py-4 text-right">
                <div className="mx-2">
                  <Link
                    href="#"
                    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >
                    Edit
                  </Link>
                  |
                  <form
                    method="POST"
                    className="inline-block"
                    action="#"
                    // onsubmit="return confirm('Apakah Anda Yakin?')"
                  >
                    <button
                      type="submit"
                      className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>;
          })
        ) : (
          <tr></tr>
        )}
      </tbody>
    </table>
  );
};

export default TabelJenisGejala;
