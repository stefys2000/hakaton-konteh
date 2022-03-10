import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeskRepository } from './desk.repository';
import { DeskController } from './desk.controller';
import { DeskService } from './desk.service';
import { RoomModule } from '../room/room.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([DeskRepository]), RoomModule, UserModule],
  controllers: [DeskController],
  providers: [DeskService],
  exports: [DeskService],
})
export class DeskModule {}
