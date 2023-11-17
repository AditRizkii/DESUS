"use client";
import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";

export default async function page() {
  const response = await fetch("http://localhost:3000/api/gejala/single?id=8");

  const data = await response.json();
  // const data1 = Object.values(data);
  console.log(data);
  return (
    <div>
      <p>{data?.gejala?.nama}</p>
    </div>
  );
}
