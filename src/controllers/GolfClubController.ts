import { PrismaClient, GolfClub, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class GolfClubController {

  static async create(golfClub: Prisma.GolfClubCreateInput){
    try{
      return await prisma.golfClub.create({
        data: golfClub,
      })
    } catch (error) {
      console.error("Error creating a golf club: ", error);
      return null;
    }
    
  }

  static async read(id: number) {
    try {
      return await prisma.golfClub.findUnique({
        where: {id: id}
      })
    } catch (error) {
      console.error("Error reading golf club:", error);
      return null;
    }
  }

  static async update(id: number, updatedGolfBall: Partial<GolfClub>) {
    try {
      const golfClub = await this.read(id);
    if(golfClub) {
      return await prisma.golfClub.update({
        where: {id: id},
        data: {...updatedGolfBall}
      })
    }
    } catch (error) {
      console.error("Error updating golf club:", error);
    }
    return null;
  }

  static async delete(id: number){
    try {
      return await prisma.golfClub.delete({
        where: {id: id}
      })
    } catch (error) {
      console.error("Error deleting golf club:", error);
      return null;
    }

  }
}