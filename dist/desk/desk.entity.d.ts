import { Room } from '../room/room.entity';
import { User } from '../user/user.entity';
import { DeskFeaturesList } from './desk-features-list/desk-features-list.entity';
export declare class Desk {
    id: string;
    user: User;
    room: Room;
    deskFeaturesList: DeskFeaturesList[];
}
