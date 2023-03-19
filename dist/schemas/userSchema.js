import Joi from "joi";
var userSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().min(10).max(100).required()
});
export default userSchema;
