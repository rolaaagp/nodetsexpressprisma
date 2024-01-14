import { Router } from "express";
import { prisma } from "../providers/db";

const router = Router();

//Getters
router.get("/", async (_req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      include: { products: false },
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const categories = await prisma.category.findFirst({
      include: { products: true },
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/product/:id", async (req, res, next) => {
  try {
    const categories = await prisma.category.findFirst({
      include: { products: true },
      where: {
        products: {
          some: {
            id: parseInt(req.params.id),
          },
        },
      },
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

//Setters
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await prisma.category.create({
      data: {
        name: name,
      },
    });

    res.json(newCategory);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const categories = await prisma.category.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

export default router;
