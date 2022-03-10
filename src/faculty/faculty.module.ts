import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyRepository } from './faculty.repository';
import { FacultyController } from './faculty.controller';
import { FacultyService } from './faculty.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([FacultyRepository]), UserModule],
  controllers: [FacultyController],
  providers: [FacultyService],
  exports: [FacultyService],
})
export class FacultyModule {}
