import { RoomFeaturesRepository } from './roomFeatures.repository';
import { RoomFeature } from './roomFeatures.entity';
import { AddRoomFeatureDto, DeleteRoomFeatureDto, UpdateRoomFeatureDto } from './dto/roomFeatures.dto';
export declare class RoomFeaturesService {
    private roomFeaturesRepository;
    constructor(roomFeaturesRepository: RoomFeaturesRepository);
    getAllRoomFeatures(): Promise<RoomFeature[]>;
    getRoomFeatureById(room_feature_id: string): Promise<RoomFeature>;
    addRoomFeature(addRoomFeatureDto: AddRoomFeatureDto): Promise<void>;
    updateRoomFeaeture(updateRoomFeatureDto: UpdateRoomFeatureDto): Promise<void>;
    deleteRoomFeature(deleteRoomFeatureDto: DeleteRoomFeatureDto): Promise<void>;
}
