import { Router } from "express";
import validSchema from "../middlewares/schemaValidator.js";
import userSchema from "../schemas/userSchema.js";

import * as service from "../controllers/index.js";

const router = Router();

router.post("/", validSchema(userSchema, "/"), service.postUser);
router.get('/users', service.getUsers);


export default router;