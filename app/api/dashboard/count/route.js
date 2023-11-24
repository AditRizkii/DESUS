import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("id");
  const jumlah = await prisma.gejala.count({
    where: {
      jenisGejala_id: parseInt(query),
    },
  });

  // const data = await res.json();
  return NextResponse.json({
    jumlah,
  });
  // return Response.json({ data });
  //   res.status(200).json({ diagnosa });
};
