import { User } from "@prisma/client";
import Joi from "joi";

export type CreateUserData = Omit<User, "createdAt">;

const userSchema = Joi.object<CreateUserData>({
  name: Joi.string().required(),
  age: Joi.number().min(10).max(100).required(),
});

export default userSchema;
