import Joi from 'joi'

const logoutSchema = Joi.object({
  token: Joi.string().required()
})

export default logoutSchema;