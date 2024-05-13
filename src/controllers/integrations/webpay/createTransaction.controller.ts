import { NextFunction, Request, Response } from "express";
import { createTransactionWP } from "../../../providers/integrations/webPay";
import { InterfaceWebPay } from "../../../types/webpay/webPay";

export const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: InterfaceWebPay = req.body;
    const response = await createTransactionWP(data);
    res.json(response);
  } catch (error) {
    console.log("Error -> ", error);
    next(error);
  }
};
