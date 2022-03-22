import { Module } from '@nestjs/common';
import { DeskFeaturesListController } from './desk-features-list.controller';
import { DeskFeaturesListService } from './desk-features-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../../user/user.module';
import { DeskFeaturesListRepository } from './desk-features-list.repository';
import { DeskModule } from '../desk.module';
import { DeskFeaturesModule } from '../deskFeatures/deskFeatures.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeskFeaturesListRepository]),
    DeskModule,
    DeskFeaturesModule,
    UserModule,
  ],
  controllers: [DeskFeaturesListController],
  providers: [DeskFeaturesListService],
  exports: [DeskFeaturesListService],
})
export class DeskFeaturesListModule {}
