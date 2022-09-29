// import Joi from 'joi';

interface UserDTO {
  email: string,
  password: string,
  name: string,
  phone: string,
}

// const UserDTOValidation = Joi.object({
//   email: Joi.string().email(),
//   password: Joi.string(),
//   name: Joi.string(),
//   phone: Joi.string(),
// });

// export { UserDTOValidation, UserDTO };
export default UserDTO;
