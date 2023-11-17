import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    // console.log(data?.jenisGejalaID);

    const result = await prisma.hasil.create({
      data: {
        diagnosa_id: data?.diagnosa_id,
        gejala_id: data?.gejala_id,
        tingkat_id: data?.tingkat_id,
      },
    });

    //   res.json(result);
    // res.status(200).json({ result });
    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
