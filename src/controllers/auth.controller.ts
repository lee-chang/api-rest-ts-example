import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await loginUser({ email, password });

  if (response === "INCORRECT_PASSWORD") {
    return res.status(404).send(response);
  } else {
    res.send(response);
  }
};

const registerController = async (req: Request, res: Response) => {
  try {
    const response = await registerNewUser(req.body);
    if ( response === 'USER_ALREADY_EXISTS' ) {
      return res.status(404).send(response);
    } 
    return res.send(response).status(200);
  }catch(err) {
    console.log(err);
  }
};

export { loginController, registerController };
