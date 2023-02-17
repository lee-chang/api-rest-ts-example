import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "2h" });

  return jwt;
};

const verifyToken = async (tokenByUser: string) => {
  const checkIs = await verify(tokenByUser, JWT_SECRET);
  console.log(checkIs);
  return checkIs;
};

export { generateToken, verifyToken };
