import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config();
const Prisma = new PrismaClient();

export default Prisma;
