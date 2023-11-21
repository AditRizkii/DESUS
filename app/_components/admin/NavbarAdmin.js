"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOut from "../auth/sign-out";

const NavbarAdmin = () => {
  const path = usePathname();
  const regadmin = new RegExp("/admin/user/([0-9]*)$");
  const reggejala = new RegExp("/admin/gejala/([0-9]*)$");
  const regjenisgejala = new RegExp("/admin/jenisgejala/([0-9]*)$");
  const regdiagnosa = new RegExp("/admin/diagnosa/([0-9]*)$");
  const reghasil = new RegExp("/admin/hasil/([0-9]*)$");

  const breadcrumb = (path) => {
    if (path === "/admin") {
      return "Admin";
    } else if (
      path === "/admin/user" ||
      path === "/admin/user/create" ||
      regadmin.test(path)
    ) {
      return "User";
    } else if (
      path === "/admin/gejala" ||
      path === "/admin/gejala/create" ||
      reggejala.test(path)
    ) {
      return "Gejala";
    } else if (
      path === "/admin/diagnosa" ||
      path === "/admin/diagnosa/create" ||
      regdiagnosa.test(path)
    ) {
      return "Diagnosa";
    } else if (
      path === "/admin/hasil" ||
      path === "/admin/hasil/create" ||
      reghasil.test(path)
    ) {
      return "Hasil";
    } else if (
      path === "/admin/jenisgejala" ||
      path === "/admin/jenisgejala/create" ||
      regjenisgejala.test(path)
    ) {
      return "Jenis Gejala";
    } else {
      return "";
    }
  };
  return (
    <nav
      className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
      //   navbar-main
      navbar-scroll="false"
    >
      {/* <!-- Navbar --> */}
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          {/* <!-- breadcrumb --> */}
          <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="text-sm leading-normal">
              <Link className="text-black opacity-50" href="/admin">
                Admin
              </Link>
            </li>
            <li
              className="text-sm pl-2 capitalize leading-normal text-black before:float-left before:pr-2 before:text-black before:content-['/']"
              aria-current="page"
            >
              {breadcrumb(path)}
            </li>
          </ol>
          <h6 className="mb-0 font-bold text-black capitalize">
            {breadcrumb(path)}
          </h6>
        </nav>

        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <div className="flex items-center md:ml-auto md:pr-4"></div>
          <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            {/* <!-- online builder btn  --> */}
            {/* <!-- <li className="flex items-center">
          <a className="inline-block px-8 py-2 mb-0 mr-4 text-xs font-bold text-center text-blue-500 uppercase align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer leading-pro hover:-translate-y-px active:shadow-xs hover:border-blue-500 active:bg-blue-500 active:hover:text-blue-500 hover:text-blue-500 tracking-tight-rem hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-black active:hover:bg-transparent" target="_blank" href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053">Online Builder</a>
        </li> --> */}
            <li className="flex items-center">
              <div className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand">
                <SignOut />
              </div>
            </li>
            <li className="flex items-center pl-4 xl:hidden">
              <Link
                href="#"
                className="block p-0 text-sm transition-all ease-nav-brand"
              >
                <div className="w-4.5 overflow-hidden">
                  <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                  <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                  <i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
