import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "email-service",
  brokers: ["localhost:9094", "localhost:9095", "localhost:9096"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "email-service" });

const run = async () => {
  try {
    await producer.connect();
    await consumer.connect();
    await consumer.subscribe({
      topic: "order-successful",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const value = message.value.toString();
        const { userId, orderId } = JSON.parse(value);

        // TODO: Send email to the user
        const dummyEmailId = "091584203985";
        console.log(`Email consumer: Email sent to user id ${userId}`);

        await producer.send({
          topic: "email-successful",
          messages: [
            { value: JSON.stringify({ userId, emailId: dummyEmailId }) },
          ],
        });
      },
    });
  } catch (err) {
    console.log(err);
  }
};

run();
