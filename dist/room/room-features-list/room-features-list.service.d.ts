import { RoomFeaturesListRepository } from './room-features-list.repository';
import { AddFeatureToRoomDto } from './dto/room-features-list.dto';
import { RoomService } from '../room.service';
import { RoomFeaturesService } from '../roomFeatures/roomFeatures.service';
export declare class RoomFeaturesListService {
    private roomFeaturesListRepository;
    private roomService;
    private roomFeaturesService;
    constructor(roomFeaturesListRepository: RoomFeaturesListRepository, roomService: RoomService, roomFeaturesService: RoomFeaturesService);
    assignFeatureToRoom(addFeatureToRoomDto: AddFeatureToRoomDto): Promise<void>;
}
