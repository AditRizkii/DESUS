import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("id");
  //   console.log(query);
  //   const queryid = searchParams.get("id");
  const user = await prisma.diagnosa.findUnique({
    where: {
      id: parseInt(query),
    },
  });

  // const data = await res.json();
  return NextResponse.json({ user });
  // return Response.json({ data });
  //   res.status(200).json({ diagnosa });
};
