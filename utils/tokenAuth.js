import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(403).json({status: "error", message: "Forbiden!"});
  }
  const token = authHeader.split(" ")[1];
  const user = jwt.decode(token, process.env.privateKey);
  if (!user) {
    return res.status(401).json({status: "error", message: "Unauthorized!"});
  }

  req.user = user;
  return next();
};
