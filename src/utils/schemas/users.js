const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const userSchema = {
  name: joi
    .string()
    .max(100)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  password: joi.string().required()
};

const createUserSchema = joi.object({
  ...userSchema,
  isAdmin: joi.boolean()
});

const createProviderUserSchema = joi.object({
  ...userSchema,
  apiKeyToken: joi.string().required()
});

module.exports = {
  userIdSchema,
  createUserSchema,
  createProviderUserSchema
};