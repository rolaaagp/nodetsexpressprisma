import { Router } from "express";
import { confirmTransaction } from "../../controllers/integrations/webpay/confirmTransaction.controller";
import { createTransaction } from "../../controllers/integrations/webpay/createTransaction.controller";

const router = Router();
//Setters
router.post("/create", createTransaction);
router.put("/confirm", confirmTransaction);

export default router;
