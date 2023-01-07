import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'local')
    .default('local'),
  MONGODB_URI: Joi.string().required(),
});
