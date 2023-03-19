import { Request, Response } from "express";
import AppLog from "../events/AppLog.js";
import * as repository from "../repositories/index.js";
import { CreateUserData } from "../schemas/userSchema.js";

export async function postUser(req: Request, res: Response) {
  const userInfo: CreateUserData = req.body;

  await repository.addNewUser(userInfo);

  AppLog("Controller", "User created");

  res.sendStatus(201);
}

export async function getUsers(req: Request, res: Response) {
  const users = await repository.getAllUsers();

  AppLog("Controller", "Users found");

  res.status(200).send(users);
}
