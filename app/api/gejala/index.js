import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const { nama, jenisGejala_id } = req.body;
  const result = await prisma.gejala.create({
    data: {
      nama: nama,
      jenisGejala_id: jenisGejala_id,
    },
  });
  res.json(result);
}
