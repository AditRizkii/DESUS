"use client";
import React, { useState, useEffect } from "react";
import Choice from "../_components/Quiz/Choice";
import { questions } from "../_constants/question";
import Modal from "../_components/Quiz/Modal";
import prisma from "@/lib/prisma";
import getGejala from "../api/gejala/get-gejala";
import { diagnose } from "../utils/Diagnose";
import { useRouter } from "next/navigation";

const Quiz = ({ questions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [result, setResult] = useState("");
  const [solusi, setSolusi] = useState("");
  const router = useRouter();
  // const [questions, setQuestions] = useState([]);
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

  const submit = (e) => {
    e.preventDefault();
    const result = diagnose(data);
    if (result === "1" || result === "2" || result === "3" || result === "8") {
      router.push(`/result/${result}`);
    }
    // const arr = data;
    // console.log(arr);
  };

  // useEffect(() => {
  //   getGejalasync();
  // }, []);

  // const getGejalasync = async () => {
  //   setIsLoading(true);
  //   // const objQuestions = await getGejala();
  //   // // const objQuestions =  aa;
  //   const arrquestions = Object.values(gejala);
  //   setQuestions(arrquestions);
  //   setIsLoading(false);
  // };
  // if (isLoading) {
  //   return <div className="text-center p-4 text-6xl">Loading data...</div>;
  // }
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
        {isOpen && (
          <Modal setIsOpen={setIsOpen} result={result} solusi={solusi} />
        )}
      </div>
    </section>
  );
};

export default Quiz;
