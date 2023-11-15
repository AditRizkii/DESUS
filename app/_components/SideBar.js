"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const active = "bg-blue-500/13 rounded-lg font-semibold text-slate-700";
  const path = usePathname();
  return (
    <aside
      className="fixed font-Poppins inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-xs max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
      aria-expanded="false"
    >
      <div className="h-19">
        {/* <i
          className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times  text-slate-400 xl:hidden"
          sidenav-close
        ></i> */}
        <Link
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap  text-slate-700"
          href="/admin"
        >
          <img
            src="/logo.png"
            className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
            alt="main_logo"
          />
          <img
            src="/logo.png"
            className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
            alt="main_logo"
          />
          <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
            Admin Dashboard
          </span>
        </Link>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <li className="mt-0.5 w-full">
            <Link
              className={`${
                path === "/admin" ? active : ""
              } py-2.7 dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
              href="/admin"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                {/* <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i> */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/external-dashboard-ui-essential-kmg-design-flat-kmg-design.png"
                  alt="external-dashboard-ui-essential-kmg-design-flat-kmg-design"
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Dashboard
              </span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link
              className={`${
                path === "/admin/user" ? active : ""
              } dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
              href="/admin/user"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58"></i> */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/office/30/person-male-skin-type-4.png"
                  alt="person-male-skin-type-4"
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                User
              </span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link
              className={`${
                path === "/admin/gejala" ? active : ""
              } dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
              href="/admin/gejala"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                {/* <i className="relative top-0 text-sm leading-normal text-emerald-500 ni ni-credit-card"></i> */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-depression-mental-health-flaticons-flat-flat-icons-2.png"
                  alt="external-depression-mental-health-flaticons-flat-flat-icons-2"
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Gejala
              </span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link
              className={`${
                path === "/admin/diagnosa" ? active : ""
              } dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
              href="/admin/diagnosa"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                {/* <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-app"></i> */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/unknown-results.png"
                  alt="unknown-results"
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Diagnosa
              </span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link
              className={`${
                path === "/admin/hasil" ? active : ""
              } dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
              href="/admin/hasil"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                {/* <i className="relative top-0 text-sm leading-normal text-red-600 ni ni-world-2"></i> */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/test-passed.png"
                  alt="test-passed"
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Hasil
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
