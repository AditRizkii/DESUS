"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const ContentDiagnose = ({ id, saran, image, diagnose }) => {
  const searchParams = useSearchParams();
  const arrSaran = JSON.parse(saran);
  const percentage = searchParams.get("percentage");

  return (
    <div className="sm:ml-10 lg:ml-24">
      <p className="text-krim text-3xl mb-6 font-semibold ">Result</p>

      <div className="w-11/12 rounded-2xl bg-[#FEFEFE] flex py-28">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-24 h-24 flex justify-center items-center rounded-full bg-[#FFEAEA] mx-auto">
            <p className="text-[#5D2510] font-semibold text-2xl">
              {percentage}%
            </p>
          </div>
          <p className="text-[#5D2510] mt-2 font-semibold text-2xl ">
            Persentase
          </p>
          <div className="text-[#5D2510] mt-6 font-regular text-md text-justify sm:mx-4 lg:mx-20">
            <h3>Saran</h3>
            <ul className="flex flex-col gap-3">
              {arrSaran.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="w-[2px] h-56 bg-slate-200 my-auto mx-4"></div>

        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className=" bg-merahtua rounded-lg px-2 pt-2 ">
            <img
              src={image}
              width={551}
              height={304}
              className="w-96 shadow-lg rounded-xl"
            />
            <h3 className="text-center font-medium text-2xl text-white py-4">
              {diagnose}
            </h3>
          </div>
          <div className="w-10/12 pr-8 text-justify py-8">
            <p className="mb-4">
              Selain perawatan medis dan terapi, penting untuk menjaga pola
              tidur yang baik, makan sehat, dan menjalani gaya hidup yang
              seimbang. Dukungan sosial juga tetap penting dalam semua tingkatan
              depresi. Tidak ada pendekatan tunggal yang cocok untuk semua
              orang, jadi penting untuk berbicara dengan seorang profesional
              kesehatan mental yang dapat membantu merancang rencana perawatan
              yang sesuai.
            </p>
            <p>
              Selain itu, terpenting adalah untuk menghilangkan stigma terkait
              dengan depresi dan mencari bantuan secepat mungkin. Konsultasikan
              dengan seorang profesional kesehatan mental yang dapat memberikan
              panduan yang paling sesuai dengan kondisi individu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDiagnose;
