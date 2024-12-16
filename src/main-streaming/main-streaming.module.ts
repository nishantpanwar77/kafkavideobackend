import { Module } from '@nestjs/common';
import { MainStreamingService } from './main-streaming.service';
import { MainStreamingController } from './main-streaming.controller';
import { VideoStreamingModule } from 'src/video-streaming/video-streaming.module';

@Module({
  imports: [VideoStreamingModule],
  controllers: [MainStreamingController],
  providers: [MainStreamingService],
})
export class MainStreamingModule {}
