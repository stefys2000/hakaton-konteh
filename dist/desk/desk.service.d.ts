import { DeskRepository } from './desk.repository';
import { RoomService } from '../room/room.service';
import { Desk } from './desk.entity';
import { AssignUserDto, DeleteDeskDto, DeskByRoomDto, RegisterDeskDto, UpdateDeskDto } from "./dto/desk.dto";
import { UserService } from '../user/user.service';
export declare class DeskService {
    private deskRepository;
    private roomService;
    private userService;
    constructor(deskRepository: DeskRepository, roomService: RoomService, userService: UserService);
    getAllDesks(): Promise<Desk[]>;
    getDesksByRoom(deskByRoomDto: DeskByRoomDto): Promise<Desk[]>;
    getDeskById(id: string): Promise<Desk>;
    assignUserToDesk(assignUserDto: AssignUserDto): Promise<void>;
    registerDesk(registerDeskDto: RegisterDeskDto): Promise<void>;
    updateDesk(updateDeskDto: UpdateDeskDto): Promise<void>;
    deleteDesk(deleteDeskDto: DeleteDeskDto): Promise<void>;
}
