import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req) => {
  try {
    const data = await req.json();
    // console.log(data);

    const result = await prisma.jenisgejala.update({
      where: {
        id: parseInt(data?.jenisgejalaId),
      },
      data: {
        nama: data?.nama,
      },
    });

    // const result = await prisma.gejala.update({
    //   where: {
    //     id: 10,
    //   },
    //   data: {
    //     nama: "udah berubah",
    //     jenisGejala_id: 2,
    //   },
    // });
    // const result = await prisma.gejala.update({
    //   where: { id: 10 },
    //   data: { nama: "udah berubah" },
    // });

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};