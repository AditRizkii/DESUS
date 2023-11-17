import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req) => {
  try {
    const requestdata = await req.json();
    console.log(requestdata);

    // const result = await prisma.gejala.update({
    //   where: {
    //     id: parseInt(data?.gejalaID),
    //   },
    //   data: {
    //     name: data?.nama,
    //     jenisGejala_id: data?.jenisGejala_id,
    //   },
    // });

    // const result = await prisma.gejala.update({
    //   where: {
    //     id: 10,
    //   },
    //   data: {
    //     nama: "udah berubah",
    //     jenisGejala_id: 2,
    //   },
    // });
    const result = await prisma.gejala.update({
      where: { id: 10 },
      data: { nama: "udah berubah" },
    });

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
