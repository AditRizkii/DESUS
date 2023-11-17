import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const { userId, nama, email } = JSON.parse(req.body);

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: nama,
        email: email,
      },
    });
    return NextResponse.json({ updatedUser });
  } catch (e) {
    return NextResponse.json(e);
  }
};
