import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const PORT: number | string = process.env.PORT || 8080;

app.listen(PORT);

export default app;
