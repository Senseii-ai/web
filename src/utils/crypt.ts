import { hashSync, genSaltSync } from "bcryptjs";
const getSalt = (): string => {
  return genSaltSync(10);
};

export const hashPassword = async (password: string): Promise<string> => {
  const genHash = hashSync(password, getSalt());
  return genHash;
};
