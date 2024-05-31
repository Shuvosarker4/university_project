import express, { application } from "express";
import cors from "cors";
import { StudentRoutes } from "./modules/students/student.routes";
import { UserRoutes } from "./modules/User/user.route";
const app = express();
const port = 5000;
//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
