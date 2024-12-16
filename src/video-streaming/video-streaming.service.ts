import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';


@Injectable()
export class VideoStreamingService {
    private kafka = new Kafka({
        clientId: 'video-service',
        brokers: ['localhost:9092'], // Docker Kafka
      });
    
      private producer = this.kafka.producer();
      private consumer = this.kafka.consumer({ groupId: 'video-group' });
    
      async produce(topic: string, message: any) {
        await this.producer.connect();
        await this.producer.send({
          topic,
          messages: [{ value: JSON.stringify(message) }],
        });
        await this.producer.disconnect();
      }
    
      async consume(topic: string, callback: (message: any) => void) {
        await this.consumer.connect();
        await this.consumer.subscribe({ topic, fromBeginning: true });
        await this.consumer.run({
          eachMessage: async ({ message }) => {
            callback(JSON.parse(message.value.toString()));
          },
        });
      }
}