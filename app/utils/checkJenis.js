import { useState } from "react";

const BASE_URL = "http://localhost:3000";

export const isUtama = async (jenisId) => {
  const [fetchData, setFetchData] = useState([]);
  const [result, setResult] = useState(false);
  const response = await fetch(
    `${BASE_URL}/api/JenisGejala/single?id=${jenisId}`
  )
    .then((jenisgejala) => setFetchData(jenisgejala.json()))
    .then(() => () => {
      if (fetchData?.jenisgejala !== null && fetchData?.jenisgejala?.id === 1) {
        setResult(true);
      } else {
        setResult(false);
      }
    });

  //   const hasil = await result;
  console.log(result);
  //   return hasil;
};
