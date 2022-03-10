import { RoomService } from './room.service';
import { Room } from './room.entity';
import { FacultyRoomsDto, RegisterRoomDto, UpdateRoomDto } from './dto/room.dto';
export declare class RoomController {
    private roomService;
    constructor(roomService: RoomService);
    getAllRooms(): Promise<Room[]>;
    getRoomsByFaculty(facultyRoomsDto: FacultyRoomsDto): Promise<Room[]>;
    registerRoom(registerRoomDto: RegisterRoomDto): Promise<void>;
    updateRoom(uprateRoomDto: UpdateRoomDto): Promise<void>;
}
