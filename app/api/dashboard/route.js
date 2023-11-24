import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const gejala = await prisma.gejala.count();
  const user = await prisma.user.count();
  const depresiRingan = await prisma.hasil.count({
    where: {
      tingkat_id: 1,
    },
  });
  const depresiSedang = await prisma.hasil.count({
    where: {
      tingkat_id: 2,
    },
  });
  const depresiBerat = await prisma.hasil.count({
    where: {
      tingkat_id: 3,
    },
  });

  const hasil = await prisma.hasil.findMany();
  const jenisGejala = await prisma.jenisgejala.findMany();
  const gejalaUtama = await prisma.gejala.count({
    where: {
      jenisGejala_id: 1,
    },
  });
  const gejalaLainnya = await prisma.gejala.count({
    where: {
      jenisGejala_id: 2,
    },
  });
  const kehidupanSosial = await prisma.gejala.count({
    where: {
      jenisGejala_id: 7,
    },
  });
  const kurunWaktu = await prisma.gejala.count({
    where: {
      jenisGejala_id: 6,
    },
  });

  // const data = await res.json();
  return NextResponse.json({
    gejala,
    user,
    depresiRingan,
    depresiSedang,
    depresiBerat,
    hasil,
    jenisGejala,
    gejalaUtama,
    gejalaLainnya,
    kehidupanSosial,
    kurunWaktu,
  });
  // return Response.json({ data });
  //   res.status(200).json({ diagnosa });
};
