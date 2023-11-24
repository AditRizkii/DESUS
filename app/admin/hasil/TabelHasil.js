import getHasil from "@/app/api/hasil/get-hasil";
import Link from "next/link";
import React from "react";

const TabelHasil = async () => {
  const hasil = await getHasil();
  const arr = Object.values(hasil);
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 pb-3 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Hasil{" "}
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Diagnosa
          </th>
          <th scope="col" className="px-6 py-3">
            Gejala
          </th>
          <th scope="col" className="px-6 py-3">
            Tingkat
          </th>
          {/* <th scope="col" className="pr-5">
            <div className="flex justify-end mr-6">Actions</div>
          </th> */}
        </tr>
      </thead>
      <tbody>
        {arr.length > 0 ? (
          arr.map((e, i) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={i}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                >
                  {e?.diagnosa_id === 1
                    ? `Terindikasi depresi ringan ${e?.percentage}%`
                    : e?.diagnosa_id === 2
                    ? `Terindikasi depresi sedang ${e?.percentage}%`
                    : e?.diagnosa_id === 1
                    ? `Terindikasi depresi berat ${e?.percentage}%`
                    : e?.percentage}
                </th>
                <td className="px-6 py-4">
                  {e?.gejala_id === 1
                    ? "Memenuhi Gejala Ringan"
                    : e?.gejala_id === 2
                    ? "Memenuhi Gejala Sedang"
                    : e?.gejala_id === 3
                    ? "Memenuhi Gejala Berat"
                    : "Tidak Memenuhi Gejala Apapun"}
                </td>
                <td className="px-6 py-4">
                  {e?.tingkat_id === 1
                    ? "Gejala Ringan"
                    : e?.tingkat_id === 2
                    ? "Gejala Sedang"
                    : e?.tingkat_id === 3
                    ? "Gejala Berat"
                    : "Tidak Ada"}
                </td>
                {/* <td className=" py-4 text-right">
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
                        className="bg-red-800 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:text-red-300"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td> */}
              </tr>
            );
          })
        ) : (
          <tr className="text-center w-full">No data</tr>
        )}
      </tbody>
    </table>
  );
};

export default TabelHasil;
