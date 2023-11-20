import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req) => {
  try {
    const data = await req.json();
    // console.log(data);

    const result = await prisma.jenisgejala.update({
      where: {
        id: parseInt(data?.gejalaId),
      },
      data: {
        nama: data?.nama,
      },
    });

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
