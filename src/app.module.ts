import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { FacultyModule } from './faculty/faculty.module';
import { DeskModule } from './desk/desk.module';

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
  ],
})
export class AppModule {}
