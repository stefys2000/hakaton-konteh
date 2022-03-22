import { Module } from '@nestjs/common';
import { DeskFeaturesService } from './deskFeatures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../../user/user.module';
import { DeskFeaturesController } from './deskFeatures.controller';
import { DeskFeaturesRepository } from './deskFeatures.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DeskFeaturesRepository]), UserModule],
  controllers: [DeskFeaturesController],
  providers: [DeskFeaturesService],
  exports: [DeskFeaturesService],
})
export class DeskFeaturesModule {}
