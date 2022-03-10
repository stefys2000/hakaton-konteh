import { RoomRepository } from './room.repository';
import { Room } from './room.entity';
import { FacultyRoomsDto, RegisterRoomDto, UpdateRoomDto } from './dto/room.dto';
import { FacultyService } from '../faculty/faculty.service';
export declare class RoomService {
    private roomRepository;
    private facultyService;
    constructor(roomRepository: RoomRepository, facultyService: FacultyService);
    getAllRooms(): Promise<Room[]>;
    getRoomsByFaculty(facultyRoomsDto: FacultyRoomsDto): Promise<Room[]>;
    getRoomById(id: string): Promise<Room>;
    registerRoom(registerRoomDto: RegisterRoomDto): Promise<void>;
    updateRoom(updateRoomDto: UpdateRoomDto): Promise<void>;
}
