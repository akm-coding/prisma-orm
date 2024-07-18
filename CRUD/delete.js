const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.user
  .deleteMany({
    where: { id: 1 },
  })
  .then(() => console.log("Deleted User 1 and their posts"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
