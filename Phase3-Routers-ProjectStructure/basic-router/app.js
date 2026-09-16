import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
