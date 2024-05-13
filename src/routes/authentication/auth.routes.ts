import { Router } from "express";
import { getLogin } from "../../controllers/integrations/django/loginDjango.controller";

const router = Router();
//Setters
router.post("/", getLogin);

export default router;
