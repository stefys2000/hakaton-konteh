import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomFeaturesListRepository } from './room-features-list.repository';
import { AddFeatureToRoomDto } from './dto/room-features-list.dto';
import { RoomService } from '../room.service';
import { RoomFeaturesService } from '../roomFeatures/roomFeatures.service';

@Injectable()
export class RoomFeaturesListService {
  constructor(
    @InjectRepository(RoomFeaturesListRepository)
    private roomFeaturesListRepository: RoomFeaturesListRepository,
    private roomService: RoomService,
    private roomFeaturesService: RoomFeaturesService,
  ) {}

  async assignFeatureToRoom(
    addFeatureToRoomDto: AddFeatureToRoomDto,
  ): Promise<void> {
    const { room_id, room_feature_id } = addFeatureToRoomDto;
    const room = await this.roomService.getRoomById(room_id);
    const roomFeature = await this.roomFeaturesService.getRoomFeatureById(
      room_feature_id,
    );
    const featureToRoom = this.roomFeaturesListRepository.create({
      room: room,
      roomFeature: roomFeature,
    });
    try {
      await this.roomFeaturesListRepository.save(featureToRoom);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
