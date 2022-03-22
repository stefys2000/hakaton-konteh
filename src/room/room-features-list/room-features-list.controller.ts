import { Body, Controller, Post } from '@nestjs/common';
import { RoomFeaturesListService } from './room-features-list.service';
import { AddFeatureToRoomDto } from './dto/room-features-list.dto';

@Controller('room-features-list')
export class RoomFeaturesListController {
  constructor(private roomFeaturesListService: RoomFeaturesListService) {}

  @Post()
  async assignFeatureToRoom(
    @Body() addFeatureToRoomDto: AddFeatureToRoomDto,
  ): Promise<void> {
    return await this.roomFeaturesListService.assignFeatureToRoom(
      addFeatureToRoomDto,
    );
  }
}
