import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { RoomFeaturesService } from './roomFeatures.service';
import { RoomFeature } from './roomFeatures.entity';
import {
  AddRoomFeatureDto,
  DeleteRoomFeatureDto,
  UpdateRoomFeatureDto,
} from './dto/roomFeatures.dto';

@Controller('roomFeatures')
export class RoomFeaturesController {
  constructor(private roomFeaturesService: RoomFeaturesService) {}

  @Get()
  async getAllRoomFeatures(): Promise<RoomFeature[]> {
    return await this.roomFeaturesService.getAllRoomFeatures();
  }

  @Post()
  async addRoomFeature(
    @Body() addRoomFeatureDto: AddRoomFeatureDto,
  ): Promise<void> {
    return await this.roomFeaturesService.addRoomFeature(addRoomFeatureDto);
  }

  @Patch()
  async updateRoomFeaeture(
    @Body() updateRoomFeatureDto: UpdateRoomFeatureDto,
  ): Promise<void> {
    return await this.roomFeaturesService.updateRoomFeaeture(
      updateRoomFeatureDto,
    );
  }

  @Delete()
  async deleteRoomFeature(
    @Body() deleteRoomFeatureDto: DeleteRoomFeatureDto,
  ): Promise<void> {
    return await this.roomFeaturesService.deleteRoomFeature(
      deleteRoomFeatureDto,
    );
  }
}
