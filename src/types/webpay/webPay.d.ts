export interface InterfaceWebPay {
  buy_order: string;
  session_id: string;
  amount: number;
  return_url: string;
}

export interface InterfacePayloadWebPay {
  token: string;
  url: string;
}

export interface InterfaceResponseWebPay extends InterfacePayloadWebPay {
  final_url: string;
}

export type TypeTokenWebPay = Pick<InterfacePayloadWebPay, "token">;
