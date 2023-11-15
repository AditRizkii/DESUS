import React from "react";
import Quiz from "./Quiz";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import getGejala from "../api/gejala/get-gejala";

const page = async () => {
  const gejala = await getGejala();
  // const arr = Object.values(gejala);

  return (
    <div>
      <Navbar />
      <Quiz questions={gejala} />
      <Footer />
    </div>
  );
};

export default page;
