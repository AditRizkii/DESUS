// pages/api/get-wish.js
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const list = await prisma.jenisgejala.findMany({
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).json({ list });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}