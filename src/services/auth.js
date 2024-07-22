import jwt from "jsonwebtoken";
import { prisma } from "./prisma.js";

async function verifyJWT(req, res, next) {
  const token = req.headers["token-auth"];

  if (!token) {
    return res.status(401).json({ error: "token não fornecido" });
  }

  const tokenInBlackList = await prisma.blacklist.findUnique({
    where: {
      token: token,
    },
  });

  if (tokenInBlackList) {
    return res.status(401).json({ error: "permissão negada1" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    console.log(err);
    if (err) return res.status(401).json({ error: "permissão negada2" });

    req.userId = decoded.userId;
    next();
  });
}

export default verifyJWT;
