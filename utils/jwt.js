import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  if (!user || !process.env.privateKey) {
    return { message: "Something went wrong!" };
  }
  const accessToken = jwt.sign(user,process.env.privateKey, {expiresIn:"24h"});
  return accessToken
};

export const decodeToken = (token) => {
  const decoded=jwt.verify(token,process.env.privateKey);
  return decoded;
}

