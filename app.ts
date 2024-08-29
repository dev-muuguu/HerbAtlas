import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
// import swaggerSpec from "./utils/swagger";
// import authRouter from "./api/auth/router";
// import productRouter from "./api/product/router";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toUTCString()}:${req.method} ${req.url}`);
  next();
});

// Serve Swagger UI
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
