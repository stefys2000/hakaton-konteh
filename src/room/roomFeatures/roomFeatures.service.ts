import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomFeaturesRepository } from './roomFeatures.repository';
import { RoomFeature } from './roomFeatures.entity';
import {
  AddRoomFeatureDto,
  DeleteRoomFeatureDto,
  UpdateRoomFeatureDto,
} from './dto/roomFeatures.dto';

@Injectable()
export class RoomFeaturesService {
  constructor(
    @InjectRepository(RoomFeaturesRepository)
    private roomFeaturesRepository: RoomFeaturesRepository,
  ) {}

  async getAllRoomFeatures(): Promise<RoomFeature[]> {
    return await this.roomFeaturesRepository.find();
  }

  async getRoomFeatureById(room_feature_id: string): Promise<RoomFeature> {
    const found = await this.roomFeaturesRepository.findOne(room_feature_id);
    if (!found) {
      throw new NotFoundException('Room feature not found');
    }
    return found;
  }

  async addRoomFeature(addRoomFeatureDto: AddRoomFeatureDto): Promise<void> {
    const foundRoom = await this.roomFeaturesRepository.findOne(
      addRoomFeatureDto,
    );
    if (foundRoom) {
      throw new BadRequestException('Room feature already exists');
    }
    const room = this.roomFeaturesRepository.create(addRoomFeatureDto);
    try {
      await this.roomFeaturesRepository.save(room);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async updateRoomFeaeture(
    updateRoomFeatureDto: UpdateRoomFeatureDto,
  ): Promise<void> {
    const { room_feature_id, room_feature_name } = updateRoomFeatureDto;
    const room = await this.getRoomFeatureById(room_feature_id);
    room.room_feature_name = room_feature_name;
    try {
      await this.roomFeaturesRepository.save(room);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async deleteRoomFeature(
    deleteRoomFeatureDto: DeleteRoomFeatureDto,
  ): Promise<void> {
    const { room_feature_id } = deleteRoomFeatureDto;
    const room = await this.getRoomFeatureById(room_feature_id);
    try {
      await this.roomFeaturesRepository.delete(room);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
