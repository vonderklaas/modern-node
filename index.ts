import express from "express";
import restaurantsRouter from "./routes/restaurants.js";
import cuisinesRouter from "./routes/cuisines.js";
import { errroHandler } from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/restaurants", restaurantsRouter);
app.use("/cuisines", cuisinesRouter);

app.use(errroHandler);

app
  .listen(PORT, () => {
    console.log(`Application running on PORT: ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
