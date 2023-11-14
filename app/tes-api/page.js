// "use client";
import React from "react";
import getGejala from "../api/gejala/get-gejala";

const page = async () => {
  const gejala = await getGejala();
  // const result = await fetch("/api/gejala/get-gejala");
  // const data = result.json();
  // console.log(data);
  // console.log(JSON.stringify(gejala));
  // const result = gejala;
  const arr = Object.values(gejala);
  // console.log(arr);
  return (
    <div>
      {/* {arr.map((e, i) => {
        return <p key={i}>{e}</p>;
      })} */}
      {arr.map((e, i) => {
        return <p key={i}>{e?.nama}</p>;
      })}
    </div>
  );
};

export default page;
