import { useState } from "react";
// import { isUtama } from "./checkJenis";
const BASE_URL = "http://localhost:3000";

export const diagnose = (data) => {
  //   console.log(data);
  //   console.log(data[1] === "false");
  const arr = Object.keys(data).length;
  //   const [result, setResult] = useState([]);
  let result = "8";
  let jml_utama = 0;
  let jml_lainnya = 0;
  let lebih2minggu = false;
  let kurang2minggu = false;
  let k_sosial = false;
  let m_sosial = false;
  let sm_sosial = false;
  let delusi = false;
  let percentageRingan = 0;
  let percentageSedang = 0;
  let percentageBerat = 0;

  //   console.log(data[21]);

  for (let i = 1; i <= 22; i++) {
    // console.log(i);
    if (i <= 3 && data[i] === "true") {
      jml_utama++;
    }
    if (i > 3 && i <= 9 && data[i] === "true") {
      jml_lainnya++;
    }
    if (i === 10 && data[17] === "true") {
      k_sosial = true;
    }
    if (i === 11 && data[18] === "true") {
      m_sosial = true;
    }
    if (i === 12 && data[19] === "true") {
      sm_sosial = true;
    }
    if (i === 13 && data[20] === "true") {
      delusi = true;
    }
    if (i === 14 && data[21] === "true") {
      lebih2minggu = true;
    }
    if (i === 15 && data[22] === "true") {
      kurang2minggu = true;
    }
  }

  //   if (jml_utama >= 2 && jml_lainnya >= 2 && lebih2minggu && k_sosial) {
  //     result = "1";
  //   }
  //   console.log(lebih2minggu);
  let sum = 0;
  if (jml_utama >= 2) {
    sum = (1 / 4) * 100;
    percentageRingan = Math.round(sum);
    if (jml_lainnya >= 2) {
      sum = (2 / 4) * 100;
      percentageRingan = Math.round(sum);
      if (k_sosial) {
        sum = (3 / 4) * 100;
        percentageRingan = Math.round(sum);
        if (lebih2minggu) {
          sum = (4 / 4) * 100;
          percentageRingan = Math.round(sum);
          // result = "1";
        }
      } else if (lebih2minggu) {
        sum = (3 / 4) * 100;
        percentageRingan = Math.round(sum);
        // result = "1";
      }
    } else if (k_sosial) {
      sum = (2 / 4) * 100;
      percentageRingan = Math.round(sum);
      if (lebih2minggu) {
        sum = (3 / 4) * 100;
        percentageRingan = Math.round(sum);
        // result = "1";
      }
    } else if (lebih2minggu) {
      sum = (2 / 4) * 100;
      percentageRingan = Math.round(sum);
      // result = "1";
    }
  } else if (jml_lainnya >= 2) {
    sum = (1 / 4) * 100;
    percentageRingan = Math.round(sum);
    if (k_sosial) {
      sum = (2 / 4) * 100;
      percentageRingan = Math.round(sum);
      if (lebih2minggu) {
        sum = (3 / 4) * 100;
        percentageRingan = Math.round(sum);
        // result = "1";
      }
    } else if (lebih2minggu) {
      sum = (2 / 4) * 100;
      percentageRingan = Math.round(sum);
      // result = "1";
    }
  } else if (k_sosial) {
    sum = (1 / 4) * 100;
    percentageRingan = Math.round(sum);
    if (lebih2minggu) {
      sum = (2 / 4) * 100;
      percentageRingan = Math.round(sum);
      // result = "1";
    }
  } else if (lebih2minggu) {
    sum = (1 / 4) * 100;
    percentageRingan = Math.round(sum);
    // result = "1";
  }

  //   if (
  //     jml_utama >= 2 &&
  //     jml_lainnya >= 3 &&
  //     jml_lainnya <= 4 &&
  //     lebih2minggu &&
  //     m_sosial
  //   ) {
  //     result = "2";
  //   }

  if (jml_utama > 2) {
    sum = (1 / 4) * 100;
    percentageSedang = Math.round(sum);
    if (jml_lainnya > 3 && jml_lainnya <= 4) {
      sum = (2 / 4) * 100;
      percentageSedang = Math.round(sum);
      if (m_sosial) {
        sum = (3 / 4) * 100;
        percentageSedang = Math.round(sum);
        if (lebih2minggu) {
          sum = (4 / 4) * 100;
          percentageSedang = Math.round(sum);
          // result = "2";
        }
      } else if (lebih2minggu) {
        sum = (3 / 4) * 100;
        percentageSedang = Math.round(sum);
        // result = "2";
      }
    } else if (m_sosial) {
      sum = (2 / 4) * 100;
      percentageSedang = Math.round(sum);
      if (lebih2minggu) {
        sum = (3 / 4) * 100;
        percentageSedang = Math.round(sum);
        // result = "2";
      }
    } else if (lebih2minggu) {
      sum = (2 / 4) * 100;
      percentageSedang = Math.round(sum);
      // result = "2";
    }
  } else if (jml_lainnya > 3 && jml_lainnya <= 4) {
    sum = (1 / 4) * 100;
    percentageSedang = Math.round(sum);
    if (m_sosial) {
      sum = (2 / 4) * 100;
      percentageSedang = Math.round(sum);
      if (lebih2minggu) {
        sum = (3 / 4) * 100;
        percentageSedang = Math.round(sum);
        // result = "2";
      }
    } else if (lebih2minggu) {
      sum = (2 / 4) * 100;
      percentageSedang = Math.round(sum);
      // result = "2";
    }
  } else if (m_sosial) {
    sum = (1 / 4) * 100;
    percentageSedang = Math.round(sum);
    if (lebih2minggu) {
      sum = (2 / 4) * 100;
      percentageSedang = Math.round(sum);
      // result = "2";
    }
  } else if (lebih2minggu) {
    sum = (1 / 4) * 100;
    percentageSedang = Math.round(sum);
    // result = "2";
  }

  //   if (jml_utama === 3 && jml_lainnya >= 4 && kurang2minggu && sm_sosial) {
  //     result = "3";
  //   }

  if (jml_utama === 3) {
    sum = (1 / 4) * 100;
    percentageBerat = Math.round(sum);
    if (jml_lainnya >= 4) {
      sum = (2 / 4) * 100;
      percentageBerat = Math.round(sum);
      if (sm_sosial) {
        sum = (3 / 4) * 100;
        percentageBerat = Math.round(sum);
        if (kurang2minggu) {
          sum = (4 / 4) * 100;
          percentageBerat = Math.round(sum);
          // result = "3";
        }
      } else if (kurang2minggu) {
        sum = (3 / 4) * 100;
        percentageBerat = Math.round(sum);
        // result = "3";
      }
    } else if (sm_sosial) {
      sum = (2 / 4) * 100;
      percentageBerat = Math.round(sum);
      if (kurang2minggu) {
        sum = (3 / 4) * 100;
        percentageBerat = Math.round(sum);
        // result = "3";
      }
    } else if (kurang2minggu) {
      sum = (2 / 4) * 100;
      percentageBerat = Math.round(sum);
      // result = "3";
    }
  } else if (jml_lainnya >= 4) {
    sum = (1 / 4) * 100;
    percentageBerat = Math.round(sum);
    if (sm_sosial) {
      sum = (2 / 4) * 100;
      percentageBerat = Math.round(sum);
      if (kurang2minggu) {
        sum = (3 / 4) * 100;
        percentageBerat = Math.round(sum);
        // result = "3";
      }
    } else if (kurang2minggu) {
      sum = (2 / 4) * 100;
      percentageBerat = Math.round(sum);
      // result = "3";
    }
  } else if (sm_sosial) {
    sum = (1 / 4) * 100;
    percentageBerat = Math.round(sum);
    if (kurang2minggu) {
      sum = (2 / 4) * 100;
      percentageBerat = Math.round(sum);
      // result = "3";
    }
  } else if (kurang2minggu) {
    sum = (1 / 4) * 100;
    percentageBerat = Math.round(sum);
    // result = "3";
  }

  const arrP = [percentageRingan, percentageSedang, percentageBerat];
  const arrR = arrP.indexOf(Math.max(...arrP));
  // let params = 0;
  // if (arrR === 0) {
  //   params = 1;
  // } else if (arrR === 1) {
  //   params = 2;
  // } else if (arrR === 2) {
  //   params = 3;
  // } else {
  //   params = 8;
  // }
  if (arrR === 0) {
    const hasil = {
      id: "1",
      percentage: percentageRingan,
    };
    return hasil;
  } else if (arrR === 1) {
    const hasil = {
      id: "2",
      percentage: percentageSedang,
    };
    return hasil;
  } else if (arrR === 2) {
    const hasil = {
      id: "3",
      percentage: percentageBerat,
    };
    return hasil;
  } else {
    const hasil = {
      id: 8,
      percentage: 0,
    };
    return hasil;
  }

  //   console.log({ arrP, arrR });
  //   console.log({ jml_lainnya, jml_utama, result, percentageRingan });
  //   return result;
};
