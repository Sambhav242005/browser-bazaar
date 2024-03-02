import { AuthCredentialsValidatorRegister } from '@/collections/account-credentails-validator'
import {PrismaClient} from '@prisma/client'

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  try {
    if (req.body) {
      const body = await req.json();
      console.log(body);
      
      if (body) {
        const data = {
          ...AuthCredentialsValidatorRegister.parse(body),
          id: Math.random(),
          updatedAt:new Date(),
        };
        const user = await prisma.user.create({data});
        return new Response("OK");
      }
    }
    return new Response("No body");
  } catch (error) {
    console.error(error);
    return new Response("ERROR");
  }
}
