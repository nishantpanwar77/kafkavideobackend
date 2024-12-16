import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';

@Injectable()
export class MainStreamingService {
  private s3 = new S3Client({
    region: '',
    credentials: {
      accessKeyId: '',
      secretAccessKey: '',
    },
  });

  async getVideoStream(bucketName: string, key: string): Promise<Readable> {
    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const response = await this.s3.send(command);
    return response.Body as Readable;
  }
}
