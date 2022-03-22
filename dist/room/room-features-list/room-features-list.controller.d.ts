import { RoomFeaturesListService } from './room-features-list.service';
import { AddFeatureToRoomDto } from './dto/room-features-list.dto';
export declare class RoomFeaturesListController {
    private roomFeaturesListService;
    constructor(roomFeaturesListService: RoomFeaturesListService);
    assignFeatureToRoom(addFeatureToRoomDto: AddFeatureToRoomDto): Promise<void>;
}
