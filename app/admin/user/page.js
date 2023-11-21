import getUser from "@/app/api/user/getUser";
import Link from "next/link";
import Button from "./Button";

export default async function Home() {
  const users = await getUser();
  const arr = Object.values(users);
  return (
    <>
      <div class="w-full px-6 py-6 mx-auto">
        {/* <!-- row 1 --> */}
        <div class="flex flex-wrap -mx-3 w-full">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Admin{" "}
                <Link
                  href="/admin/user/create"
                  class="mt-1 mx-2 px-2 py-2 mb-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  Create
                </Link>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" class="px-6 py-3 text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {arr.length > 0 ? (
                  arr.map((e, i) => {
                    return (
                      <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={i}
                      >
                        <th
                          scope="row"
                          class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div class="font-normal text-gray-500">{e?.name}</div>
                        </th>
                        <td class="px-6 py-4">{e?.email}</td>
                        <td class="px-6 py-4">{e?.role}</td>
                        <td class=" py-4 flex justify-end">
                          <div>
                            <Link
                              href={`/admin/user/${e?.id}`}
                              class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                            >
                              Edit
                            </Link>
                            <Button deleteItem={e?.id} />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
