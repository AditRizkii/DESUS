// pages/api/get-wish.js
import prisma from "../../../lib/prisma";

export default async function getDiagnosa() {
  // const { user } = req.query;
  try {
    const list = await prisma.diagnosa.findMany();
    // const result = list.json();
    return list;
    // res.status(200).json({ list });
  } catch (e) {
    console.error(e);
    // res.status(500).json(e);
  }
}