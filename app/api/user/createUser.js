import prisma from "@/lib/prisma";

const createUser = async () => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "arr[0][1]",
        email: "arr[1][1]",
        password: "arr[1][1]",
      },
    });
  } catch (error) {}
};

export default createUser;
