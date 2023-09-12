import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const brands = ['Callaway', 'Kirkland', 'Nike', 'Noodle', 'Pinnacle', 'Snell', 'Srixon', ' Taylormade', 'Titleist', 'Top Flite', 'volvik'];
const types = ['2 Piece', '3 Piece', '4 Piece'];

const data = Array.from({length: 1000 }).map(() =>({
  brand: faker.helpers.arrayElement(brands),
  type: faker.helpers.arrayElement(types),
  color: faker.color.human(),
  price: faker.number.float({min: 0, max: 120}),
  inStock: faker.number.int({ min: 0, max: 10000 })
}))

try {
  await prisma.golfBall.createMany({
    data,
    skipDuplicates: true,
  }).then(() => {
    console.info("Golf balls where created.")
  })
} catch (error) {
  console.log("The insert of the seed was not possible do to the following error: ", error);
}

// create a new user
await prisma.golfBall.create({
  data: data[0],
});

// count the number of users
const count = await prisma.golfBall.count();
console.log(`There are ${count} users in the database.`);
