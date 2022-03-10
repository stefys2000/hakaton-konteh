import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from './room.entity';
import {
  FacultyRoomsDto,
  RegisterRoomDto,
  UpdateRoomDto,
} from './dto/room.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('room')
@UseGuards(AuthGuard())
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  async getAllRooms(): Promise<Room[]> {
    return await this.roomService.getAllRooms();
  }

  @Get('faculty')
  async getRoomsByFaculty(
    @Body() facultyRoomsDto: FacultyRoomsDto,
  ): Promise<Room[]> {
    return await this.roomService.getRoomsByFaculty(facultyRoomsDto);
  }

  @Post()
  async registerRoom(@Body() registerRoomDto: RegisterRoomDto): Promise<void> {
    return await this.roomService.registerRoom(registerRoomDto);
  }

  @Patch()
  async updateRoom(@Body() uprateRoomDto: UpdateRoomDto): Promise<void> {
    return await this.roomService.updateRoom(uprateRoomDto);
  }
}
