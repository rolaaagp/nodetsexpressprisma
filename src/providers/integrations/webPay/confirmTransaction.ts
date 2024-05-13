import {
  Environment,
  IntegrationApiKeys,
  IntegrationCommerceCodes,
  Options,
  WebpayPlus,
} from "transbank-sdk";
import { TypeTokenWebPay } from "../../../types/webpay/webPay";

const tx = new WebpayPlus.Transaction(
  new Options(
    IntegrationCommerceCodes.WEBPAY_PLUS,
    IntegrationApiKeys.WEBPAY,
    Environment.Integration
  )
);

export const confirmTransactionWP = async (token: TypeTokenWebPay["token"]) => {
  try {
    const response = await tx.commit(token);
    return response;
  } catch (error) {
    return error;
  }
};
