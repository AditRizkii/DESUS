import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    const data = await req.json();
    console.log(data);
    const result = await prisma.gejala.delete({
      where: {
        nama: "user",
      },
    });

    //   res.json(result);
    // res.status(200).json({ result });
    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
