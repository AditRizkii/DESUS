import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const PATCH = async (req, res) => {
  // const { userId, nama, email } = JSON.parse(req.body);

  try {
    const data = await req.json();

    const tingkat = await prisma.tingkatdepresi.update({
      where: {
        id: parseInt(data?.tingkatID),
      },
      data: {
        name: data?.name,
        foto: data?.foto,
        saran: data?.saran,
      },
    });
    return NextResponse.json({ tingkat });
  } catch (e) {
    return NextResponse.json(e);
  }
};
