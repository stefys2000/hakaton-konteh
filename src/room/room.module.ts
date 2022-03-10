import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { FacultyModule } from '../faculty/faculty.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomRepository]),
    FacultyModule,
    UserModule,
  ],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
