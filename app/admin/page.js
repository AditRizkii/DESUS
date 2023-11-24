import moment from "moment";

async function getData() {
  const res = await fetch("http://localhost:3000/api/dashboard");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCountCategories(id) {
  const res = await fetch(`http://localhost:3000/api/dashboard/count?id=${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const image1 = "https://img.icons8.com/arcade/100/high-importance.png";
  const image2 = "https://img.icons8.com/arcade/64/plus.png";
  const image3 = "https://img.icons8.com/arcade/64/stopwatch.png";
  const image4 = "https://img.icons8.com/arcade/32/group-task.png";
  // const dateTimeAgo = ;
  // console.log(data);
  return (
    <>
      <div className="flex flex-wrap -mx-3">
        {/* <!-- card1 --> */}
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 text-sm font-Poppins dark:text-white dark:opacity-60">
                      USER
                    </p>
                    <h5 className="mb-2 font-bold dark:text-white">
                      {data?.user}
                    </h5>
                    {/* <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">
                        +5%
                      </span>
                      since yesterday
                    </p> */}
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/arcade/100/user-male-circle.png"
                      alt="user-male-circle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card2 --> */}
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 text-sm leading-normal uppercase dark:text-white dark:opacity-60">
                      DEPRESI RENDAH
                    </p>
                    <h5 className="mb-2 font-bold dark:text-white">
                      {data?.depresiRingan}
                    </h5>
                    {/* <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">
                        +3%
                      </span>
                      since last week
                    </p> */}
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-yellow-400 to-orange-300">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/3d-fluency/100/neutral-face-1.png"
                      alt="neutral-face-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card3 --> */}
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 text-sm leading-normal uppercase dark:text-white dark:opacity-60">
                      DEPRESI SEDANG
                    </p>
                    <h5 className="mb-2 font-bold dark:text-white">
                      {data?.depresiSedang}
                    </h5>
                    {/* <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-red-600">
                        -2%
                      </span>
                      since last week
                    </p> */}
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/3d-fluency/100/frowning-face-1.png"
                      alt="frowning-face-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card4 --> */}
        <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 text-sm leading-normal uppercase dark:text-white dark:opacity-60">
                      DEPRESI TINGGI
                    </p>
                    <h5 className="mb-2 font-bold dark:text-white">
                      {data?.depresiBerat}
                    </h5>
                    {/* <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">
                        +5%
                      </span>
                      since last week
                    </p> */}
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/3d-fluency/94/fearful-face-icon.png"
                      alt="fearful-face-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- cards row 3 --> */}

      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-4">
              <div className="flex justify-between ">
                <h6 className="mb-2 dark:text-white text-center">
                  Latest Result
                </h6>
              </div>
            </div>
            <div className="overflow-x-auto p-4">
              <table className="items-center w-full mb-4 align-top table-fixed border-collapse border-gray-200 dark:border-white/40">
                <tbody>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                      <div className="flex items-center px-2 py-1">
                        <div className="ml-1">
                          <p className="mb-0 text-medium font-semibold leading-tight dark:text-white dark:opacity-60">
                            Hasil ID
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                      <div className="text-left">
                        <p className="mb-0 text-medium font-semibold leading-tight dark:text-white dark:opacity-60">
                          Persentase Depresi
                        </p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white"></h6>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                      <div className="text-left">
                        <p className="mb-0 text-medium font-semibold leading-tight dark:text-white dark:opacity-60">
                          Diagnosa
                        </p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white"></h6>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                      <div className="text-left">
                        <p className="mb-0 text-medium font-semibold leading-tight dark:text-white dark:opacity-60">
                          Waktu
                        </p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white"></h6>
                      </div>
                    </td>
                  </tr>

                  {data?.hasil.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="p-2 align-middle bg-transparent border-b w-full whitespace-nowrap dark:border-white/40">
                          <div className="flex items-center px-2 py-1">
                            <div className="ml-1">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white font-medium">
                                100{e?.id}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-left">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white font-medium">
                              {e?.percentage}%
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-left">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white font-medium">
                              {e?.diagnosa_id === 1
                                ? "Depresi Ringan"
                                : e?.diagnosa_id === 2
                                ? "Depresi Sedang"
                                : e?.diagnosa_id === 3
                                ? "Depresi Berat"
                                : "Tidak Depresi"}
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-left">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white font-medium">
                              {moment(new Date(e?.createdAt)).fromNow()}
                            </h6>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="p-4 pb-0 rounded-t-4">
              <h6 className="mb-0 dark:text-white">Categories</h6>
            </div>
            <div className="flex-auto p-4">
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                {data?.jenisGejala.map(async (e, i) => {
                  const jumlah = await getCountCategories(e?.id);
                  return (
                    <li
                      key={i}
                      className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit"
                    >
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center fill-current stroke-none rounded-xl">
                          <img
                            width="32"
                            height="32"
                            src={
                              e?.id === 1
                                ? image1
                                : e?.id === 2
                                ? image2
                                : e?.id === 6
                                ? image3
                                : e?.id === 7
                                ? image4
                                : image1
                            }
                            alt="high-importance"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                            Gejala Utama
                          </h6>
                          <span className="text-xs leading-tight dark:text-white/80">
                            {jumlah?.jumlah} questions
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i
                            className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
