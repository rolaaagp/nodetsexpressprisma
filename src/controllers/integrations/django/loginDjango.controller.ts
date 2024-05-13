import { NextFunction, Request, Response } from "express";
import { getLoginDjango } from "../../../providers/integrations/django/loginDjango.provider";

export const getLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    const response = await getLoginDjango({ username, password });
    res.json(response);
  } catch (error) {
    next(error);
  }
};
