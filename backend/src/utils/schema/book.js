import Joi from 'joi'
export const booksSchema = Joi.object({
    title: Joi.string().required(),
     writter: Joi.string().required(),
    rating: Joi.number().required(),
    price :Joi.number().required(),
    new :Joi.boolean().required(),
    bestsellers: Joi.boolean().required(),
    imageUri:Joi.string().required(),
    description:Joi.string().required()
  }).required();
