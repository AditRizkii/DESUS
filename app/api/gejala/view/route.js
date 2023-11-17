import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const gejala = await prisma.gejala.findMany();

  // const data = await res.json();
  return NextResponse.json({ gejala });
  // return Response.json({ data });
  //   res.status(200).json({ diagnosa });
};
