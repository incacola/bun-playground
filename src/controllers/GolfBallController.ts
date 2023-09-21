import { PrismaClient, GolfBall, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class GolfBallsController {

  static async create(golfBall: Prisma.GolfBallCreateInput){
    try{
      return await prisma.golfBall.create({
        data: golfBall,
      })
    } catch (error) {
      console.error("Error creating a golf ball: ", error);
      return null;
    }
    
  }

  static async read(id: number) {
    try {
      return await prisma.golfBall.findUnique({
        where: {id: id}
      })
    } catch (error) {
      console.error("Error reading golf ball:", error);
      return null;
    }
  }

  static async readAll() {
    try {
      return await prisma.golfBall.findMany()
    } catch (error) {
      console.error("Error reading golf balls:", error);
      return null;
    }
  }

  static async update(id: number, updatedGolfBall: Partial<GolfBall>) {
    try {
      const golfBall = await this.read(id);
    if(golfBall) {
      return await prisma.golfBall.update({
        where: {id: id},
        data: {...updatedGolfBall}
      })
    }
    } catch (error) {
      console.error("Error updating golf ball:", error);
    }
    return null;
  }

  static async delete(id: number){
    try {
      return await prisma.golfBall.delete({
        where: {id: id}
      })
    } catch (error) {
      console.error("Error deleting golf ball:", error);
      return null;
    }

  }
}