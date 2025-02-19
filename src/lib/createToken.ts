import jwt from "jsonwebtoken";

type User = {
  email: string;
  password: string;
};

function createToken(user: User) {
  const tokenData = {
    email: user.email,
    password: user.password,
  };

  let token = jwt.sign(tokenData, "process.env.TOKEN_SECRET", {
    expiresIn: "1d",
  });

  return token;
}