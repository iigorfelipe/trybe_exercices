import UserService from "../services/user";
import IUser from "../interfaces/userInterface";
import { Request, Response } from "express";

const service = new UserService();

export const getAll = async (req: Request, res: Response): Promise<Response> => {
  const users = await service.getAll();

  return res.status(200).json(users);
};

export const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const user = await service.getById(id);

  return res.status(200).json(user);
};