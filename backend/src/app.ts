import * as dotenv from "dotenv";
import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import colors from "colors";
import swaggerUi from "swagger-ui-express";
import userRouter from "./api/users/router";
import swaggerSpec from "./utils/swagger";

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

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(
    colors.white("Server is running on"),
    colors.green.underline(`http://localhost:${PORT}`)
  );
});

export default app; // Use export default for consistency
