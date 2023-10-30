"use client";
import React, { useState } from "react";
import Choice from "../_components/Quiz/Choice";
import { questions } from "../_constants/question";
import Modal from "../_components/Quiz/Modal";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [result, setResult] = useState("");
  const [solusi, setSolusi] = useState("");

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const arr = Object.entries(data);
    let gjl_utama = 0;
    let gjl_lain = 0;
    let ya = 0;
    let tidak = 0;
    let depresi_ringan = 0;
    let depresi_sedang = 0;
    let depresi_berat = 0;

    arr.map((e, i) => {
      if (e[1] == "tidakpernah") {
        tp++;
      } else if (e[1] == "jarang") {
        j++;
      } else if (e[1] == "sering") {
        sr++;
      } else if (e[1] == "selalu") {
        sl++;
      }
    });

    if (tp == 10) {
      setResult("Tidak Depresi");
      setSolusi("Tetap jaga kesehatan mental Anda.");
      setIsOpen(true);
    } else if ((sl >= 5 || sr >= 5) && j <= 5 && tp <= 2) {
      setResult("Depresi Berat");
      setSolusi(
        "Kami sarankan Anda segera konsultasi dengan ahli kesehatan mental."
      );
      setIsOpen(true);
    } else if (tp >= 5 && j <= 5 && sr <= 2 && sl <= 2) {
      setResult("Depresi Ringan");
      setSolusi("Coba lakukan relaksasi dan aktivitas yang Anda sukai.");
      setIsOpen(true);
    } else if (
      (j >= 2 && j <= 10) ||
      (tp >= 2 && tp < 5) ||
      (sr >= 2 && sr < 5) ||
      (sl >= 2 && sl < 5) ||
      (tp == 5 && sr == 5)
    ) {
      setResult("Depresi Menengah");
      setSolusi("Pertimbangkan untuk berbicara dengan konselor atau terapis.");
      setIsOpen(true);
    } else {
      setResult("Depresi");
      setSolusi("Mendekatkan diri kepada yang maha kuasa.");
      setIsOpen(true);
    }
  };

  return (
    <section className="bg-merahtua">
      <div className="lg:p-16 mx-auto md:w-5/6 sm:w-11/12 lg:w-8/12 sm:p-0 sm:pt-20 flex flex-col gap-5">
        <form
          onSubmit={submit}
          className="bg-krim lg:p-6 lg:px-20 sm:p-3 rounded-xl shadow-md"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="font-bold font-Poppins text-4xl text-center mb-8 mt-2 text-merahtua">
            Diagnosa Depresi
          </h1>
          <div className="">
            {questions.map((e) => {
              return (
                <div className="w-11/12 mx-auto mt-12 text-lg">
                  <Choice
                    key={e.name}
                    question={e.question}
                    name={e.name}
                    onChange={updateData}
                  />
                </div>
              );
            })}
            <div className="w-full flex justify-center mt-12">
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-merah to-merahtua hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-merah font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 w-1/4"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {isOpen && (
          <Modal setIsOpen={setIsOpen} result={result} solusi={solusi} />
        )}
      </div>
    </section>
  );
};

export default page;
