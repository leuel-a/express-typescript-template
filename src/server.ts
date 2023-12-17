import * as dotenv from "dotenv";
import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(json());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running in localhost:${PORT}`);
});

export default app;
