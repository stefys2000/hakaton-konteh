import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { Faculty } from './faculty.entity';
import { RegisterFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('faculty')
// @UseGuards(AuthGuard())
export class FacultyController {
  constructor(private facultyService: FacultyService) {}

  @Get()
  async getAllFaculties(): Promise<Faculty[]> {
    return await this.facultyService.getAllFaculties();
  }

  @Post()
  async registerFaculty(
    @Body() registerFacultyDto: RegisterFacultyDto,
  ): Promise<void> {
    return await this.facultyService.registerFaculty(registerFacultyDto);
  }

  @Patch()
  async updateFaculty(
    @Body() updateFacultyDto: UpdateFacultyDto,
  ): Promise<void> {
    return await this.facultyService.updateFaculty(updateFacultyDto);
  }
}
