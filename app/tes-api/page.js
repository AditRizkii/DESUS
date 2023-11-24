"use client";
import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { isUtama } from "../utils/checkJenis";
import { useState } from "react";
import { diagnose } from "../utils/Diagnose";

export default function page() {
  const [utama, setUtama] = useState(false);

  // diagnose;
  // const response = isUtama(1).then((value) => {
  //   setUtama(value);
  // });
  // const response = isUtama(1);
  // const data1 = Object.values(data);

  // console.log(response);
  // const str = response;

  return <div>{/* <p>{utama ? "benar" : "salah"}</p> */}</div>;
}
