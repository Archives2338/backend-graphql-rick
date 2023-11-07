/* eslint-disable comma-dangle */
import express from "express";
import logger from "morgan";
import * as path from "path";
import cors, { CorsOptions } from "cors";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();
const corsOptions: CorsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
// Express configuration
app.set("port", process.env.PORT || 3000);


app.use(logger("dev"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);
// habilitamos cors


app.use(errorNotFoundHandler);
app.use(errorHandler);
