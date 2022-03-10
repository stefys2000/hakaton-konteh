import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';
import { Room } from './room.entity';
import {
  FacultyRoomsDto,
  RegisterRoomDto,
  UpdateRoomDto,
} from './dto/room.dto';
import { FacultyService } from '../faculty/faculty.service';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomRepository)
    private roomRepository: RoomRepository,
    private facultyService: FacultyService,
  ) {}

  async getAllRooms(): Promise<Room[]> {
    return await this.roomRepository.find();
  }

  async getRoomsByFaculty(facultyRoomsDto: FacultyRoomsDto): Promise<Room[]> {
    const { faculty_id } = facultyRoomsDto;
    const faculty = await this.facultyService.getFacultyById(faculty_id);

    return await this.roomRepository.find({
      where: {
        faculty: faculty,
      },
      order: {
        name: 'ASC',
      },
    });
  }

  async getRoomById(id: string): Promise<Room> {
    const found = await this.roomRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Room with ID: ${id} was not found`);
    }
    return found;
  }

  async registerRoom(registerRoomDto: RegisterRoomDto): Promise<void> {
    const { name, faculty_id } = registerRoomDto;
    const faculty = await this.facultyService.getFacultyById(faculty_id);
    const room = this.roomRepository.create({
      name: name,
      faculty: faculty,
    });
    try {
      await this.roomRepository.save(room);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async updateRoom(updateRoomDto: UpdateRoomDto): Promise<void> {
    const { id, name, faculty_id } = updateRoomDto;
    const room = await this.getRoomById(id);
    if (name) room.name = name;
    if (faculty_id)
      room.faculty = await this.facultyService.getFacultyById(faculty_id);
    try {
      await this.roomRepository.save(room);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
