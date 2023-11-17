import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    // console.log(data?.nama);
    const result = await prisma.user.create({
      data: {
        name: data?.nama,
        email: data?.email,
        password: await hash(data?.password, 10),
      },
    });
    // const user = await prisma.user.create({
    //   data: {
    //     email: "elsa@prisma.io",
    //     name: "Elsa Prisma",
    //     password: await hash("secret", 10),
    //   },
    // });

    //   res.json(result);
    // res.status(200).json({ result });
    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(err);
  }
};
