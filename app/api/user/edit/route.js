import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const PATCH = async (req, res) => {
  // const { userId, nama, email } = JSON.parse(req.body);

  try {
    const data = await req.json();

    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(data?.userID),
      },
      data: {
        name: data?.name,
        email: data?.email,
        password: await hash(data?.password, 10),
        role: data?.role,
      },
    });
    return NextResponse.json({ updatedUser });
  } catch (e) {
    return NextResponse.json(e);
  }
};
