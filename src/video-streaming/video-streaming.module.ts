import { Module } from '@nestjs/common';
import { VideoStreamingService } from './video-streaming.service';
import { VideoStreamingController } from './video-streaming.controller';

@Module({
  controllers: [VideoStreamingController],
  providers: [VideoStreamingService],
})
export class VideoStreamingModule {}
