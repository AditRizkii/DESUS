import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const jenisGejala = await prisma.jenisgejala.findMany();

  // const data = await res.json();
  return NextResponse.json({ jenisGejala });
  // return Response.json({ data });
  //   res.status(200).json({ diagnosa });
};
