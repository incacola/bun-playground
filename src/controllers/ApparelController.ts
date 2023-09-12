import { PrismaClient, Prisma, Apparel } from "@prisma/client";

const prisma = new PrismaClient();

export class ApparelController {

  static async create(apprel: Prisma.ApparelCreateInput){
    try {
      return await prisma.apparel.create({
        data: apprel
      })
    } catch (error) {
      console.error("Error creating a Apparel: ", error);
      return null;
    }
  }

  static async read(id: number) {
    try {
      return await prisma.apparel.findUnique({
        where: {id: id}
      })
    } catch (error) {
      console.error("Error reading an Apparel:", error);
      return null;
    }
  }

  static async update(id: number, updatedApparel: Partial<Apparel>) {
    try {
      const apparel = await this.read(id);
    if(apparel) {
      return await prisma.apparel.update({
        where: {id: id},
        data: {...updatedApparel}
      })
    }
    } catch (error) {
      console.error("Error updating an Apparel:", error);
    }
    return null;
  }

  static async delete(id: number){
    try {
      return await prisma.apparel.delete({
        where: {id: id}
      })
    } catch (error) {
      console.error("Error deleting an Apparel:", error);
      return null;
    }

  }
}