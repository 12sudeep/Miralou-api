// Require the cloudinary library
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  for (let i = 0; i < 18; i++) {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image: 'image',
        category_id: faker.datatype.number({ min: 1, max: 4 }),
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
