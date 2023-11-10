// pages/api/create-new.js
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { dataForm } = await req.json();

    try {
      // we can access db records with prisma functions
      const wish = await prisma.wishlist.create({
        data: {
          title,
          link: titleLink,
          userId: parseInt(userId),
        },
      });
      res.status(200).json({ wish });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
