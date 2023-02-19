import { User } from "../interface/user.interface";
import { Auth } from "../interface/auth.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name, rol }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "USER_ALREADY_EXISTS";

  const passEncrypted = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passEncrypted,
    name,
    rol
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "NOT_FOUND_LOGIN";

  const passwordHash = user.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) {
    return "INCORRECT_PASSWORD"
  } else {
    
    const token = await generateToken(user.email, user.rol);
    const data = {
      token: token,
      user
    }
    return data;

  }
};

export { registerNewUser, loginUser };
