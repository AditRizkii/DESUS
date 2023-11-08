import React from "react";
import Quiz from "./Quiz";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Quiz />
      <Footer />
    </div>
  );
};

export default page;
