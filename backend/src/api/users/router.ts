import { Router } from "express";
import { createUser, allUsers, getUser } from "./controller";

const router = Router();

router.post("/", createUser);
router.get("/", allUsers);
router.get("/:id", getUser);

export default router;
