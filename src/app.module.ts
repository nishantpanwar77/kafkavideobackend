import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoStreamingModule } from './video-streaming/video-streaming.module';
import { MainStreamingModule } from './main-streaming/main-streaming.module';

@Module({
  imports: [VideoStreamingModule, MainStreamingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
