import bcrypt from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHash = await bcrypt.hash(pass, 10);
  return passwordHash;
};

const verified = async (pass: string, passwordHash: string) => {
  const isCorrect = await bcrypt.compare(pass, passwordHash);
  return isCorrect;
};

export { encrypt, verified };
