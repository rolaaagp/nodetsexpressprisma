import { TCategoriesNotFoundError } from "../../types/category/categories";
import { CustomResponse } from "../../types/response/response";
import { prisma } from "../db/db";

const CategoriesFoundOk: TCategoriesNotFoundError = {
  status: 200,
  message: "ok",
};

const CategoriesNotFoundError: TCategoriesNotFoundError = {
  status: 204,
  message: "No hay categorías registradas.",
};

export const getCategoriesFromDb = async (): Promise<
  CustomResponse | TCategoriesNotFoundError
> => {
  const categories = await prisma.category.findMany({
    include: { products: false },
  });

  const is_ok: CustomResponse = {
    status: CategoriesFoundOk.status,
    message: CategoriesFoundOk.message,
    data: categories,
  };

  const is_not_ok: CustomResponse = {
    status: CategoriesNotFoundError.status,
    message: CategoriesNotFoundError.message,
    data: [],
  };

  return categories.length ? is_ok : is_not_ok;
};
