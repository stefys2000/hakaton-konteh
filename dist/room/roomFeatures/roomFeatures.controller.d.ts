import { RoomFeaturesService } from './roomFeatures.service';
import { RoomFeature } from './roomFeatures.entity';
import { AddRoomFeatureDto, DeleteRoomFeatureDto, UpdateRoomFeatureDto } from './dto/roomFeatures.dto';
export declare class RoomFeaturesController {
    private roomFeaturesService;
    constructor(roomFeaturesService: RoomFeaturesService);
    getAllRoomFeatures(): Promise<RoomFeature[]>;
    addRoomFeature(addRoomFeatureDto: AddRoomFeatureDto): Promise<void>;
    updateRoomFeaeture(updateRoomFeatureDto: UpdateRoomFeatureDto): Promise<void>;
    deleteRoomFeature(deleteRoomFeatureDto: DeleteRoomFeatureDto): Promise<void>;
}
