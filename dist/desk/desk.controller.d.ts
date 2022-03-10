import { DeskService } from './desk.service';
import { Desk } from './desk.entity';
import { AssignUserDto, DeleteDeskDto, DeskByRoomDto, RegisterDeskDto, UpdateDeskDto } from './dto/desk.dto';
export declare class DeskController {
    private deskService;
    constructor(deskService: DeskService);
    getAllDesks(): Promise<Desk[]>;
    getDeskById(id: string): Promise<Desk>;
    getDesksByRoom(deskByRoomDto: DeskByRoomDto): Promise<Desk[]>;
    assignUserToDesk(assignUserDto: AssignUserDto): Promise<void>;
    registerDesk(registerDeskDto: RegisterDeskDto): Promise<void>;
    updateDesk(updateDeskDto: UpdateDeskDto): Promise<void>;
    deleteDesk(deleteDeskDto: DeleteDeskDto): Promise<void>;
}
