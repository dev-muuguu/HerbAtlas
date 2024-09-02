import * as dotenv from "dotenv";
import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import colors from "colors";

import userRouter from "./api/users/router";

dotenv.config();

const app = express();

const corsOptions = {
  origin: [
    // Specify allowed URLs here (e.g., frontend URLs)
  ],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toUTCString()}:${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("suuuuup");
});

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(
    colors.white("Server is running on"),
    colors.green.underline(`http://localhost:${PORT}`)
  );
});

export default app; // Use export default for consistency
