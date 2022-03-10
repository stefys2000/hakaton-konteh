import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeskRepository } from './desk.repository';
import { RoomService } from '../room/room.service';
import { Desk } from './desk.entity';
import {
  AssignUserDto, DeleteDeskDto,
  DeskByRoomDto,
  RegisterDeskDto,
  UpdateDeskDto
} from "./dto/desk.dto";
import { UserService } from '../user/user.service';

@Injectable()
export class DeskService {
  constructor(
    @InjectRepository(DeskRepository)
    private deskRepository: DeskRepository,
    private roomService: RoomService,
    private userService: UserService,
  ) {}

  async getAllDesks(): Promise<Desk[]> {
    return await this.deskRepository.find();
  }

  async getDesksByRoom(deskByRoomDto: DeskByRoomDto): Promise<Desk[]> {
    const { room_id } = deskByRoomDto;
    const room = await this.roomService.getRoomById(room_id);

    return await this.deskRepository.find({
      where: {
        room: room,
      },
    });
  }

  async getDeskById(id: string): Promise<Desk> {
    const found = await this.deskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Desk with ID: ${id} was not found`);
    }
    return found;
  }

  async assignUserToDesk(assignUserDto: AssignUserDto): Promise<void> {
    const { id, user_id } = assignUserDto;
    const desk = await this.getDeskById(id);
    desk.user = await this.userService.findUserById(user_id);
    try {
      await this.deskRepository.save(desk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async registerDesk(registerDeskDto: RegisterDeskDto): Promise<void> {
    const { room_id } = registerDeskDto;
    const room = await this.roomService.getRoomById(room_id);
    const desk = this.deskRepository.create({
      room: room,
    });
    try {
      await this.deskRepository.save(desk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async updateDesk(updateDeskDto: UpdateDeskDto): Promise<void> {
    const { id, room_id } = updateDeskDto;
    const desk = await this.getDeskById(id);
    if (room_id) desk.room = await this.roomService.getRoomById(room_id);
    try {
      await this.deskRepository.save(desk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async deleteDesk(deleteDeskDto: DeleteDeskDto): Promise<void> {
    const { id } = deleteDeskDto;
    const desk = await this.getDeskById(id);
    try {
      await this.deskRepository.delete(desk);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
