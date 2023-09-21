import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const brands = ['Callaway', 'Addidas', 'Nike','Srixon', ' Taylormade', 'Titleist', 'Top Flite'];
const types = [
  'pants','t-shirt','polo','gloves','skirt',
];
const size = ['S','M','L','XL']

const data = Array.from({length: 4000 }).map(() =>({
  type: faker.helpers.arrayElement(types),
  size: faker.helpers.arrayElement(size),
  color: faker.color.human(),
  brand: faker.helpers.arrayElement(brands),
  price: faker.number.float({min: 5, max: 320}),
  inStock: faker.number.int({ min: 0, max: 10000 })
}))


async function main() {
  // create a new user
  try {
    await prisma.apparel.createMany({
      data,
      skipDuplicates: true,
    }).then(() => {
      console.info("Golf balls where created.")
    })
  } catch (error) {
    console.log("The insert of the seed was not possible do to the following error: ", error);
  }
}

await main()
.catch((e) =>{
  console.log(e);
  process.exit(1)
})
.finally(() => {
  prisma.$disconnect();
});