import {
  Environment,
  IntegrationApiKeys,
  IntegrationCommerceCodes,
  Options,
  WebpayPlus,
} from "transbank-sdk";
import {
  InterfacePayloadWebPay,
  InterfaceResponseWebPay,
  InterfaceWebPay,
} from "../../../types/webpay/webPay";

const tx = new WebpayPlus.Transaction(
  new Options(
    IntegrationCommerceCodes.WEBPAY_PLUS,
    IntegrationApiKeys.WEBPAY,
    Environment.Integration
  )
);

export const createTransactionWP = async ({
  buy_order,
  session_id,
  amount,
  return_url,
}: InterfaceWebPay): Promise<InterfaceResponseWebPay> => {
  const payload: InterfacePayloadWebPay = await tx.create(
    buy_order,
    session_id,
    amount,
    return_url
  );

  const response = {
    ...payload,
    final_url: `${payload.url}?token_ws=${payload.token}`,
  };

  return response;
};
