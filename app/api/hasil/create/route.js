import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    // console.log(data?.jenisGejalaID);

    const result = await prisma.hasil.create({
      data: {
        percentage: parseInt(data?.percentage),
        diagnosa_id: parseInt(data?.diagnosa_id),
        gejala_id: parseInt(data?.gejala_id),
        tingkat_id: parseInt(data?.tingkat_id),
      },
    });

    //   res.json(result);
    // res.status(200).json({ result });
    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
