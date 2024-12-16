import { Controller } from '@nestjs/common';
import { VideoStreamingService } from './video-streaming.service';

@Controller('video-streaming')
export class VideoStreamingController {
  constructor(private readonly videoStreamingService: VideoStreamingService) {}
}
