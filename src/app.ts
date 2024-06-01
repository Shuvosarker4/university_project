import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
const app = express();
//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
