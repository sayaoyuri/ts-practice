import { readController } from "../controllers/person-controller";
import { Router } from "express";

const router = Router();
router.get('/person', readController);

export default router;