import prisma from "../config/database.js";
import { CreateUserData } from "../schemas/userSchema.js";

export async function addNewUser(userInfo: CreateUserData) {
  return await prisma.user.create({ data: userInfo });
}

export async function getAllUsers() {
  return await prisma.user.findMany();
}
