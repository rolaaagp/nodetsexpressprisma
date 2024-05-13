import { NextFunction, Request, Response } from "express";
import { confirmTransactionWP } from "../../../providers/integrations/webPay/confirmTransaction";
import { TypeTokenWebPay } from "../../../types/webpay/webPay";

export const confirmTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: TypeTokenWebPay["token"] = req.body.token;
    const response = await confirmTransactionWP(data);
    res.json(response);
  } catch (error) {
    console.log("Error -> ", error);
    next(error);
  }
};
