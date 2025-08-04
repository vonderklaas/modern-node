import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "kafka-service",
  brokers: ["localhost:9094"],
});

const admin = kafka.admin();

const run = async () => {
  await admin.connect();
  await admin.createTopics({
    topics: [
      { topic: "payment-successful" },
      { topic: "order-successful" },
      { topic: "email-successful" },
    ],
  });
};

run();
