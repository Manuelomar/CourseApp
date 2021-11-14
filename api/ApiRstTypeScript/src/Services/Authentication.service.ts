import { json, Request, Response } from "express";
import Users, { IUsers } from "../models/Register.model";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { token } from "morgan";

export const signup = async (req: Request, res: Response) => {
  console.log(req.body);
  const users = new Users({
    Name: req.body.Name,
    LastName: req.body.LastName,
    UserName: req.body.UserName,
    Email: req.body.Email,        
    Password: req.body.Password
  });

 // users.Password = await users.encryptPassword(users.Password);
  const saveUsers = await users.save();
  const token: string = jwt.sign(
    { _id: saveUsers._id },
    process.env.TOKEN_SECRET || "tokentest"
  );
  res.header("auth-token", token).json(saveUsers);
};

export const signip = async (req: Request, res: Response) => {
  const users = await Users.findOne({ Email: req.body.Email });
  if (!users) return res.status(209).json("usuario erroneo");

  const correctPassword: boolean = await users.validatePassword(req.body.Password);
  if (!correctPassword) return res.status(209).json("clave erronea");

  const token: string = jwt.sign(
    { _id: users._id },
    process.env.TOKEN_SECRET || "tokentest",
    {
      expiresIn: 60 * 60 ,
    }
  );

  res.header("auth-token", token).json(users);
};

export const profile = async (req: Request, res: Response) => {
   
  // const {id} = req.params

  // @ts-ignore
   const users = await Users.findById(req.userId);
   if (!users) return res.status(404).json("usuario no encontrado");

   
   res.json(users);
};
