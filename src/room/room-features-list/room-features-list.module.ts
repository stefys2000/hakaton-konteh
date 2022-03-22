import { Module } from '@nestjs/common';
import { RoomFeaturesListController } from './room-features-list.controller';
import { RoomFeaturesListService } from './room-features-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../../user/user.module';
import { RoomFeaturesListRepository } from './room-features-list.repository';
import { RoomModule } from '../room.module';
import { RoomFeaturesModule } from '../roomFeatures/roomFeatures.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomFeaturesListRepository]),
    RoomModule,
    RoomFeaturesModule,
    UserModule,
  ],
  controllers: [RoomFeaturesListController],
  providers: [RoomFeaturesListService],
  exports: [RoomFeaturesListService],
})
export class RoomFeaturesListModule {}
