import Image from "next/image";
import Link from "next/link";

import React from "react";
import TypeWriter from "./_components/TypeWriter";
import { heroImg } from "./_assets/img";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="w-full h-screen flex flex-row justify-center items-center bg-merahtua font-Poppins"
      >
        <div className="w-full lg:w-1/2 lg:h-full flex justify-center items-center">
          <div className="w-10/12 ml-8">
            <h1 className=" text-4xl font-semibold">
              <TypeWriter text="Welcome To Desus" delay={100} />
            </h1>
            <h2>
              <TypeWriter
                text="Sistem Pakar Diagnosa Tingkat Depresi Mahasiswa Tingkat Akhir"
                delay={50}
              />
            </h2>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/quiz"
                className="text-white font-semibold bg-biru scrollto rounded-full px-8 py-2 hover:text-blue-950 transition duration-300 hover:duration-500 ease-in-out"
              >
                Cek Tingkat Depresimu Sekarang
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full sm:hidden lg:flex items-center justify-center">
          <Image src={heroImg} className="animated w-10/12" alt="" />
        </div>
      </section>

      <section id="about" className="about bg-slate-100 w-full pt-28">
        <div
          className="flex-row justify-center bg-white"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="w-10/12 mx-auto pb-16">
            <div className="text-center font-Poppins text-4xl font-bold text-merahtua pt-16 pb-12">
              <h2 className="">
                ABOUT US
                <div className="mx-auto w-1/12">
                  <div className="border-b-[1px] border-slate-300 pb-6"></div>
                  <div className="border-b-[3px] border-biru w-1/3 mx-auto -m-[2px]"></div>
                </div>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-0 lg:gap-12 mt-4 text-justify font-Poppins">
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  DESUS adalah situs yang membantu mahasiswa akhir mengukur
                  tingkat depresi mereka dengan mengisi formulir pernyataan.
                  Kami percaya bahwa mengetahui tingkat depresi Anda adalah
                  langkah pertama dalam menemukan solusi dan menangani masalah
                  ini. Selain itu, kami juga menyediakan informasi dan sumber
                  daya yang berguna untuk membantu Anda dalam mengelola depresi
                  Anda
                </p>
                <p className="flex text-gray-700">
                  "Ingatlah bahwa DESUS bukanlah pengganti layanan
                  profesional, jadi pastikan untuk selalu mencari bantuan
                  medis yang tepat jika Anda mengalami gejala depresi"
                </p>
              </div>
              <div className="col-lg-6 pt-4 lg:pt-0 pb-16">
                <p className="mb-6 text-gray-700">
                  Kami membuat DESUS sebagai proyek untuk membantu teman-teman
                  yang mungkin mengalami depresi untuk mengetahui tingkat
                  depresi dan menemukan solusi sesuai.
                </p>
                <Link href="#reference" className="flex justify-center pt-4 lg:pt-0">
                  <button className="border-biru border-2 px-8 py-2 rounded-md hover:bg-biru hover:text-slate-200 font-Poppins text-biru font-medium tracking-wider text-sm transition duration-300 hover:duration-500  ease-in-out">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq bg-slate-100">
        <div
          className="flex-row justify-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="w-10/12 mx-auto pb-16">
            <div className="text-center font-Poppins text-4xl font-bold text-merahtua pt-16 pb-12">
              <h2 className="">
                FREQUENTLY ASK QUESTIONS
                <div className="mx-auto w-1/12">
                  <div className="border-b-[1px] border-slate-300 pb-6"></div>
                  <div className="border-b-[3px] border-biru w-1/3 mx-auto -m-[2px]"></div>
                </div>
              </h2>
            </div>
            <div className="w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl rounded-md sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        {/* <AiOutlineQuestionCircle className="text-biru" /> */}
                        <span className=""> Apa itu DESUS ?</span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      DESUS adalah sebuah situs yang membantu mahasiswa akhir
                      mengukur tingkat depresi mereka dengan mengisi formulir
                      pertanyaan. Kami menyediakan solusi sesuai setelah
                      mahasiswa mengisi formulir tersebut.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div className="w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl rounded-md sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        {/* <AiOutlineQuestionCircle className="text-biru" /> */}
                        <span className="">
                          {" "}
                          Siapa yang bisa mengakses DESUS ?
                        </span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      DESUS ditujukan untuk mahasiswa akhir, namun siapa saja
                      dapat mengakses situs ini dan mengisi formulir untuk
                      mengetahui tingkat depresi mereka.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div className="w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        {/* <AiOutlineQuestionCircle className="text-biru" /> */}
                        <span className="">
                          {" "}
                          Apakah hasil dari DESUS dapat diandalkan ?
                        </span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      Hasil dari DESUS adalah sebuah estimasi dari tingkat
                      depresi seseorang, dan tidak bisa dianggap sebagai
                      diagnosis yang pasti. Kami sangat menyarankan agar
                      seseorang yang merasa memiliki tingkat depresi yang tinggi
                      untuk segera meminta bantuan profesional.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div className="w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl rounded-md sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        {/* <AiOutlineQuestionCircle className="text-biru" /> */}
                        <span className="">
                          {" "}
                          Bagaimana cara mengakses solusi yang ditawarkan DESUS
                          ?
                        </span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      Setelah mengisi formulir, mahasiswa akan menerima
                      rekomendasi solusi sesuai dengan tingkat depresi yang
                      terdeteksi. Kami juga menyediakan tautan ke sumber
                      informasi dan bantuan profesional yang dapat membantu
                      mahasiswa mengatasi depresi mereka.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reference" className="reference bg-krim w-full pt-20 pb-20">
        <div
          className="flex-row justify-center bg-white w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 mx-auto rounded-lg shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="w-10/12 mx-auto pb-16">
            <div className="text-center font-Poppins text-4xl font-bold text-merahtua pt-16 pb-12">
              <h2 className="">
                REFERENCE
                <div className="mx-auto w-1/12">
                  <div className="border-b-[1px] border-slate-300 pb-6"></div>
                  <div className="border-b-[3px] border-biru w-1/3 mx-auto -m-[2px]"></div>
                </div>
              </h2>
            </div>
            <div className="mt-4 text-center font-Poppins">
              <div className="mb-4 text-gray-700">
                <ul className="">
                  <li className="mb-2 text-lg">
                    <Link className="hover:text-biru" href={"https://id.scribd.com/document/367661361/Arhatya-Marsasina-22010112120008-Lap-kti-Bab2"} target="_blank">Referensi Basis Pengetahuan</Link>
                  </li>
                  <li className="mb-2 text-lg">
                    <Link className="hover:text-biru" href={"https://tailwindcss.com/"} target="_blank">Referensi CSS</Link>
                  </li>
                  <li className="mb-2 text-lg">
                    <Link className="hover:text-biru" href={"https://icons8.com/"} target="_blank">Referensi Icon</Link>
                  </li>
                  <li className="mb-2 text-lg">
                    <Link className="hover:text-biru" href={"https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/"} target="_blank">Referensi Template</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}