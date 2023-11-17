import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    // console.log(data?.jenisGejalaID);
    // const result = await prisma.gejala.create({
    //   data: {
    //     nama: data?.nama,
    //     jenisGejala_id: parseInt(data?.jenisGejalaID),
    //   },
    // });
    const idJenis = data?.jenisGejalaID === "Gejala Utama" ? 1 : 2;

    const result = await prisma.gejala.create({
      data: {
        nama: data?.nama,
        jenisGejala_id: idJenis,
      },
    });

    //   res.json(result);
    // res.status(200).json({ result });
    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
