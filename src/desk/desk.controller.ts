import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DeskService } from './desk.service';
import { Desk } from './desk.entity';
import { AuthGuard } from '@nestjs/passport';
import {
  AssignUserDto,
  DeleteDeskDto,
  DeskByRoomDto,
  RegisterDeskDto,
  UpdateDeskDto,
} from './dto/desk.dto';

@Controller('desk')
@UseGuards(AuthGuard())
export class DeskController {
  constructor(private deskService: DeskService) {}

  @Get()
  async getAllDesks(): Promise<Desk[]> {
    return await this.deskService.getAllDesks();
  }

  @Get('/:id')
  async getDeskById(@Param() id: string): Promise<Desk> {
    return await this.deskService.getDeskById(id);
  }

  @Get('room')
  async getDesksByRoom(@Body() deskByRoomDto: DeskByRoomDto): Promise<Desk[]> {
    return await this.deskService.getDesksByRoom(deskByRoomDto);
  }

  @Post('assign')
  async assignUserToDesk(@Body() assignUserDto: AssignUserDto): Promise<void> {
    return await this.deskService.assignUserToDesk(assignUserDto);
  }

  @Post()
  async registerDesk(@Body() registerDeskDto: RegisterDeskDto): Promise<void> {
    return await this.deskService.registerDesk(registerDeskDto);
  }

  @Patch()
  async updateDesk(@Body() updateDeskDto: UpdateDeskDto): Promise<void> {
    return await this.deskService.updateDesk(updateDeskDto);
  }

  @Delete()
  async deleteDesk(@Body() deleteDeskDto: DeleteDeskDto): Promise<void> {
    return await this.deskService.deleteDesk(deleteDeskDto);
  }
}
