export interface CustomResponse<T = unknown> {
  status: number;
  message: string;
  data?: T;
}