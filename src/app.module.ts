import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { FacultyModule } from './faculty/faculty.module';
import { DeskModule } from './desk/desk.module';
import { DeskFeaturesController } from './desk/deskFeatures/deskFeatures.controller';
import { DeskFeaturesModule } from './desk/deskFeatures/deskFeatures.module';
import { RoomFeaturesModule } from './room/roomFeatures/roomFeatures.module';
import { RoomFeaturesListModule } from './room/room-features-list/room-features-list.module';
import { DeskFeaturesListModule } from './desk/desk-features-list/desk-features-list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'hakaton-test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    RoomModule,
    FacultyModule,
    DeskModule,
    DeskFeaturesModule,
    RoomFeaturesModule,
    RoomFeaturesListModule,
    DeskFeaturesListModule,
  ],
  controllers: [DeskFeaturesController],
})
export class AppModule {}
