import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import getDiagnosa from "../get-diagnosa";

export const GET = async (req, res) => {
  const diagnosa = await prisma.diagnosa.findMany();

  // const data = await res.json();
  return NextResponse.json({ diagnosa });
  // return Response.json({ data });
  //   res.status(200).json({ diagnosa });
};
