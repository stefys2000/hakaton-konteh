import { Module } from '@nestjs/common';
import { TimeStampController } from './time-stamp.controller';
import { TimeStampService } from './time-stamp.service';

@Module({
  controllers: [TimeStampController],
  providers: [TimeStampService]
})
export class TimeStampModule {}
