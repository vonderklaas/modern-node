import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app
  .listen(PORT, () => {
    console.log(`Application running on PORT: ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
