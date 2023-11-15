"use client";
import SignOut from "../_components/auth/sign-out";
import SideBar from "../_components/SideBar";
import NavbarAdmin from "../_components/admin/NavbarAdmin";

import "../_assets/css/argon-dashboard-tailwind.css";
import "../_assets/css/argon-dashboard-tailwind.min.css";
import "../_assets/css/nucleo-svg.css";
// import "../_assets/css/perfect-scrollbar.css";
// import "../_assets/css/tooltips.css";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";

export default function layout({ children, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <SideBar />
        <main class="relative h-full font-Poppins max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          {/* <!-- Navbar --> */}
          <NavbarAdmin />
          {/* <!-- cards --> */}
          <div class="w-full px-6 py-6 mx-auto">
            {/* <!-- row 1 --> */}
            {children}
            <footer class="pt-4">
              <div class="w-full px-6 mx-auto">
                <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
                      ©
                      {/* <script>
                      document.write(new Date().getFullYear() + ",");
                    </script> */}
                      made with <i class="fa fa-heart"></i> by{" "}
                      <Link
                        href="#"
                        class="font-semibold text-slate-700 dark:text-white"
                        target="_blank"
                      >
                        Desus
                      </Link>{" "}
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                    <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                      <li class="nav-item">
                        <Link
                          href="/"
                          class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        >
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          href="/quiz"
                          class="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Diagnosa
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* <!-- end cards --> */}
        </main>
        {/* <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-screen-lg aspect-video"
        ></iframe>
        <SignOut />
      </div> */}
      </SessionProvider>
    </>
  );
}
