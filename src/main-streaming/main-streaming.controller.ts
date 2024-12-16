import { Controller, Get, HttpException, HttpStatus, Query, Res } from '@nestjs/common';
import { MainStreamingService } from './main-streaming.service';
import { Response } from 'express';

@Controller('main-streaming')
export class MainStreamingController {
  constructor(private readonly mainStreamingService: MainStreamingService) {
  }

  @Get('stream')
  async streamVideo(
    @Query('bucket') bucket: string,
    @Query('key') key: string,
    @Res() res: Response,
  ) {
    try {
      const videoStream = await this.mainStreamingService.getVideoStream(bucket, key);
      res.set({
        'Content-Type': 'video/mp4',
        'Transfer-Encoding': 'chunked',
      });
      videoStream.pipe(res);
    } catch (error) {
      throw new HttpException(
        'Unable to stream video',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
