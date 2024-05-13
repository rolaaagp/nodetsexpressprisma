import { NextFunction, Request, Response } from "express";
import { getCategoriesFromDb } from "../../providers/categories/categories.provider";

export const getCategories = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await getCategoriesFromDb();
    res.json(response);
  } catch (error) {
    next(error);
  }
};
