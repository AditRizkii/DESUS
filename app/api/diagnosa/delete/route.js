import Result from "@/app/quiz/[id]/page";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    const data = await req.json();
    // console.log(data);
    const result = await prisma.diagnosa.delete({
      where: {
        id: data?.id,
      },
    });
    return NextResponse.json({ msg: "success" });
  } catch (err) {
    if (err.code === "P2025") {
      return new NextResponse("No user with ID found", { status: 404 });
    }
    return NextResponse.json({ err: err });
  }
};
