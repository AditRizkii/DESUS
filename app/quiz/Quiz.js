"use client";
import React, { useState, useEffect } from "react";
import Choice from "../_components/Quiz/Choice";
import { questions } from "../_constants/question";
import Modal from "../_components/Quiz/Modal";
import prisma from "@/lib/prisma";
import getGejala from "../api/gejala/get-gejala";
import { diagnose } from "../utils/Diagnose";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const Quiz = ({ questions }) => {
  const [data, setData] = useState({});
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // const questions = await fetch("/api/gejala/get-gejala");
  // const gejala = await getGejala();
  const arr = Object.values(questions);

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const hasil = diagnose(data);
    // const hasil = diagnose(data).then((value) => {
    //   setResult(value);
    // });

    console.log(hasil);
    if (
      hasil?.id === "1" ||
      hasil?.id === "2" ||
      hasil?.id === "3" ||
      hasil?.id === "8"
    ) {
      await fetch(`/api/hasil/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          percentage: hasil?.percentage,
          diagnosa_id: hasil?.id,
          gejala_id: hasil?.id,
          tingkat_id: hasil?.id,
        }),
      });
      router.push(`/quiz/${hasil?.id}?percentage=${hasil?.percentage}`);
    }
    // const arr = data;
    // console.log(arr);
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
            {arr.map((e, i) => {
              return (
                // <p key={i}>{e?.nama}</p>
                <div className="w-11/12 mx-auto mt-12 text-lg" key={e?.id}>
                  <Choice
                    question={e?.nama}
                    ChoiceId={e?.id}
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
      </div>
    </section>
  );
};

export default Quiz;
