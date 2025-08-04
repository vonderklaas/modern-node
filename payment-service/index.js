import express from "express";
import cors from "cors";
import { Kafka } from "kafkajs";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

const kafka = new Kafka({
  clientId: "payment-service",
  brokers: ["localhost:9094", "localhost:9095", "localhost:9096"],
});

const producer = kafka.producer();

const connectToKafka = async () => {
  try {
    await producer.connect();
    console.log("Producer connected!");
  } catch (err) {
    console.log("Error connecting to Kafka", err);
  }
};

app.post("/payment-service", async (req, res) => {
  const { cart } = req.body;
  // ASSUME THAT WE GET THE COOKIE AND DECRYPT THE USER ID
  const userId = "123";

  // TODO:PAYMENT

  // KAFKA
  await producer.send({
    topic: "payment-successful",
    messages: [{ value: JSON.stringify({ userId, cart }) }],
  });

  setTimeout(() => {
    return res.status(200).send("Payment successful");
  }, 3000);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

app.listen(8000, () => {
  connectToKafka();
  console.log("Payment service is running on port 8000");
});
