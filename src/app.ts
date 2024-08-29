import * as dotenv from "dotenv";
import express, { Response, Request } from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();

const corsOptions = {
  origin: [
    // хандах url, frontend etc
  ],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

const PORT: number | string = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("suuuuup");
});

app.listen(PORT, async () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

module.exports = app;
