import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const PATCH = async (req, res) => {
  // const { userId, nama, email } = JSON.parse(req.body);

  try {
    const data = await req.json();

    const result = await prisma.hasil.update({
      where: {
        id: parseInt(data?.hasilID),
      },
      data: {
        diagnosa_id: data?.diagnosa_id,
        gejala_id: data?.gejala_id,
        tingkat_id: data?.tingkat_id,
      },
    });
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e);
  }
};
