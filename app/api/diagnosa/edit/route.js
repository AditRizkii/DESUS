import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const PATCH = async (req, res) => {
  // const { userId, nama, email } = JSON.parse(req.body);

  try {
    const data = await req.json();

    const result = await prisma.diagnosa.update({
      where: {
        id: parseInt(data?.diagnosaID),
      },
      data: {
        nama: data?.nama,
      },
    });
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e);
  }
};
