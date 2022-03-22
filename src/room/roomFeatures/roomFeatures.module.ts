import { Module } from '@nestjs/common';
import { RoomFeaturesController } from './roomFeatures.controller';
import { RoomFeaturesService } from './roomFeatures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from '../room.module';
import { UserModule } from '../../user/user.module';
import { RoomFeaturesRepository } from './roomFeatures.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomFeaturesRepository]),
    RoomModule,
    UserModule,
  ],
  controllers: [RoomFeaturesController],
  providers: [RoomFeaturesService],
  exports: [RoomFeaturesService],
})
export class RoomFeaturesModule {}
