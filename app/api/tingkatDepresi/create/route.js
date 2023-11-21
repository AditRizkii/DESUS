import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    // console.log(data?.nama);
    const result = await prisma.tingkatdepresi.create({
      data: {
        nama: data?.nama,
        foto: data?.foto,
        saran: data?.saran,
      },
    });
    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
